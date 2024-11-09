import { Skeleton } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";

const horizontalLine = keyframes`
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
`
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

export default SkeletonItem