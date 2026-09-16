import { describe, expect, it } from 'vitest';
import { z } from 'zod';
import { money, optionalDate, optionalNumber, optionalText, recordId, requiredInt } from '@/lib/validation/fields';
import { validatePassword } from '@/lib/validation/password';

const update = z.object({
    id: recordId,
    notes: optionalText(10),
    quantity: requiredInt(0, 100).optional(),
    weight: optionalNumber(0, 5),
    due: optionalDate,
});

describe('request fields', () => {
    it('drops keys the schema does not name, including nested relation writes', () => {
        const out = update.parse({
            id: 'x',
            user: { update: { role: 'platform_admin' } },
            organizationId: 'other',
        });
        expect(out).toEqual({ id: 'x' });
    });

    it('reads form strings the way a person meant them', () => {
        expect(update.parse({ id: 'x', quantity: '7', weight: '', due: '' })).toMatchObject({
            quantity: 7,
            weight: null,
            due: null,
        });
    });

    it('refuses what is not a number, a date or in range', () => {
        const bad = [
            { quantity: true },
            { quantity: -1 },
            { quantity: 1.5 },
            { weight: 'abc' },
            { due: 'nope' },
            { notes: 'x'.repeat(11) },
        ];
        for (const fields of bad) {
            expect(update.safeParse({ id: 'x', ...fields }).success).toBe(false);
        }
    });

    it('keeps money to the cent and never negative', () => {
        expect(money().parse(1.239)).toBe(1.24);
        expect(money().safeParse(-0.01).success).toBe(false);
    });
});

describe('passwords', () => {
    it('refuses weak ones and accepts a strong one', () => {
        expect(validatePassword('short').isValid).toBe(false);
        expect(validatePassword('alllowercaseletters1!').isValid).toBe(false);
        expect(validatePassword('Str0ng!Enough-2026').isValid).toBe(true);
    });
});
