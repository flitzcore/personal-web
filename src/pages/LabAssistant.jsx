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
import { useDisclosure } from "@chakra-ui/react";
import {
  motion,
  useTransform,
  isValidMotionProp,
  useMotionValueEvent,
} from "framer-motion";
import ModalLabAssistant from "../components/ModalLabAssistant";

const ChakraMotionBox = chakra(motion.div, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

export default function LabAssistant(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
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
          paddingX={{ base: "3em", md: "3.5em", lg: "5em", "2xl": "6.5em" }}
          position="absolute" // Use absolute to position the text over the image
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
              color={"#FEFEFA"}
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
              color={"#FEFEFA"}
            >
              I’m a Collaborator
            </Text>
            <Text
              fontFamily={`'Montserrat', sans-serif`}
              fontSize={{ base: "sm", md: "sm", xl: "xl", "2xl": "2xl" }}
              fontWeight="400"
              lineHeight="1.3em"
              color={"#FEFEFA"}
            >
              I'm active as a lab assistant and committee member for campus
              events
            </Text>
            <Button onClick={onOpen} variant="whiteTheme">
              Learn more
            </Button>
            <ModalLabAssistant isOpen={isOpen} onClose={onClose} />
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
              color={"#FEFEFA"}
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
              color={"#FEFEFA"}
            >
              Inquiries are always welcome
            </Text>
            <Button variant="whiteTheme">Contact me</Button>
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
