import { describe, expect, it } from 'vitest';
import { videoSource } from '@/lib/lesson-video';

describe('video lessons', () => {
    it('plays a video file in the page', () => {
        expect(videoSource('https://cdn.example.com/ep1.mp4')).toEqual({
            kind: 'file',
            src: 'https://cdn.example.com/ep1.mp4',
        });
    });

    it('turns YouTube and Vimeo watch links into their players', () => {
        const youtube = 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ';
        expect(videoSource('https://www.youtube.com/watch?v=dQw4w9WgXcQ')?.src).toBe(youtube);
        expect(videoSource('https://youtu.be/dQw4w9WgXcQ?t=5')?.src).toBe(youtube);
        expect(videoSource('https://vimeo.com/76979871')?.src).toBe('https://player.vimeo.com/video/76979871');
        expect(videoSource('https://vimeo.com/76979871/abc123')?.src).toBe(
            'https://player.vimeo.com/video/76979871?h=abc123'
        );
    });

    it('frames any other link, as an AI presenter embed', () => {
        expect(videoSource('https://app.heygen.com/embeds/abc')).toEqual({
            kind: 'embed',
            src: 'https://app.heygen.com/embeds/abc',
        });
    });

    it('plays nothing that is missing or not https', () => {
        expect(videoSource(null)).toBeNull();
        expect(videoSource('')).toBeNull();
        expect(videoSource('Video content')).toBeNull();
        expect(videoSource('http://cdn.example.com/ep1.mp4')).toBeNull();
        expect(videoSource('javascript:alert(1)')).toBeNull();
    });
});
