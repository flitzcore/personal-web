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

export default function Programmer(props) {
  // const { scrollYProgress } = props.scrollY;
  // useMotionValueEvent(props.scrollY, "change", (latest) => {
  //   console.log("Scroll Y Progress in child changed to", latest);
  // });
  // These motion values will change as the page scrolls
  const scaleHeight = useTransform(props.scrollY, props.range, [
    "0vh",
    "100vh",
  ]);
  return (
    <ChakraMotionBox
      position="fixed"
      bottom={0}
      zIndex={props.page - 1}
      style={{
        height: scaleHeight,
      }} // Apply the motion value
      w="100%"
      overflow="hidden" // Ensure that only the part of the image within the Box is visible
    >
      <Box
        position="absolute"
        bottom={0} // Anchor the image to the bottom of the motion box
        left={0}
        right={0}
        height="100vh" // Fixed height for the image
        overflow="hidden" // Ensure the image is clipped to the changing height of its parent
      >
        <Image
          src="/images/cool.webp"
          height="100%" // Make the image fill the container
          width="auto" // Auto width to maintain aspect ratio
          objectFit="cover"
          objectPosition="bottom" // Ensure the bottom part of the image is visible and aligned
        />
      </Box>
    </ChakraMotionBox>
  );
}
