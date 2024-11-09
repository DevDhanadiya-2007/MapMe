'use client'

import { useState, useEffect } from 'react'
import { Box, Button, ChakraProvider, Flex, Heading, Text, VStack, Skeleton } from "@chakra-ui/react"
import { keyframes } from "@emotion/react"
import { motion, AnimatePresence } from "framer-motion"
import { User, Github } from 'lucide-react'
import { FcGoogle } from "react-icons/fc"
import theme from '@/styles/theme'

const glowingBorder = keyframes`
  0% { border-image-source: linear-gradient(0deg, #00FFFF, #0000FF); }
  25% { border-image-source: linear-gradient(90deg, #00FFFF, #0000FF); }
  50% { border-image-source: linear-gradient(180deg, #00FFFF, #0000FF); }
  75% { border-image-source: linear-gradient(270deg, #00FFFF, #0000FF); }
  100% { border-image-source: linear-gradient(360deg, #00FFFF, #0000FF); }
`

const gridAnimation = keyframes`
  0% { background-position: 0 0, 0 0, 50px 50px, 50px 50px; }
  100% { background-position: 0 0, 0 0, 0 0, 0 0; }
`

const horizontalLine = keyframes`
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
`

const verticalLine = keyframes`
  0% { transform: translateY(-100%); }
  100% { transform: translateY(100%); }
`

interface GlowingButtonProps {
    children: React.ReactNode;
    icon: React.ReactElement;
    'aria-label': string;
}

const GlowingButton = ({ children, icon, ...props }: GlowingButtonProps) => {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <Button
            as={motion.button}
            width="100%"
            bg="black"
            color="white"
            height="12"
            transition="all 0.3s ease-in-out"
            _hover={{
                bg: 'rgba(0, 0, 0, 0.8)',
            }}
            _active={{
                bg: 'rgba(0, 0, 0, 0.9)',
            }}
            position="relative"
            borderRadius="full"
            overflow="hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            whileTap={{ scale: 0.95 }}
            sx={{
                border: '2px solid transparent',
                borderRadius: 'full',
                background: 'black',
                borderImage: 'linear-gradient(0deg, #00FFFF, #0000FF) 1',
                animation: `${glowingBorder} 4s infinite linear`,
            }}
            {...props}
        >
            <Flex
                as={motion.div}
                alignItems="center"
                justifyContent="center"
                width="100%"
                height="100%"
                bg="black"
                borderRadius="full"
                position="relative"
                zIndex="1"
                initial={{ x: 0 }}
                animate={{ x: isHovered ? 5 : 0 }}
                transition={{ duration: '0.3s' }}
            >
                <Box
                    as={motion.div}
                    initial={{ scale: 1 }}
                    animate={{ scale: isHovered ? 1.1 : 1 }}
                    transition={{ duration: '0.3s' }}
                >
                    {icon}
                </Box>
                <Text ml={2}>{children}</Text>
            </Flex>
        </Button>
    )
}

const AnimatedBackground = () => (
    <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        zIndex="0"
        sx={{
            background: `
        linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
        linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
      `,
            backgroundSize: '50px 50px, 50px 50px, 10px 10px, 10px 10px',
            animation: `${gridAnimation} 20s linear infinite`,
        }}
    >
        {[...Array(20)].map((_, i) => (
            <Box
                key={`h-${i}`}
                position="absolute"
                top={`${i * 5}%`}
                left="0"
                right="0"
                height="1px"
                bg="cyan.400"
                sx={{
                    boxShadow: '0 0 5px #00FFFF, 0 0 10px #00FFFF',
                    animation: `${horizontalLine} ${10 + i * 0.5}s linear infinite`,
                    opacity: 0.5,
                }}
            />
        ))}
        {[...Array(20)].map((_, i) => (
            <Box
                key={`v-${i}`}
                position="absolute"
                left={`${i * 5}%`}
                top="0"
                bottom="0"
                width="1px"
                bg="cyan.400"
                sx={{
                    boxShadow: '0 0 5px #00FFFF, 0 0 10px #00FFFF',
                    animation: `${verticalLine} ${10 + i * 0.5}s linear infinite`,
                    opacity: 0.5,
                }}
            />
        ))}
    </Box>
)

const SkeletonItem = ({ height, width }: { height: string; width: string }) => (
    <Skeleton
        height={height}
        width={width}
        startColor="gray.800"
        endColor="gray.600"
        borderRadius="full"
        sx={{
            '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent)',
                transform: 'translateX(-100%)',
                animation: `${horizontalLine} 1.5s ease-in-out infinite`,
            },
        }}
    />
)

export default function AuthPage() {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 1500)
        return () => clearTimeout(timer)
    }, [])

    return (
        <ChakraProvider theme={theme}>
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
                                    >
                                        Continue with Google
                                    </GlowingButton>

                                    <GlowingButton
                                        icon={<Github size={20} color="white" />}
                                        aria-label="Continue with GitHub"
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
        </ChakraProvider>
    )
}