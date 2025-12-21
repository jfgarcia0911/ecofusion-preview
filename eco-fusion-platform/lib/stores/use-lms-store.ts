
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface LmsState {
    completedLessons: string[];
    completedCourses: string[];
    xp: number;
    quizScores: Record<string, number>; // lessonId -> score (0-100)

    // Actions
    completeLesson: (lessonId: string) => void;
    completeCourse: (courseId: string) => void;
    addXp: (amount: number) => void;
    submitQuizScore: (lessonId: string, score: number) => void;
    isLessonCompleted: (lessonId: string) => boolean;
    isCourseCompleted: (courseId: string) => boolean;
    getCourseProgress: (courseId: string, totalLessons: number) => number;
}

export const useLmsStore = create<LmsState>()(
    persist(
        (set, get) => ({
            completedLessons: [],
            completedCourses: [],
            xp: 0,
            quizScores: {},

            completeLesson: (lessonId: string) => set((state) => {
                if (state.completedLessons.includes(lessonId)) return state;
                return { completedLessons: [...state.completedLessons, lessonId] };
            }),

            completeCourse: (courseId: string) => set((state) => {
                if (state.completedCourses.includes(courseId)) return state;
                return { completedCourses: [...state.completedCourses, courseId] };
            }),

            addXp: (amount: number) => set((state) => ({ xp: state.xp + amount })),

            submitQuizScore: (lessonId: string, score: number) => set((state) => ({
                quizScores: { ...state.quizScores, [lessonId]: score }
            })),

            isLessonCompleted: (lessonId: string) => get().completedLessons.includes(lessonId),

            isCourseCompleted: (courseId: string) => get().completedCourses.includes(courseId),

            getCourseProgress: (courseId: string, totalLessons: number) => {
                const { completedLessons } = get();
                // This is a rough check. Ideally we filter completedLessons by courseId prefix, 
                // but our IDs are like 'l1-1-101'.
                // Let's filter by suffix "-{courseId}"
                const completedCount = completedLessons.filter(id => id.endsWith(`-${courseId}`)).length;
                if (totalLessons === 0) return 0;
                return Math.min(100, Math.round((completedCount / totalLessons) * 100));
            }
        }),
        {
            name: 'lms-storage',
            storage: createJSONStorage(() => localStorage),
        }
    )
);
