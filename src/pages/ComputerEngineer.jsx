import {
  Text,
  Stack,
  Button,
  Flex,
  Image,
  chakra,
  shouldForwardProp,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import {
  motion,
  useTransform,
  isValidMotionProp,
  useMotionValueEvent,
} from "framer-motion";

import "src/fonts/montserrat.css";
import ModalComputerEngineer from "../components/ModalComputerEngineer";

const ChakraMotionBox = chakra(motion.div, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

export default function ComputerEngineer(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
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
          paddingX={{ base: "3em", md: "3.5em", lg: "5em", "2xl": "6.5em" }}
          position="fixed" // Use absolute to position the text over the image
          left="0" // Align to the left side of the viewport
          top="0" // Start from the top
          h="100%" // Take full height to allow vertical centering
          w="100%" // Take full width to cover the image
          justifyContent="space-between" // Align text to the left
          alignItems="center" // Center text vertically
        >
          <Stack
            width={{
              base: "12em",
              md: "13em",
              lg: "15em",
              xl: "22em",
              "2xl": "26.3em",
            }}
            spacing={0}
          >
            <Text
              fontFamily={`'Montserrat', sans-serif`}
              fontSize={{
                base: "2xl",
                sm: "3xl",
                md: "4xl",
                lg: "5xl",
                xl: "7xl",
                "2xl": "8xl",
              }}
              letterSpacing={-2}
              fontWeight="700"
              lineHeight={{ base: "1em", "2xl": "0.9em" }}
            >
              Hello,
              <br />
              I'm Farid
            </Text>
            <Text
              fontFamily={`'Montserrat', sans-serif`}
              marginTop={3}
              fontSize={{ base: "sm", md: "sm", xl: "xl", "2xl": "2xl" }}
              fontWeight="600"
              lineHeight="1.3em"
            >
              I’m a Computer Engineer
            </Text>
            <Text
              fontFamily={`'Montserrat', sans-serif`}
              fontSize={{ base: "sm", md: "sm", xl: "xl", "2xl": "2xl" }}
              fontWeight="400"
              lineHeight="1.3em"
            >
              That mean I work with IoT, Robotics, Website and Applications
            </Text>

            <Button onClick={onOpen} variant="blackTheme">
              Learn more
            </Button>
            <ModalComputerEngineer isOpen={isOpen} onClose={onClose} />
          </Stack>
          <Stack
            width={{
              base: "7.6em",
              lg: "14em",
              xl: "16em",
              "2xl": "18em",
            }}
            spacing={0}
          >
            <Text
              fontFamily={`'Montserrat', sans-serif`}
              marginTop={3}
              fontSize={{ base: "sm", md: "sm", xl: "xl", "2xl": "2xl" }}
              fontWeight="600"
              lineHeight="1.3em"
            >
              Interested in
              <br />
              Collaborating?
            </Text>
            <Text
              fontFamily={`'Montserrat', sans-serif`}
              fontSize={{ base: "sm", md: "sm", xl: "xl", "2xl": "2xl" }}
              fontWeight="400"
              lineHeight="1.3em"
            >
              Inquiries are always welcome
            </Text>
            <Button variant="blackTheme">Contact me</Button>
          </Stack>
        </Flex>

        {/* Image */}
        <Image
          src="/images/code.png"
          width="100vw"
          height="100vh" // Keep the image height to cover the full viewport height
          objectFit="cover"
          objectPosition="bottom" // Align the image to the top so the top half is visible
        />
      </>
    </ChakraMotionBox>
  );
}
