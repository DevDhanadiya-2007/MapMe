import { Session } from "next-auth";
import { JWT } from "next-auth/jwt";

interface AuthCallbackProps {
    session: Session;
    token: JWT;
}

interface AuthPageProps {
    onGoogleSignIn: () => void;
    onGithubSignIn: () => void;
}

export type {
    AuthCallbackProps,
    AuthPageProps
}