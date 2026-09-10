/**
 * How a list of courses is arranged for somebody choosing from it.
 *
 * There are the better part of a hundred, so the shape of the curriculum has
 * to come before the courses themselves. Two screens now offer that choice -
 * which classes a business carries, and which of them its owner should start
 * with - and they must agree about the order, or the same catalogue reads as
 * two different catalogues depending on which button was pressed.
 */

/** The order the curriculum is meant to be climbed in. */
export const LEVELS = ["Foundational", "Intermediate", "Advanced", "Expert", "Master"];

/** Hours, said the way a person would say them. */
export function hours(minutes: number): string {
    if (!minutes) return "";
    if (minutes < 60) return `${minutes}m`;
    const value = minutes / 60;
    return `${Number.isInteger(value) ? value : value.toFixed(1)}h`;
}

interface Categorised {
    category: string;
}

/**
 * Courses grouped by category, levels first and in order.
 *
 * Alphabetical would put Advanced above Foundational, which is the wrong shape
 * for a list somebody reads to decide what to start with. Anything not a named
 * level - the compliance and safety categories, and whatever a business wrote
 * itself - is a group of its own, listed after them and sorted by name.
 */
export function groupByCategory<T extends Categorised>(
    courses: T[]
): Array<{ category: string; courses: T[] }> {
    const byCategory = new Map<string, T[]>();
    for (const course of courses) {
        const list = byCategory.get(course.category) ?? [];
        list.push(course);
        byCategory.set(course.category, list);
    }

    const levels = LEVELS.filter((level) => byCategory.has(level));
    const rest = [...byCategory.keys()].filter((c) => !LEVELS.includes(c)).sort();

    return [...levels, ...rest].map((category) => ({
        category,
        courses: byCategory.get(category)!,
    }));
}
