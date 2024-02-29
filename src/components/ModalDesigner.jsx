import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
  Progress,
  Image,
  HStack,
} from "@chakra-ui/react";
import ProgressBarHorizontal from "./ProgressBarHorizontal";

export default function ModalDesigner(props) {
  const pages = [
    // B201
    {
      imageUrl: "/images/b201-ig.webp",
      text: () => (
        <>
          As the External Division for B201 Lab, I got to play around with our
          social media in cool ways. Think fun posts, cool projects, and lots of
          creative stuff to keep everyone interested. It's been a blast sharing
          what we do and connecting with people. Curious? Go check out our
          Instagram and see what we're all about at{" "}
          <a
            href="
            https://www.instagram.com/b201labs/"
            target="_blank"
            style={{
              color: "black",
              fontWeight: "bold",
              textDecoration: "underline",
            }}
          >
            @b201labs
          </a>
          .
        </>
      ),
    },
    // Poster
    {
      imageUrl: "/images/poster.webp",
      text: () => (
        <>
          During the prestigious PIMNAS 34 event, I had the opportunity to
          showcase my creativity and scientific insight by designing a poster
          that captured the essence of innovation and research. My dedication to
          blending artistic design with rigorous scientific data allowed me to
          stand out, ultimately earning a well-deserved bronze medal in this
          highly competitive arena.
        </>
      ),
    },

    // Personal
    {
      imageUrl: "/images/personal-ig.webp",
      text: () => (
        <>
          I have a personal hobby of crafting miniature statues from recycled
          materials. One of my creations, for example, is this miniature
          owl.Dealing with an abundance of paper waste from college work, I've
          found a creative outlet to repurpose these materials into papercraft.
          This initiative not only helps in managing the clutter of accumulated
          papers but also allows me to channel my artistic skills.
        </>
      ),
    },
  ];

  const [currentPage, setCurrentPage] = useState(0);

  // Function to go to the next page
  const nextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Function to go to the previous page
  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Calculate progress percentage
  const progressPercentage = ((currentPage + 1) / pages.length) * 100;

  return (
    <Modal
      size={{ base: "sm", md: "sm", lg: "md", xl: "lg", "2xl": "xl" }}
      isCentered
      isOpen={props.isOpen}
      onClose={props.onClose}
      scrollBehavior="inside"
    >
      <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px) " />
      <ModalContent>
        <ModalHeader>I am a creative person &#127912;</ModalHeader>
        <ModalCloseButton />
        <ModalBody
          mx={"1em"}
          maxHeight={{ base: "90vh", md: "70vh", lg: "60vh", xl: "55vh" }}
        >
          <Image
            src={pages[currentPage].imageUrl}
            alt="Page Image"
            mb={4}
            width={"100%"}
            height={{ base: "8em", md: "10em", lg: "13em", xl: "18em" }}
            objectFit={"cover"}
          />
          <Text textAlign={"justify"}>{pages[currentPage].text()}</Text>
        </ModalBody>
        <ModalFooter flexDirection="column" alignItems="center">
          <HStack width={"100%"}>
            <Button mx={3} onClick={prevPage} isDisabled={currentPage === 0}>
              Prev
            </Button>
            <ProgressBarHorizontal
              value={progressPercentage + "%"}
              width="100%"
            />

            <Button
              mx={3}
              onClick={nextPage}
              isDisabled={currentPage === pages.length - 1}
            >
              Next
            </Button>
          </HStack>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
