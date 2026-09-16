import AuthShell from "@/components/auth/AuthShell";
import ResetPasswordForm from "./reset-form";

/** Setting a new password from an emailed link. */
export default async function ResetPasswordPage({
    searchParams,
}: {
    searchParams: Promise<{ token?: string }>;
}) {
    const { token } = await searchParams;
    return (
        <AuthShell title="Set a new password" subtitle="Choose the password you will sign in with">
            <ResetPasswordForm token={typeof token === "string" ? token : ""} />
        </AuthShell>
    );
}
