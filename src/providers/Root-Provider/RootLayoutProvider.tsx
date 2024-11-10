import { ChildrenWrapperProps } from '@/types';
import RecoilRootProvider from '../Wrappers/RecoilRootProvider';
import ChakraUiProvider from '../Wrappers/ChakraUiProvider';
import NextAuthSessionProvider from '../Wrappers/NextAuthSessionProvider';
import AuthProvider from '../Wrappers/AuthProvider';


export default function RootLayoutProvider({ children }: ChildrenWrapperProps) {
    return (
        <RecoilRootProvider>
            <ChakraUiProvider>
                <NextAuthSessionProvider>
                    <AuthProvider>
                        {children}
                    </AuthProvider>
                </NextAuthSessionProvider>
            </ChakraUiProvider>
        </RecoilRootProvider>
    )
}
