/**
 * Capturing a configured farm, and starting others from it.
 *
 * A farm that has been set up well is the best available description of how a
 * farm should be set up, so a template is taken from a real one rather than
 * written by hand and kept in step by nobody.
 *
 * What travels is configuration: business units, zones and their alert
 * thresholds, growing parameters, and which of EcoFusion's classes the farm
 * carries. What never travels is anything that happened - stock, sales, sensor
 * readings, training records, people. A template describes a farm's shape, not
 * its history, and copying somebody's harvest into a stranger's account would
 * be a data leak wearing a feature's clothes.
 */

import { prisma } from '@/lib/prisma';
import { DEFAULT_BUSINESS_UNITS } from '@/lib/business-units';

/** Bump when the shape below changes in a way older payloads cannot satisfy. */
export const SNAPSHOT_VERSION = 1;

export interface SnapshotBusinessUnit {
  key: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  accent: string;
  keywords: string[];
  sortOrder: number;
  enabled: boolean;
}

export interface SnapshotPayload {
  businessUnits: SnapshotBusinessUnit[];
  zones: {
    name: string;
    type: string;
    status: string;
    thresholds: {
      parameter: string;
      minValue: number | null;
      maxValue: number | null;
      enabled: boolean;
      alertLevel: string;
    }[];
  }[];
  growthParameters: {
    type: string;
    species: string;
    variety: string | null;
    seedlingDays: number | null;
    growingDays: number;
    harvestWeight: number | null;
    optimalTempMin: number | null;
    optimalTempMax: number | null;
    optimalPh: number | null;
    expectedYield: number | null;
    yieldUnit: string | null;
    notes: string | null;
  }[];
  /**
   * EcoFusion courses the business held, in snapshots taken before courses
   * were sold. No longer captured and never applied: a course is bought, so a
   * template handing classes out free would be a way around the shop.
   */
  courseIds?: string[];
}

/** Read one farm's configuration into a payload. */
export async function captureSnapshot(organizationId: string): Promise<SnapshotPayload> {
  const [businessUnits, zones, growthParameters] = await Promise.all([
    prisma.businessUnit.findMany({
      where: { organizationId },
      orderBy: { sortOrder: 'asc' },
    }),
    prisma.zone.findMany({
      where: { organizationId },
      include: { alertThresholds: true },
      orderBy: { createdAt: 'asc' },
    }),
    prisma.growthParameter.findMany({
      where: { organizationId },
      orderBy: { createdAt: 'asc' },
    }),
  ]);

  return {
    businessUnits: businessUnits.map((unit) => ({
      key: unit.key,
      title: unit.title,
      description: unit.description,
      icon: unit.icon,
      color: unit.color,
      accent: unit.accent,
      keywords: unit.keywords,
      sortOrder: unit.sortOrder,
      enabled: unit.enabled,
    })),
    zones: zones.map((zone) => ({
      name: zone.name,
      type: zone.type,
      status: zone.status,
      thresholds: zone.alertThresholds.map((t) => ({
        parameter: t.parameter,
        minValue: t.minValue,
        maxValue: t.maxValue,
        enabled: t.enabled,
        alertLevel: t.alertLevel,
      })),
    })),
    growthParameters: growthParameters.map((p) => ({
      type: p.type,
      species: p.species,
      variety: p.variety,
      seedlingDays: p.seedlingDays,
      growingDays: p.growingDays,
      harvestWeight: p.harvestWeight,
      optimalTempMin: p.optimalTempMin,
      optimalTempMax: p.optimalTempMax,
      optimalPh: p.optimalPh,
      expectedYield: p.expectedYield,
      yieldUnit: p.yieldUnit,
      notes: p.notes,
    })),
  };
}

/** What applying a snapshot actually did. */
export interface ApplyResult {
  businessUnits: number;
  zones: number;
  growthParameters: number;
}

/** Case-insensitive key for deciding whether a farm already has something. */
function fold(value: string | null | undefined): string {
  return (value ?? '').trim().toLowerCase();
}

/**
 * Write a payload into a farm.
 *
 * Additive, and safe to run twice. Anything the farm already has under the
 * same name is left alone rather than overwritten, because a snapshot applied
 * to a working farm is meant to fill gaps, not to undo whatever its operator
 * has decided since.
 *
 * `ownerUserId` is written to the rows that record who entered them: zones and
 * growing parameters carry a userId as well as an organizationId, and a
 * template has no author to put there.
 */
export async function applySnapshot(
  payload: SnapshotPayload,
  organizationId: string,
  ownerUserId: string
): Promise<ApplyResult> {
  const result: ApplyResult = {
    businessUnits: 0,
    zones: 0,
    growthParameters: 0,
  };

  if (payload.businessUnits?.length) {
    // Unique on [organizationId, key], so skipDuplicates is the whole of
    // "leave what is already there alone".
    const created = await prisma.businessUnit.createMany({
      data: payload.businessUnits.map((unit) => ({ ...unit, organizationId })),
      skipDuplicates: true,
    });
    result.businessUnits = created.count;
  }

  if (payload.zones?.length) {
    const existing = await prisma.zone.findMany({
      where: { organizationId },
      select: { name: true },
    });
    const taken = new Set(existing.map((zone) => fold(zone.name)));

    // One at a time, because each zone creates its thresholds with it.
    for (const zone of payload.zones) {
      if (taken.has(fold(zone.name))) continue;
      await prisma.zone.create({
        data: {
          organizationId,
          userId: ownerUserId,
          name: zone.name,
          type: zone.type,
          status: zone.status,
          alertThresholds: zone.thresholds?.length
            ? { createMany: { data: zone.thresholds } }
            : undefined,
        },
      });
      taken.add(fold(zone.name));
      result.zones += 1;
    }
  }

  if (payload.growthParameters?.length) {
    const existing = await prisma.growthParameter.findMany({
      where: { organizationId },
      select: { species: true, variety: true },
    });
    const taken = new Set(existing.map((p) => fold(p.species) + '|' + fold(p.variety)));

    const fresh = payload.growthParameters.filter(
      (p) => !taken.has(fold(p.species) + '|' + fold(p.variety))
    );

    if (fresh.length) {
      const created = await prisma.growthParameter.createMany({
        data: fresh.map((p) => ({ ...p, organizationId, userId: ownerUserId })),
        skipDuplicates: true,
      });
      result.growthParameters = created.count;
    }
  }

  return result;
}

/** The payload of the snapshot marked default, or null when there is none. */
export async function defaultSnapshot(): Promise<SnapshotPayload | null> {
  const row = await prisma.snapshot.findFirst({
    where: { isDefault: true },
    select: { payload: true, version: true },
  });
  if (!row) return null;

  if (row.version !== SNAPSHOT_VERSION) {
    console.warn(
      '[snapshots] default snapshot is version ' + row.version +
        ', this build reads ' + SNAPSHOT_VERSION + '. Ignoring it.'
    );
    return null;
  }

  return row.payload as unknown as SnapshotPayload;
}

/**
 * The business units a brand new farm starts with.
 *
 * The default snapshot's when one is marked, and the built-in seven otherwise,
 * so a platform that has never captured a snapshot behaves exactly as before.
 */
export async function startingBusinessUnits(): Promise<SnapshotBusinessUnit[]> {
  const snapshot = await defaultSnapshot();
  if (snapshot?.businessUnits?.length) return snapshot.businessUnits;

  return DEFAULT_BUSINESS_UNITS.map((unit, index) => ({
    ...unit,
    sortOrder: index + 1,
  })) as SnapshotBusinessUnit[];
}
