import {
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

import "src/fonts/montserrat.css";

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
          paddingX={"4.7rem"}
          position="fixed" // Use absolute to position the text over the image
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
            >
              I’m a Computer Engineer
            </Text>
            <Text
              fontFamily={`'Montserrat', sans-serif`}
              fontSize={"lg"}
              fontWeight="400"
              lineHeight="1.3rem"
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
