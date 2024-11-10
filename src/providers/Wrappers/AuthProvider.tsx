"use client"
import useAuth from "@/hooks/useAuth";
import { ChildrenWrapperProps } from "@/types";
import { usePathname, useRouter } from "next/navigation";
import { Toaster, toast } from 'react-hot-toast'
import Loader from "@/components/ui/items/Loader";
import { useEffect } from "react";

export default function AuthProvider({ children }: ChildrenWrapperProps) {
    const { isAuthenticated, isAuthLoading } = useAuth()
    const pathname = usePathname()
    const router = useRouter()

    useEffect(() => {
        if (!isAuthLoading && !isAuthenticated && pathname !== '/' && pathname === '/auth') {
            toast.error('Unauthorized user, Redirecting to login.', {
                duration: 2000,
                position: 'top-center',
                icon: '🔒',
                style: {
                    borderRadius: '10px',
                    background: '#333',
                    color: '#fff',
                },
            })
            router.push('/auth')
        }
    }, [isAuthenticated, isAuthLoading, pathname, router])

    if (isAuthLoading) {
        return <Loader />;
    }

    return (
        <>
            {children}
            <Toaster />
        </>
    )
}