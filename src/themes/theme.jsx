import { defineStyle, defineStyleConfig, extendTheme } from "@chakra-ui/react";

const blackTheme = defineStyle({
  // The styles all button have in common
  marginTop: { base: "1.5em", lg: "2em" },
  width: { base: "7.5em", lg: "8.5em" },
  background: "#292929",
  color: "white",
  fontFamily: `'Montserrat', sans-serif`,
  fontSize: { base: "sm", md: "sm", xl: "xl", "2xl": "2xl" },
  py: { base: "0.1em", lg: "0.5em", "2xl": "1em" },
  fontWeight: "500",
  borderRadius: { base: "lg", xl: "xl" },
});
const whiteTheme = defineStyle({
  // The styles all button have in common
  marginTop: { base: "1.5em", lg: "2em" },
  width: { base: "7.5em", lg: "8.5em" },
  background: "#FEFEFA",
  color: "#292929",
  fontFamily: `'Montserrat', sans-serif`,
  fontSize: { base: "sm", md: "sm", xl: "xl", "2xl": "2xl" },
  py: { base: "0.1em", lg: "0.5em", "2xl": "1em" },
  fontWeight: "500",
  borderRadius: { base: "lg", xl: "xl" },
});
const buttonTheme = defineStyleConfig({
  variants: { blackTheme, whiteTheme },
});
export const myTheme = extendTheme({
  components: { Button: buttonTheme },
});
