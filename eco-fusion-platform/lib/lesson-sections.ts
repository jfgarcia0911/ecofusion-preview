/**
 * A course's lessons as the course player's sidebar shows them.
 *
 * A course taught in modules has its lessons gathered under each module, in a
 * group that opens and closes. Lessons are taken in order, so a module is a
 * run of consecutive lessons that name it. A lesson in no module is a section
 * of its own and gets no header, so a course without modules is the one list
 * it always was.
 */

export interface Section<T> {
    module: string | null;
    /** Where the section starts in the course's lesson list. */
    start: number;
    lessons: T[];
}

export function sectionsOf<T extends { module: string | null }>(lessons: T[]): Section<T>[] {
    const sections: Section<T>[] = [];
    lessons.forEach((lesson, index) => {
        const last = sections[sections.length - 1];
        if (last && lesson.module && last.module === lesson.module) last.lessons.push(lesson);
        else sections.push({ module: lesson.module, start: index, lessons: [lesson] });
    });
    return sections;
}
