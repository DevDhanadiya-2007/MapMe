'use client'

import { useState, useEffect } from 'react'
import { Box, Button, Container, Flex, Heading, Text, VStack, useColorModeValue } from '@chakra-ui/react'
import { keyframes } from "@emotion/react"
import { motion, useAnimation } from 'framer-motion'
import { CheckCircle, MapPin, List, Plus, Trash2 } from 'lucide-react'
import Link from 'next/link'

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
`

const MotionBox = motion.create(Box as any)

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0)
  const controls = useAnimation()
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    controls.start({ opacity: 1, y: 0, transition: { duration: 0.5 } })
  }, [controls])

  const bgColor = useColorModeValue('gray.900', 'gray.900')
  const textColor = useColorModeValue('gray.100', 'gray.100')

  return (
    <Box bg={bgColor} color={textColor} minHeight="100vh" overflowX="hidden">
      <Container maxW="container.xl" pt={20}>
        <VStack spacing={20} align="stretch">
          {/* Hero Section */}
          <Flex direction={{ base: 'column', md: 'row' }} align="center" justify="space-between">
            <MotionBox
              initial={{ opacity: 0, y: 50 }}
              animate={controls}
              flex={1}
              pr={{ base: 0, md: 8 }}
            >
              <Heading
                as="h1"
                size="4xl"
                mb={6}
                bgGradient="linear(to-r, cyan.400, purple.500, pink.500)"
                bgClip="text"
                animation={`${fadeIn} 2s ease-in-out`}
              >
                MapMe
              </Heading>
              <Text fontSize="xl" mb={8} opacity={0.8}>
                Organize your tasks, map your success. Create, update, and conquer your todos with style.
              </Text>
              <Button
                as={Link}
                href="/auth/register"
                size="lg"
                colorScheme="purple"
                rightIcon={<MapPin />}
                _hover={{ transform: 'translateY(-5px)' }}
                transition="all 0.3s"
              >
                Get Started
              </Button>
            </MotionBox>
            <MotionBox
              flex={1}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <Box
                w="full"
                h="400px"
                bg="gray.800"
                borderRadius="2xl"
                overflow="hidden"
                position="relative"
                boxShadow="0 0 20px rgba(0,0,0,0.3)"
              >
                <Box
                  position="absolute"
                  top="50%"
                  left="50%"
                  transform="translate(-50%, -50%)"
                  textAlign="center"
                >
                  <List size={80} color="purple.400" style={{ marginBottom: '20px' }} />
                  <Text fontSize="2xl" fontWeight="bold">
                    Your Tasks, Visualized
                  </Text>
                </Box>
                {/* Render floating elements only after client-side check */}
                {isClient && [...Array(20)].map((_, i) => (
                  <Box
                    key={i}
                    position="absolute"
                    top={`${Math.random() * 100}%`}
                    left={`${Math.random() * 100}%`}
                    width="2px"
                    height="2px"
                    borderRadius="full"
                    bg="purple.400"
                    opacity={0.6}
                    animation={`${float} ${3 + Math.random() * 4}s infinite`}
                  />
                ))}
              </Box>
            </MotionBox>
          </Flex>

          {/* Features Section */}
          <VStack spacing={16}>
            <Heading as="h2" size="2xl" textAlign="center" mb={8}>
              Features that Empower You
            </Heading>
            <Flex direction={{ base: 'column', md: 'row' }} justify="space-between" align="center" wrap="wrap">
              {[
                { icon: Plus, title: 'Create', description: 'Easily add new tasks to your list' },
                { icon: CheckCircle, title: 'Update', description: 'Mark tasks as complete or edit details' },
                { icon: Trash2, title: 'Delete', description: 'Remove tasks you no longer need' },
              ].map((feature, index) => (
                <MotionBox
                  key={index}
                  flex={{ base: '1 0 100%', md: '1 0 30%' }}
                  mb={{ base: 8, md: 0 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <VStack
                    spacing={4}
                    p={8}
                    bg="gray.800"
                    borderRadius="xl"
                    boxShadow="xl"
                    transition="all 0.3s"
                    _hover={{ boxShadow: '0 0 20px rgba(124, 58, 237, 0.5)' }}
                  >
                    <Box
                      as={feature.icon}
                      size={50}
                      color="purple.400"
                      animation={`${float} 3s infinite`}
                    />
                    <Heading as="h3" size="lg">
                      {feature.title}
                    </Heading>
                    <Text textAlign="center" opacity={0.8}>
                      {feature.description}
                    </Text>
                  </VStack>
                </MotionBox>
              ))}
            </Flex>
          </VStack>

          {/* Call to Action */}
          <Flex
            direction="column"
            align="center"
            justify="center"
            py={20}
            bgGradient="linear(to-b, gray.900, purple.900)"
            borderRadius="3xl"
            boxShadow="inset 0 0 20px rgba(124, 58, 237, 0.5)"
          >
            <Heading as="h2" size="3xl" mb={6} textAlign="center">
              Ready to Map Your Success?
            </Heading>
            <Text fontSize="xl" mb={8} textAlign="center" maxW="2xl">
              Join thousands of users who have transformed their productivity with MapMe. Start organizing your tasks and achieving your goals today.
            </Text>
            <Button
              as={Link}
              href="/auth/register"
              size="lg"
              colorScheme="purple"
              rightIcon={<MapPin />}
              _hover={{ transform: 'translateY(-5px)' }}
              transition="all 0.3s"
            >
              Get Started Now
            </Button>
          </Flex>
        </VStack>
      </Container>

      {/* Animated Background */}
      <Box
        position="fixed"
        top={0}
        left={0}
        right={0}
        bottom={0}
        zIndex={-1}
        pointerEvents="none"
      >
        {isClient && [...Array(50)].map((_, i) => (
          <Box
            key={i}
            position="absolute"
            top={`${Math.random() * 100}%`}
            left={`${Math.random() * 100}%`}
            width="2px"
            height="2px"
            borderRadius="full"
            bg="purple.400"
            opacity={0.3}
            animation={`${float} ${5 + Math.random() * 10}s infinite`}
            style={{
              transform: `scale(${1 + scrollY * 0.001})`,
              transition: 'transform 0.2s',
            }}
          />
        ))}
      </Box>
    </Box>
  )
}
