"use client"
import { RecoilRoot } from "recoil";
import { useEffect, useState } from "react";
import { ChildrenWrapperProps } from "@/types";

export default function ({ children }: ChildrenWrapperProps) {
    const [isClient, setIsClient] = useState(false)
    useEffect(() => {
        setIsClient(true)
    }, [])

    if (!isClient) {
        return null
    }

    return (
        <RecoilRoot>
            {children}
        </RecoilRoot>
    )
}