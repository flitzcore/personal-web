import {
  Box,
  Text,
  Stack,
  Button,
  Flex,
  Image,
  chakra,
  shouldForwardProp,
} from "@chakra-ui/react";

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

export default function LabAssistant(props) {
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
      objectFit={"cover"}
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
        {/* Text Container */}
        <Flex
          paddingX={"4.7rem"}
          position="absolute" // Use absolute to position the text over the image
          left="0" // Align to the left side of the viewport
          top="0" // Start from the top
          h="100%" // Take full height to allow vertical centering
          w="100%" // Take full width to cover the image
          justifyContent="space-between" // Align text to the left
          alignItems="center" // Center text vertically
        >
          <Stack width={300} spacing={0}>
            <Text
              fontFamily={`'Montserrat', sans-serif`}
              fontSize={"6xl"}
              letterSpacing={-2}
              fontWeight="700"
              lineHeight="3.3rem"
              color={"#FEFEFA"}
            >
              Hello,
              <br />
              I'm Farid
            </Text>
            <Text
              fontFamily={`'Montserrat', sans-serif`}
              marginTop={3}
              fontSize={"lg"}
              fontWeight="600"
              lineHeight="1.3rem"
              color={"#FEFEFA"}
            >
              I’m a Computer Engineer
            </Text>
            <Text
              fontFamily={`'Montserrat', sans-serif`}
              fontSize={"lg"}
              fontWeight="400"
              lineHeight="1.3rem"
              color={"#FEFEFA"}
            >
              That mean I works with IoT, Robotics, Website and Applications
            </Text>
            <Button
              marginTop={"2rem"}
              width={"8.5rem"}
              px={4}
              variant="blackTheme"
              borderRadius={"lg"}
            >
              Learn more
            </Button>
          </Stack>
          <Stack width={150} spacing={0}>
            <Text
              fontFamily={`'Montserrat', sans-serif`}
              marginTop={3}
              fontSize={"lg"}
              fontWeight="600"
              lineHeight="1.3rem"
              color={"#FEFEFA"}
            >
              Interested in
              <br />
              Collaborating?
            </Text>
            <Text
              fontFamily={`'Montserrat', sans-serif`}
              fontSize={"lg"}
              fontWeight="400"
              lineHeight="1.3rem"
              color={"#FEFEFA"}
            >
              Your ideas and inquiries are always welcome
            </Text>
            <Button
              marginTop={"0.8rem"}
              width={"8.5rem"}
              px={4}
              variant="blackTheme"
              borderRadius={"lg"}
            >
              Contact me
            </Button>
          </Stack>
        </Flex>
        <Image
          src="/images/lab.png"
          height="100%" // Make the image fill the container
          width="100vw" // Auto width to maintain aspect ratio
          objectFit="cover"
          objectPosition="bottom" // Ensure the bottom part of the image is visible and aligned
        />
      </Box>
    </ChakraMotionBox>
  );
}
