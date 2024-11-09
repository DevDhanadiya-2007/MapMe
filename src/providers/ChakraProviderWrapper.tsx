"use client"

import { ChakraProvider } from "@chakra-ui/react";
import { FC } from "react";
import { ChildrenWrapperProps } from "@/types";
import theme from "@/styles/theme";

const ChakraProviderWrapper: FC<ChildrenWrapperProps> = ({ children }) => {
    return (
        <ChakraProvider theme={theme}>
            {children}
        </ChakraProvider>
    )
}

export default ChakraProviderWrapper