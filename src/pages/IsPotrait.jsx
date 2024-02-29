import {
  Text,
  Stack,
  Button,
  Flex,
  Image,
  chakra,
  shouldForwardProp,
} from "@chakra-ui/react";
import { MdScreenRotation } from "react-icons/md";

import "src/fonts/montserrat.css";
export default function IsPotrait(props) {
  return (
    <Flex
      height="100vh" // Full viewport height
      width="100vw" // Full viewport width
      align="center" // Vertically center the content
      justify="center" // Horizontally center the content
      direction="column" // Stack children vertically
    >
      <MdScreenRotation size="4em" /> {/* Adjust the size as needed */}
      <Text
        py={"1em"}
        mx={"1em"}
        fontFamily="'Montserrat', sans-serif"
        fontSize={{
          base: "xl",
        }}
        letterSpacing={-2}
        fontWeight="500"
        lineHeight={{ base: "1em", "2xl": "0.9em" }}
        textAlign="center" // Ensure text itself is centered if it wraps
      >
        For optimal viewing, please rotate to landscape mode
      </Text>
    </Flex>
  );
}
