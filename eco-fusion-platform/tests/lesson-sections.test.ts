import { describe, expect, it } from 'vitest';
import { sectionsOf } from '@/lib/lesson-sections';

const lesson = (id: string, module: string | null) => ({ id, module });

describe('lesson sections', () => {
    it('gathers a module run under one header, in order', () => {
        const sections = sectionsOf([
            lesson('a', 'Intro'),
            lesson('b', 'Intro'),
            lesson('quiz', 'Intro'),
            lesson('c', 'BRRRR'),
        ]);
        expect(sections.map((s) => [s.module, s.start, s.lessons.map((l) => l.id)])).toEqual([
            ['Intro', 0, ['a', 'b', 'quiz']],
            ['BRRRR', 3, ['c']],
        ]);
    });

    it('leaves a course without modules as one lesson per section', () => {
        const sections = sectionsOf([lesson('a', null), lesson('b', null)]);
        expect(sections).toEqual([
            { module: null, start: 0, lessons: [lesson('a', null)] },
            { module: null, start: 1, lessons: [lesson('b', null)] },
        ]);
    });
});
