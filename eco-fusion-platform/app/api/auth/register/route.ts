import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { Prisma } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { validatePassword } from "@/lib/validation/password";
import { ensurePersonalOrganization } from "@/lib/tenancy";

const DUPLICATE_EMAIL = "User with this email already exists";
const COMPANY_NAME_MAX = 100;

export async function POST(request: Request) {
    try {
        const { name, email, password, companyName } = await request.json();

        if (!email || !password) {
            return NextResponse.json(
                { error: "Email and password are required" },
                { status: 400 }
            );
        }

        // The business is named here or not at all: this is the only moment the
        // signup flow asks, and a business named after whoever happened to
        // register is a placeholder every screen then repeats.
        const company = String(companyName ?? "").trim();
        if (!company) {
            return NextResponse.json(
                { error: "Company name is required" },
                { status: 400 }
            );
        }
        if (company.length > COMPANY_NAME_MAX) {
            return NextResponse.json(
                { error: `Company name must be ${COMPANY_NAME_MAX} characters or fewer` },
                { status: 400 }
            );
        }

        // Validate password strength
        const passwordValidation = validatePassword(password);
        if (!passwordValidation.isValid) {
            return NextResponse.json(
                {
                    error: passwordValidation.errors[0],
                    errors: passwordValidation.errors,
                    strength: passwordValidation.strength
                },
                { status: 400 }
            );
        }

        // Emails are matched case-insensitively everywhere else, so store the
        // normalised form rather than letting "Sam@" and "sam@" become two farms.
        const normalisedEmail = String(email).trim().toLowerCase();

        const existingUser = await prisma.user.findUnique({
            where: { email: normalisedEmail },
        });

        if (existingUser) {
            return NextResponse.json({ error: DUPLICATE_EMAIL }, { status: 409 });
        }

        const hashedPassword = await bcrypt.hash(password, 12);

        let user;
        try {
            user = await prisma.user.create({
                data: {
                    name,
                    email: normalisedEmail,
                    password: hashedPassword,
                },
            });
        } catch (error) {
            // The check above is not atomic. Two requests racing the same address
            // both pass it, and the unique index decides the winner - the loser
            // gets the same answer it would have got a millisecond earlier,
            // rather than a 500 carrying a Prisma error string.
            if (
                error instanceof Prisma.PrismaClientKnownRequestError &&
                error.code === "P2002"
            ) {
                return NextResponse.json({ error: DUPLICATE_EMAIL }, { status: 409 });
            }
            throw error;
        }

        // A new account owns a farm of its own, or it can do nothing at all.
        await ensurePersonalOrganization(user.id, user.name, user.email, company);

        return NextResponse.json(
            {
                user: {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                },
            },
            { status: 201 }
        );
    } catch (error) {
        // The detail goes to the server log. Returning error.message handed the
        // caller Prisma's internals - table names, constraint names, connection
        // strings in some failures - for no benefit to them.
        console.error("Registration error:", error);
        return NextResponse.json(
            { error: "Something went wrong" },
            { status: 500 }
        );
    }
}
