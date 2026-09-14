import { NextResponse } from 'next/server';
import { auth } from '@/auth';
import { prisma } from '@/lib/prisma';

// Notifications belong to a person, not to a business, so these routes ask
// only who is signed in - the same question the bell's unread count asks in
// components/layout/Header. Asking for an active business as well refused
// support accounts, which belong to none, and anyone whose business had
// lapsed, leaving the bell counting notifications its list would not show.
async function signedInUserId(): Promise<string | null> {
    const session = await auth();
    return session?.user?.id ?? null;
}

const unauthorized = () => NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

// GET - Fetch user's notifications
export async function GET() {
    try {
        const userId = await signedInUserId();
        if (!userId) return unauthorized();

        const notifications = await prisma.notification.findMany({
            where: { userId },
            orderBy: { createdAt: 'desc' },
            take: 50, // Limit to 50 most recent
        });

        return NextResponse.json(notifications);
    } catch (error) {
        console.error('Failed to fetch notifications:', error);
        return NextResponse.json({ error: 'Failed to fetch notifications' }, { status: 500 });
    }
}

// PATCH - Mark notifications as read
export async function PATCH(request: Request) {
    try {
        const userId = await signedInUserId();
        if (!userId) return unauthorized();

        const data = await request.json();
        const { notificationIds, markAllRead } = data;

        if (markAllRead) {
            await prisma.notification.updateMany({
                where: { userId, read: false },
                data: { read: true },
            });
        } else if (notificationIds?.length) {
            await prisma.notification.updateMany({
                where: {
                    id: { in: notificationIds },
                    userId,
                },
                data: { read: true },
            });
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Failed to update notifications:', error);
        return NextResponse.json({ error: 'Failed to update notifications' }, { status: 500 });
    }
}

// DELETE - Delete a notification
export async function DELETE(request: Request) {
    try {
        const userId = await signedInUserId();
        if (!userId) return unauthorized();

        const { searchParams } = new URL(request.url);
        const notificationId = searchParams.get('id');

        if (!notificationId) {
            return NextResponse.json({ error: 'Notification ID required' }, { status: 400 });
        }

        await prisma.notification.delete({
            where: {
                id: notificationId,
                userId,
            },
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Failed to delete notification:', error);
        return NextResponse.json({ error: 'Failed to delete notification' }, { status: 500 });
    }
}
