import { Image, Box, chakra, shouldForwardProp } from "@chakra-ui/react";

import {
  motion,
  useTransform,
  isValidMotionProp,
  useMotionValueEvent,
} from "framer-motion";

const ChakraMotionBox = chakra(motion.div, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

export default function ProgressBar(props) {
  // These motion values will change as the page scrolls
  const scaleHeight = useTransform(props.scrollY, props.range, ["100%", "0%"]);

  return (
    <Box
      marginLeft={{ base: "1rem", md: "1.5em", lg: "3.5em", "2xl": "4em" }}
      position="fixed"
      top="50%" // Center vertically
      transform="translateY(-50%)" // Adjust for exact vertical centering
      zIndex={100}
      height={{
        base: "13em",
        md: "15em",
        lg: "16.5em",
        xl: "20em",
        "2xl": "30em",
      }}
      width={{ base: "6px", md: "8px", lg: "9px", xl: "12px" }}
      backgroundColor="#C7C4C4"
      borderRadius="full" // Adjust this value as needed to create a more circular appearance
    >
      <ChakraMotionBox
        backgroundColor="#3F3E3E"
        borderRadius="full" // Apply full circular ends to the inner box
        width="100%" // Ensure the inner box fills the width of the outer box
        position="absolute"
        bottom="0" // Start from the bottom
        style={{
          height: scaleHeight,
        }}
      />
    </Box>
  );
}
