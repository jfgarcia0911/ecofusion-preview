import { describe, expect, it } from 'vitest';
import { permissionForBusinessRequest, PERMISSIONS } from '@/lib/staff-permissions';
import { openWhileLocked, pageOpenWhileLocked } from '@/lib/sub-account-paths';

describe('what a request inside a business needs', () => {
    it('needs nothing to read, except integration keys', () => {
        expect(permissionForBusinessRequest('GET', '/api/sales')).toBeNull();
        expect(permissionForBusinessRequest('GET', '/api/settings/integrations')).toBe(PERMISSIONS.INTEGRATIONS);
    });

    it('names the permission each kind of change needs', () => {
        expect(permissionForBusinessRequest('PATCH', '/api/sales')).toBe(PERMISSIONS.WORK_IN_BUSINESS);
        expect(permissionForBusinessRequest('POST', '/api/organization/members')).toBe(PERMISSIONS.MANAGE_PEOPLE);
        expect(permissionForBusinessRequest('POST', '/api/training/assignments')).toBe(PERMISSIONS.ASSIGN_COURSES);
        expect(permissionForBusinessRequest('DELETE', '/api/training/gifts')).toBe(PERMISSIONS.TAKE_CLASSES);
    });

    it('treats personal requests as needing nothing', () => {
        expect(permissionForBusinessRequest('PATCH', '/api/notifications')).toBeNull();
        expect(permissionForBusinessRequest('PATCH', '/api/user/password')).toBeNull();
    });
});

describe('what a locked sub-account may still reach', () => {
    it('keeps billing and settings open', () => {
        expect(openWhileLocked('/api/billing/sub-account')).toBe(true);
        expect(pageOpenWhileLocked('/settings/billing')).toBe(true);
    });

    it('closes the working screens', () => {
        expect(openWhileLocked('/api/sales')).toBe(false);
        expect(openWhileLocked('/api/billingx')).toBe(false);
        expect(pageOpenWhileLocked('/dashboard/executive')).toBe(false);
    });
});
