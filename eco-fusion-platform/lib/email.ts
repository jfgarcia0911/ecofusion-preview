/**
 * Sending email, through Resend's HTTP API.
 *
 * Configured with RESEND_API_KEY and EMAIL_FROM (an address on a domain
 * verified in Resend). Without them nothing is sent and the caller is told so,
 * which the password reset turns into "ask your owner or support" rather than
 * pretending a message is on its way.
 */

export interface Email {
    to: string;
    subject: string;
    text: string;
    html?: string;
}

export function isEmailConfigured(): boolean {
    return Boolean(process.env.RESEND_API_KEY && process.env.EMAIL_FROM);
}

/** True when the provider accepted the message. Never throws. */
export async function sendEmail(email: Email): Promise<boolean> {
    if (!isEmailConfigured()) {
        console.error('Email not sent: RESEND_API_KEY / EMAIL_FROM are not set.');
        return false;
    }
    try {
        const res = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                from: process.env.EMAIL_FROM,
                to: [email.to],
                subject: email.subject,
                text: email.text,
                ...(email.html ? { html: email.html } : {}),
            }),
        });
        if (!res.ok) {
            console.error('Email provider refused a message:', res.status, await res.text().catch(() => ''));
            return false;
        }
        return true;
    } catch (error) {
        console.error('Email provider unreachable:', error);
        return false;
    }
}
