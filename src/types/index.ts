import { ReactNode } from "react";

interface ChildrenWrapperProps {
    children: ReactNode
}

interface GlowingButtonProps {
    children: React.ReactNode;
    icon: React.ReactElement;
    'aria-label': string;
    onClick?: () => void
}

export type {
    ChildrenWrapperProps,
    GlowingButtonProps
}