import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// 1. import `ChakraProvider` component
import { ChakraProvider } from "@chakra-ui/react";
import { myTheme } from "./themes/theme.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider resetCSS theme={myTheme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
