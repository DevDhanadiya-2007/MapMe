'use client'

import { useState, useEffect } from 'react'
import { Box, ChakraProvider, Flex, Heading, Text, VStack } from "@chakra-ui/react"
import { motion, AnimatePresence } from "framer-motion"
import { User, Github } from 'lucide-react'
import { FcGoogle } from "react-icons/fc"
import GlowingButton from '@/components/ui/GlowingButton'
import AnimatedBackground from '@/components/ui/backgrounds/Auth-Background'
import SkeletonItem from '@/components/ui/SkeletonItem'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

export default function page() {
    const [isLoading, setIsLoading] = useState(true)
    const { data: session, status } = useSession()
    const router = useRouter()

    const handleSignIn = async (provider: string) => {
        await signIn(provider, { callbackUrl: '/' })
    }

    useEffect(() => {
        if (status === 'loading') {
            setIsLoading(true)
        } else {
            setIsLoading(false)
            if (session) {
                router.push('/')
            }
        }
    }, [session, status, router])

    return (
        <Box
            minH="100vh"
            position="relative"
            overflow="hidden"
            display="flex"
            alignItems="center"
            justifyContent="center"
            bg="black"
        >
            <AnimatedBackground />
            <AnimatePresence mode="wait">
                {isLoading ? (
                    <motion.div
                        key="skeleton"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        style={{ zIndex: 2, width: '100%', maxWidth: '400px', padding: '2rem' }}
                    >
                        <VStack spacing={8} width="100%" align="stretch">
                            <SkeletonItem height="40px" width="200px" />
                            <VStack spacing={4} width="100%" align="stretch">
                                <SkeletonItem height="48px" width="100%" />
                                <SkeletonItem height="48px" width="100%" />
                                <SkeletonItem height="48px" width="100%" />
                                <SkeletonItem height="20px" width="200px" />
                            </VStack>
                        </VStack>
                    </motion.div>
                ) : (
                    <Flex
                        as={motion.div}
                        direction="column"
                        align="center"
                        justify="center"
                        zIndex={2}
                        width="100%"
                        maxW="400px"
                        p={8}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: '0.5s' }}
                    >
                        <VStack spacing={8} width="100%" align="stretch">
                            <Heading
                                as={motion.h1}
                                color="white"
                                fontSize="3xl"
                                fontWeight="bold"
                                letterSpacing="wide"
                                textAlign="center"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: '0.2s', duration: '0.5s' }}
                            >
                                Welcome To MapMe
                            </Heading>

                            <VStack spacing={4} width="100%" align="stretch">
                                <GlowingButton
                                    icon={<FcGoogle size={20} />}
                                    aria-label="Continue with Google"
                                    onClick={() => handleSignIn('google')}
                                >
                                    Continue with Google
                                </GlowingButton>

                                <GlowingButton
                                    icon={<Github size={20} color="white" />}
                                    aria-label="Continue with GitHub"
                                    onClick={() => handleSignIn('github')}
                                >
                                    Continue with GitHub
                                </GlowingButton>

                                <GlowingButton
                                    icon={<User size={20} />}
                                    aria-label="Continue as an HR"
                                >
                                    Continue as an HR
                                </GlowingButton>

                                <Text
                                    as={motion.p}
                                    color="white"
                                    mt={4}
                                    textAlign="center"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: '0.5s', duration: '0.5s' }}
                                    whileHover={{ color: 'cyan' }}
                                    cursor={'pointer'}
                                    fontSize={'lg'}
                                    fontWeight={'semibold'}
                                >
                                    Map yourself with MapMe
                                </Text>
                            </VStack>
                        </VStack>
                    </Flex>
                )}
            </AnimatePresence>
        </Box>
    )
}