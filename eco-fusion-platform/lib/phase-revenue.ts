/**
 * Resolving which business unit a sale line belongs to.
 *
 * A line carries an explicit `phaseId` when the seller chose one. Older rows
 * predate that column, so they fall back to matching the product name against
 * per-unit keywords. The fallback resolves to at most ONE unit — the first
 * match in `PHASE_PRODUCT_MAPPING` order — because 'energy' appears under both
 * methane-gas and solar-energy, and counting such a line twice inflated the
 * combined total beyond actual revenue.
 *
 * Lines matching nothing are reported as unassigned rather than dropped, so
 * revenue never silently disappears from a dashboard.
 */

// Map phase IDs to product types, used only when a line has no explicit phase.
// Insertion order is the fallback's precedence order.
export const PHASE_PRODUCT_MAPPING: Record<string, string[]> = {
  'aquaculture': ['fish', 'tilapia', 'catfish', 'seafood'],
  'plant-production': ['plants', 'vegetables', 'herbs', 'lettuce', 'greens', 'produce'],
  'methane-gas': ['methane', 'biogas', 'gas'],
  'fertilizer': ['fertilizer', 'compost', 'organic'],
  'training-center': ['training', 'event', 'education', 'workshop'],
  'restaurant': ['food', 'meal', 'restaurant', 'dining'],
  'solar-energy': ['solar', 'power', 'energy'],
};

export interface PhaseRevenueItem {
  productName: string;
  total: number;
  phaseId?: string | null;
}

export interface PhaseRevenueBreakdown {
  /** Revenue per phase id. Every id in PHASE_PRODUCT_MAPPING is present. */
  byPhase: Map<string, number>;
  /** Revenue on lines that matched no phase at all. */
  unassigned: number;
}

/** The single phase a line belongs to, or null when nothing matches. */
export function resolvePhaseId(item: PhaseRevenueItem): string | null {
  if (item.phaseId) return item.phaseId;

  const nameLower = item.productName.toLowerCase();
  for (const [phaseId, productTypes] of Object.entries(PHASE_PRODUCT_MAPPING)) {
    if (productTypes.some((type) => nameLower.includes(type))) return phaseId;
  }
  return null;
}

function roundCents(value: number): number {
  return Math.round(value * 100) / 100;
}

/** Split revenue across every phase in one pass. Totals sum to the input total. */
export function groupRevenueByPhase(items: PhaseRevenueItem[]): PhaseRevenueBreakdown {
  const byPhase = new Map<string, number>(
    Object.keys(PHASE_PRODUCT_MAPPING).map((phaseId) => [phaseId, 0])
  );
  let unassigned = 0;

  for (const item of items) {
    const phaseId = resolvePhaseId(item);
    if (phaseId === null || !byPhase.has(phaseId)) {
      unassigned += item.total;
      continue;
    }
    byPhase.set(phaseId, byPhase.get(phaseId)! + item.total);
  }

  for (const [phaseId, total] of byPhase) byPhase.set(phaseId, roundCents(total));
  return { byPhase, unassigned: roundCents(unassigned) };
}

/** Total for one phase. */
export function sumPhaseRevenue(items: PhaseRevenueItem[], phaseId: string): number {
  return roundCents(
    items.reduce((sum, item) => (resolvePhaseId(item) === phaseId ? sum + item.total : sum), 0)
  );
}

/** First and last instant of the month containing `now`. */
export function monthRange(now: Date = new Date()) {
  return {
    startOfMonth: new Date(now.getFullYear(), now.getMonth(), 1),
    endOfMonth: new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59),
  };
}
