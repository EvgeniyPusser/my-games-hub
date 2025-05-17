"use client";

import React, { ReactNode } from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

interface ProviderProps {
  children: ReactNode;
}

// Optional: Customize your Chakra UI theme here
const theme = extendTheme({
  config: {
    initialColorMode: "light", // or "dark"
    useSystemColorMode: false,
  },
});

export function Provider({ children }: ProviderProps) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}

