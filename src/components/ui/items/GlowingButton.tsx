import { useState } from "react";
import { Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Box, Flex, Text } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import { GlowingButtonProps } from "@/types";


const glowingBorder = keyframes`
  0% { border-image-source: linear-gradient(0deg, #00FFFF, #0000FF); }
  25% { border-image-source: linear-gradient(90deg, #00FFFF, #0000FF); }
  50% { border-image-source: linear-gradient(180deg, #00FFFF, #0000FF); }
  75% { border-image-source: linear-gradient(270deg, #00FFFF, #0000FF); }
  100% { border-image-source: linear-gradient(360deg, #00FFFF, #0000FF); }
`
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

export default GlowingButton