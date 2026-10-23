/**
 * What the course player puts on screen for a video lesson.
 *
 * A video lesson keeps its link in `content`, and links come in two kinds. A
 * file the browser can play itself (.mp4, .webm) goes in a <video>. Anything
 * else - YouTube, Vimeo, or the embed link an AI presenter tool hands out for
 * each video it makes - only plays inside its host's own frame, so it goes in
 * an <iframe>. A watch page is not an embed page, so YouTube and Vimeo links
 * are turned into their player links on the way.
 *
 * Only https links play. A `javascript:` link in an iframe runs as the page
 * that holds it, and businesses write courses of their own.
 */

export interface VideoSource {
    kind: 'file' | 'embed';
    src: string;
}

const FILE = /\.(mp4|m4v|webm|ogv|ogg|mov)$/i;
const YOUTUBE_ID = /^[\w-]{6,}$/;

/** Null when there is nothing playable: no link yet, or one that is not https. */
export function videoSource(link: string | null | undefined): VideoSource | null {
    let url: URL;
    try {
        url = new URL((link ?? '').trim());
    } catch {
        return null;
    }
    if (url.protocol !== 'https:') return null;

    const host = url.hostname.replace(/^(www|m)\./, '');

    if (host === 'youtube.com' || host === 'youtu.be') {
        const id =
            host === 'youtu.be'
                ? url.pathname.split('/')[1]
                : url.searchParams.get('v') ?? url.pathname.match(/^\/(?:embed|shorts|live)\/([^/]+)/)?.[1];
        return id && YOUTUBE_ID.test(id) ? { kind: 'embed', src: `https://www.youtube-nocookie.com/embed/${id}` } : null;
    }

    if (host === 'vimeo.com') {
        // An unlisted video carries its privacy hash as a second path segment.
        const [, id, hash] = url.pathname.match(/^\/(\d+)(?:\/([\da-f]+))?/) ?? [];
        if (!id) return null;
        return { kind: 'embed', src: `https://player.vimeo.com/video/${id}${hash ? `?h=${hash}` : ''}` };
    }

    return { kind: FILE.test(url.pathname) ? 'file' : 'embed', src: url.href };
}
