import { extendTheme } from "@chakra-ui/react";

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  light: {
    900: "#fff",
    800: "#fcfcfc",
    700: "#F9F3F3",
    600: "#F9F5F6",
  },
  dark: {
    900: "#211e34",
    800: "#29263c",
    700: "#a7a7a7a7",
  },
  main: {
    900: "#19b770",
  },
  primary: {
    900: "#2d99d7",
    800: "#8653a1",
    700: "#d78a48",
  },
};

const semanticTokens = {
  colors: {
    abdo: {
      default: "#fff",
      _dark: "#211e34",
    },
  },
};

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

export const theme = extendTheme({ config, colors, semanticTokens });
