"use client"

import { useEffect } from "react";
import { useRecoilState } from "recoil";
import axios from "axios";
import { isAuthenticatedState, isAuthLoadingState } from "@/store/atoms";

export default function useAuth() {
    const [isAuthenticated, setIsAuthenticated] = useRecoilState(isAuthenticatedState);
    const [isAuthLoading, setIsAuthLoading] = useRecoilState(isAuthLoadingState);

    useEffect(() => {
        const checkAuthStatus = async () => {
            try {
                const response = await axios.get('/api/auth/status');
                setIsAuthenticated(response.data.isAuthenticated);
            } catch (error) {
                console.error("Error checking authentication status:", error);
                setIsAuthenticated(false);
            } finally {
                setIsAuthLoading(false);
            }
        };

        checkAuthStatus();
    }, [setIsAuthenticated, setIsAuthLoading]);

    return { isAuthenticated, isAuthLoading };
}