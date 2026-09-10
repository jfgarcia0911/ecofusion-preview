/**
 * Who owns a course, and who may see it.
 *
 * A course is either EcoFusion's, written once and loaded into the farms that
 * should have it, or a farm's own, written for its people and visible nowhere
 * else. `organizationId` is the whole distinction: null for the first, a farm
 * for the second.
 */

import type { Prisma } from '@prisma/client';
import { prisma } from '@/lib/prisma';

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

/** A request that asked for something a business cannot be given. */
export class CourseGrantError extends Error {}

/**
 * Sets exactly which of EcoFusion's courses a business carries.
 *
 * Called by the business's Classes screen, where its owner (or the master
 * account, which enters as one) chooses. The rules live here rather than in
 * the route so that any later way of choosing inherits them.
 *
 * Only EcoFusion's own courses can be granted. A course a business wrote for
 * itself is not anybody else's to hand out, and it is never a grant in the
 * first place, so nothing here reaches it.
 *
 * The difference is applied rather than the set being cleared and rewritten,
 * so a course the business already had keeps the date it was granted and the
 * name of whoever granted it: the only record of how its academy came to look
 * the way it does. Unloading leaves completions alone, since somebody who
 * finished a course still finished it.
 */
export async function setCourseGrants(
  organizationId: string,
  courseIds: string[],
  grantedById: string
): Promise<{ courseIds: string[]; loaded: number; unloaded: number }> {
  // A repeated id is one course asked for twice, not a course that does not
  // exist. Counting it twice made the check below report the wrong fault.
  const requested = [...new Set(courseIds)];

  const grantable = await prisma.trainingCourse.findMany({
    where: { id: { in: requested }, organizationId: null },
    select: { id: true },
  });
  if (grantable.length !== requested.length) {
    throw new CourseGrantError('One or more of those courses is not an EcoFusion course');
  }
  const grantableIds = grantable.map((course) => course.id);

  const held = await prisma.courseGrant.findMany({
    where: { organizationId },
    select: { courseId: true },
  });
  const heldIds = new Set(held.map((grant) => grant.courseId));
  const wanted = new Set(grantableIds);

  const toRemove = [...heldIds].filter((id) => !wanted.has(id));
  const toAdd = grantableIds.filter((id) => !heldIds.has(id));

  if (toRemove.length > 0 || toAdd.length > 0) {
    await prisma.$transaction([
      ...(toRemove.length > 0
        ? [prisma.courseGrant.deleteMany({ where: { organizationId, courseId: { in: toRemove } } })]
        : []),
      ...(toAdd.length > 0
        ? [
            prisma.courseGrant.createMany({
              data: toAdd.map((courseId) => ({ courseId, organizationId, grantedById })),
              skipDuplicates: true,
            }),
          ]
        : []),
    ]);
  }

  return { courseIds: grantableIds, loaded: toAdd.length, unloaded: toRemove.length };
}
