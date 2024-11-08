import { ChakraProvider } from "@chakra-ui/react";
import { FC, ReactNode } from "react";

interface ChakraProviderWrapperProps {
    children: ReactNode
}



const ChakraProviderWrapper: FC<ChakraProviderWrapperProps> = ({ children }) => {
    return (
        <ChakraProvider >
            {children}
        </ChakraProvider>
    )
}

export default ChakraProviderWrapper