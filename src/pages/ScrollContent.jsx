import { Image, VStack } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";

export default function ScrollContent() {
  return (
    <VStack position={"static"} zIndex={-5}>
      <Box w="100%" h="100vh" />
      <Box w="100%" h="100vh" />
      <Box w="100%" h="100vh" />
      <Box w="100%" h="100vh" />
      <Box w="100%" h="100vh" />
      <Box w="100%" h="200vh" />
    </VStack>
  );
}
