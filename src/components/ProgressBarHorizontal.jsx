import { Box } from "@chakra-ui/react";

export default function ProgressBarHorizontal(props) {
  // These motion values will change as the page scrolls
  const scaleWidth = props.value;

  return (
    <Box
      // position="fixed"
      top="50%" // Center vertically
      transform="translateY(-50%)" // Adjust for exact vertical centering
      zIndex={100}
      width={"100%"}
      // width={{
      //   base: "13em",
      //   md: "15em",
      //   lg: "16.5em",
      //   xl: "20em",
      //   "2xl": "30em",
      // }}
      height={{ base: "6px", md: "8px", lg: "9px", xl: "12px" }}
      backgroundColor="#C7C4C4"
      borderRadius="full" // Adjust this value as needed to create a more circular appearance
    >
      <Box
        backgroundColor="#3F3E3E"
        borderRadius="full" // Apply full circular ends to the inner box
        height="100%" // Ensure the inner box fills the width of the outer box
        // position="absolute"
        bottom="0" // Start from the bottom
        style={{
          width: scaleWidth,
        }}
      />
    </Box>
  );
}
