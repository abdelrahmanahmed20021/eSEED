import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import View from "./components/View";
import Context from "./utils/Context";
import { theme } from "./utils/them";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Context>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <View />
      </Context>
    </ChakraProvider>
  </React.StrictMode>
);
