import { Text, Flex, Image, chakra, shouldForwardProp } from "@chakra-ui/react";

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

export default function ComputerEngineer(props) {
  // const { scrollYProgress } = props.scrollY;
  // useMotionValueEvent(props.scrollY, "change", (latest) => {
  //   console.log("Scroll Y Progress in child changed to", latest);
  // });
  // These motion values will change as the page scrolls
  // const scaleHeight = useTransform(props.scrollY, props.range, [
  //   "0vh",
  //   "100vh",
  // ]);
  return (
    <ChakraMotionBox
      position="fixed"
      bottom={0}
      zIndex={props.page - 1}
      style={{
        height: "100vh",
      }} // Apply the motion value
      w="100%"
      overflow="hidden" // Ensure that only the part of the image within the Box is visible
    >
      <>
        {/* Text Container */}
        <Flex
          position="fixed" // Use absolute to position the text over the image
          left="0" // Align to the left side of the viewport
          top="0" // Start from the top
          h="100%" // Take full height to allow vertical centering
          w="100%" // Take full width to cover the image
          justifyContent="flex-start" // Align text to the left
          alignItems="center" // Center text vertically
          paddingLeft="4" // Add some padding on the left
        >
          <Text fontSize="xl" color="red">
            Your Text Here
          </Text>
        </Flex>

        {/* Image */}
        <Image
          src="/images/code.webp"
          width="100vw"
          height="100vh" // Keep the image height to cover the full viewport height
          objectFit="cover"
          objectPosition="bottom" // Align the image to the top so the top half is visible
        />
      </>
    </ChakraMotionBox>
  );
}
