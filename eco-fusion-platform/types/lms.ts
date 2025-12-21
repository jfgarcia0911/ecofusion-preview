export type ContentType = 'video' | 'text' | 'pdf' | 'interactive' | 'quiz';

export interface QuizQuestion {
    id: string;
    question: string;
    options: string[];
    correctAnswer: number; // index
}

export interface Lesson {
    id: string;
    title: string;
    type: ContentType;
    duration: number; // minutes
    content?: string; // markdown or text
    videoUrl?: string; // for video type
    questions?: QuizQuestion[]; // for quiz type
    completed?: boolean; // User state
}

export interface Module {
    id: string;
    title: string;
    description: string;
    lessons: Lesson[];
    duration: number; // calculated sum of lessons
}

export interface Course {
    id: string;
    code: string; // e.g., "101"
    title: string;
    description: string;
    thumbnail: string;
    duration: string; // display string e.g. "8 hours"
    price: number;
    level: 'Foundational' | 'Intermediate' | 'Advanced' | 'Specialist' | 'Master';
    modules: Module[];
    tags: string[];

    // Computed/User specific
    progress?: number; // 0-100
    isAssigned?: boolean;
    dueDate?: string;
    certificateUrl?: string;
}

export interface UserCourseProgress {
    userId: string;
    courseId: string;
    completedLessonIds: string[];
    quizScores: Record<string, number>; // lessonId -> score
    status: 'not_started' | 'in_progress' | 'completed';
    lastAccessed: string; // ISO date
}
