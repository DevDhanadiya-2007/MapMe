import { ReactNode, ReactElement, JSXElementConstructor } from "react"

type GlowingButtonProps = {
    children: ReactNode,
    icon: ReactElement<any, string | JSXElementConstructor<any>> | undefined,
    [key: string]: any
    'aria-label': string
}

export type {
    GlowingButtonProps
}