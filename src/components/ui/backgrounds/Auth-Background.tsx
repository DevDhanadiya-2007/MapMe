import { Box } from "@chakra-ui/react"
import { keyframes } from "@emotion/react"

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

export default AnimatedBackground