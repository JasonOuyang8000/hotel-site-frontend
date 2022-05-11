import React from "react";
import { createRoot } from "react-dom/client";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { extendTheme, ChakraProvider } from "@chakra-ui/react";
import { colors } from "./themes/themes";
import { fonts } from "./themes/themeFonts";
import "@fontsource/roboto/400.css";

const theme = extendTheme({ colors, fonts });

const container = document.getElementById("app");
const root = createRoot(container); // createRoot(container!)

root.render(
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ChakraProvider>
);
