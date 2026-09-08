/**
 * Who owns a course, and who may see it.
 *
 * A course is either EcoFusion's, written once and loaded into the farms that
 * should have it, or a farm's own, written for its people and visible nowhere
 * else. `organizationId` is the whole distinction: null for the first, a farm
 * for the second.
 */

import type { Prisma } from '@prisma/client';

/**
 * The courses one farm may see: what it wrote, and what it was given.
 *
 * EcoFusion's courses are deliberately not visible by default. A farm holds
 * the ones loaded into it and no others, so its academy is what someone
 * decided it should be rather than everything that exists.
 */
export function visibleToOrganization(organizationId: string): Prisma.TrainingCourseWhereInput {
  return {
    OR: [
      { organizationId },
      { grants: { some: { organizationId } } },
    ],
  };
}

/**
 * Whether a farm may edit or delete a course.
 *
 * Only its owner. A granted course is EcoFusion's copy and stays that way,
 * which is the point of granting rather than copying: one correction, every
 * farm. This is the rule whose absence let any farm's manager rewrite the
 * catalogue everybody else was working through.
 */
export function ownedByOrganization(
  course: { organizationId: string | null },
  organizationId: string
): boolean {
  return course.organizationId === organizationId;
}
