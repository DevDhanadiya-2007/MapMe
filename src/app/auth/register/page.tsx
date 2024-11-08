'use client'

import { useState } from 'react'
import { Box, Button, ChakraProvider, Flex, Heading, Input, InputGroup, InputLeftElement, InputRightElement, Link, Text, VStack } from "@chakra-ui/react"
import { keyframes } from "@emotion/react"
import { Eye, EyeOff, User, Lock } from 'lucide-react'
import theme from '@/styles/theme'

const waveAnimation = keyframes`
  0% {
    transform: translateX(-50%) translateY(10%) rotate(0deg);
  }
  50% {
    transform: translateX(-50%) translateY(-10%) rotate(180deg);
  }
  100% {
    transform: translateX(-50%) translateY(10%) rotate(360deg);
  }
`

export default function Component() {
    const [showPassword, setShowPassword] = useState(false)

    return (
        <ChakraProvider theme={theme}>
            <Box
                minH="100vh"
                bg="black"
                position="relative"
                overflow="hidden"
                display="flex"
                alignItems="center"
                justifyContent="center"
            >
                {/* Animated Background Waves */}
                <Box
                    position="absolute"
                    top="0"
                    left="50%"
                    width="200%"
                    height="200%"
                    sx={{
                        '&::before, &::after': {
                            content: '""',
                            position: 'absolute',
                            width: '200%',
                            height: '200%',
                            borderRadius: '45%',
                            background: 'linear-gradient(90deg, rgba(20, 20, 20, 0.2), rgba(40, 40, 40, 0.2))',
                            animation: `${waveAnimation} 15s infinite linear`,
                        },
                        '&::after': {
                            opacity: '0.5',
                            animationDelay: '-7s',
                        }
                    }}
                />

                <Flex
                    direction="column"
                    align="center"
                    justify="center"
                    zIndex={1}
                    width="100%"
                    maxW="400px"
                    p={4}
                >
                    <VStack spacing={8} width="100%">
                        <Heading
                            color="white"
                            fontSize="3xl"
                            fontWeight="bold"
                            letterSpacing="wide"
                        >
                            Welcome to MapMe
                        </Heading>

                        <VStack spacing={4} width="100%">
                            <Box width="100%" position="relative">
                                <InputGroup>
                                    <InputLeftElement pointerEvents="none" height="12">
                                        <User color="rgba(255, 255, 255, 0.6)" size={20} />
                                    </InputLeftElement>
                                    <Input
                                        id="username"
                                        placeholder="Username"
                                        bg="rgba(17, 25, 40, 0.6)"
                                        border="1px solid rgba(255, 255, 255, 0.1)"
                                        borderRadius="md"
                                        color="white"
                                        height="12"
                                        pl="40px"
                                        transition="all 0.3s ease-in-out"
                                        _hover={{ borderColor: 'rgba(255, 255, 255, 0.3)' }}
                                        _focus={{
                                            borderColor: 'rgba(255, 255, 255, 0.5)',
                                            boxShadow: 'none',
                                        }}
                                        sx={{
                                            '&::placeholder': {
                                                color: 'rgba(255, 255, 255, 0.4)'
                                            }
                                        }}
                                    />
                                </InputGroup>
                            </Box>

                            <Box width="100%" position="relative">
                                <InputGroup>
                                    <InputLeftElement pointerEvents="none" height="12">
                                        <Lock color="rgba(255, 255, 255, 0.6)" size={20} />
                                    </InputLeftElement>
                                    <Input
                                        id="password"
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Password"
                                        bg="rgba(17, 25, 40, 0.6)"
                                        border="1px solid rgba(255, 255, 255, 0.1)"
                                        borderRadius="md"
                                        color="white"
                                        height="12"
                                        pl="40px"
                                        transition="all 0.3s ease-in-out"
                                        _hover={{ borderColor: 'rgba(255, 255, 255, 0.3)' }}
                                        _focus={{
                                            borderColor: 'rgba(255, 255, 255, 0.5)',
                                            boxShadow: 'none',
                                        }}
                                        sx={{
                                            '&::placeholder': {
                                                color: 'rgba(255, 255, 255, 0.4)'
                                            }
                                        }}
                                    />
                                    <InputRightElement height="12">
                                        <Box
                                            as="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            color="rgba(255, 255, 255, 0.6)"
                                            transition="all 0.3s ease-in-out"
                                            _hover={{ color: 'white' }}
                                        >
                                            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                        </Box>
                                    </InputRightElement>
                                </InputGroup>
                            </Box>

                            <Flex width="100%" justify="flex-end">
                                <Link
                                    color="rgba(255, 255, 255, 0.6)"
                                    fontSize="sm"
                                    transition="all 0.3s ease-in-out"
                                    _hover={{ color: 'white', textDecoration: 'none' }}
                                >
                                    Forgot Password?
                                </Link>
                            </Flex>

                            <Button
                                width="100%"
                                bg="rgba(45, 55, 72, 0.8)"
                                color="white"
                                height="12"
                                transition="all 0.3s ease-in-out"
                                _hover={{
                                    bg: 'rgba(45, 55, 72, 1)',
                                }}
                                _active={{
                                    bg: 'rgba(45, 55, 72, 0.9)',
                                }}
                            >
                                Register
                            </Button>

                            <Text color="rgba(0, 255, 255)" fontSize="sm">
                                Already have an account?
                            </Text>

                            <Button
                                width="100%"
                                variant="outline"
                                borderColor="rgba(255, 255, 255, 0.1)"
                                color="white"
                                height="12"
                                transition="all 0.3s ease-in-out"
                                _hover={{
                                    bg: 'rgba(255, 255, 255, 0.05)',
                                    borderColor: 'rgba(255, 255, 255, 0.3)',
                                }}
                                leftIcon={<User size={20} />}
                            >
                                Continue as an HR
                            </Button>
                        </VStack>
                    </VStack>
                </Flex>
            </Box>
        </ChakraProvider>
    )
}