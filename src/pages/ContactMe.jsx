import {
  Box,
  Image,
  Text,
  Flex,
  chakra,
  shouldForwardProp,
  Stack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useRef } from "react";
import {
  motion,
  useTransform,
  isValidMotionProp,
  useMotionValueEvent,
} from "framer-motion";
import { FiMail } from "react-icons/fi"; // For the email icon
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useInView } from "framer-motion";

const ChakraMotionBox = chakra(motion.div, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});
const ChakraMotionStack = chakra(motion.div, {
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

export default function ContactMe(props) {
  // For GitHub and LinkedIn icons
  const ref = useRef(null);
  const inView = useInView(ref, { once: false });

  const variants = {
    visible: { opacity: 1, transition: { duration: 2 } },
    hidden: { opacity: 0, transition: { duration: 2 } },
  };
  // const { scrollYProgress } = props.scrollY;
  // useMotionValueEvent(props.scrollY, "change", (latest) => {
  //   console.log("Scroll Y Progress in child changed to", latest);
  // });
  // These motion values will change as the page scrolls
  const scaleY = useTransform(props.scrollY, [0.6, 1], ["-200vh", "0vh"]);
  const iconSize = useBreakpointValue({
    base: "1.3em",
    md: "1.5em",
    lg: "2em",
    xl: "2.5em",
  });
  return (
    <ChakraMotionBox
      position="fixed"
      height="200vh"
      zIndex={5}
      style={{
        bottom: scaleY,
      }} // Apply the motion value
      w="100%"
    >
      <Flex
        position="absolute"
        bottom={0} // Anchor the image to the bottom of the motion box
        left={0}
        right={0}
        height="100%" // Fixed height for the image
        bgColor={"#111822"}
        alignContent={"center"}
        justifyContent={"center"}
      >
        <ChakraMotionStack
          mt="50vh"
          w={{ base: "20em", md: "25em", lg: "45em", xl: "50em" }}
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
        >
          <Image
            src="/images/contact-me.svg"
            width="100%"
            objectFit="contain"
            objectPosition="bottom" // Align the image to the top so the top half is visible
          />
          <Flex
            justifyContent="space-between" // Align text to the left
            alignItems="center" // Center text vertically
          >
            <Flex alignItems="center" marginTop={3}>
              <FiMail size={iconSize} color="#FEFEFA" />
              <Text
                fontFamily={`'Montserrat', sans-serif`}
                fontSize={{ base: "sm", md: "sm", xl: "xl", "2xl": "2xl" }}
                fontWeight="600"
                lineHeight="1.3em"
                color={"#FEFEFA"}
                marginLeft="2"
              >
                <a
                  href="mailto:your-email@example.com"
                  target="_blank"
                  style={{
                    textDecoration: "underline",
                  }}
                >
                  Email
                </a>
              </Text>
            </Flex>
            <Flex alignItems="center" marginTop={3}>
              <FaLinkedin size={iconSize} color="#FEFEFA" />
              <Text
                fontFamily={`'Montserrat', sans-serif`}
                marginLeft="2"
                fontSize={{ base: "sm", md: "sm", xl: "xl", "2xl": "2xl" }}
                fontWeight="600"
                lineHeight="1.3em"
                color={"#FEFEFA"}
              >
                <a
                  href="https://www.linkedin.com/in/farid-cenreng/"
                  target="_blank"
                  style={{
                    textDecoration: "underline",
                  }}
                >
                  LinkedIn
                </a>
              </Text>
            </Flex>
            <Flex alignItems="center" marginTop={3}>
              <FaGithub size={iconSize} color="#FEFEFA" />
              <Text
                fontFamily={`'Montserrat', sans-serif`}
                marginLeft="2"
                fontSize={{ base: "sm", md: "sm", xl: "xl", "2xl": "2xl" }}
                fontWeight="600"
                lineHeight="1.3em"
                color={"#FEFEFA"}
              >
                <a
                  href="https://github.com/flitzcore"
                  target="_blank"
                  style={{
                    textDecoration: "underline",
                  }}
                >
                  GitHub
                </a>
              </Text>
            </Flex>
          </Flex>
        </ChakraMotionStack>
      </Flex>
    </ChakraMotionBox>
  );
}
