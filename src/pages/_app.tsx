import type { AppProps } from "next/app";
import { SidebarDrawerProvider } from "@/contexts/SidebarDrawerContext";

import { theme } from "@/styles/theme";
import { ChakraProvider } from "@chakra-ui/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <SidebarDrawerProvider>
        <Component {...pageProps} />
      </SidebarDrawerProvider>
    </ChakraProvider>
  );
}
