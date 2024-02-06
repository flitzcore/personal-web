import { defineStyle, defineStyleConfig, extendTheme } from "@chakra-ui/react";

const blackTheme = defineStyle({
  // The styles all button have in common

  background: "#292929",
  color: "white",
  fontFamily: `'Montserrat', sans-serif`,
  fontSize: "lg",
  fontWeight: "500",
});

const buttonTheme = defineStyleConfig({
  variants: { blackTheme },
});
export const myTheme = extendTheme({
  components: { Button: buttonTheme },
});
