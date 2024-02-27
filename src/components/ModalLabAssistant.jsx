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

export default function ModalLabAssistant(props) {
  const pages = [
    // B201
    {
      imageUrl: "/images/b201.webp",
      text: () => (
        <>
          I actively serve as an assistant in the{" "}
          <strong>B201 Telematics and Intelligent Multimedia Laboratory</strong>{" "}
          , holding the position of <strong>vice-leader</strong>. In this lab,
          my research primarily focuses on Android application development.
          Additionally, I assist with both basic and advanced programming
          practicum sessions, teaching students coding skills. Before becoming
          vice-leader, I held the role of <strong>External Coordinator</strong>,
          responsible for organizing training events and managing the lab's
          social media presence, enhancing its community engagement and
          outreach. For more details about the lab's activities and research
          focus, visit{" "}
          <a
            href="
            https://www.its.ac.id/komputer/facilities/laboratories/telematics/"
            target="_blank"
            style={{
              color: "black",
              fontWeight: "bold",
              textDecoration: "underline",
            }}
          >
            B201's website
          </a>
          .
        </>
      ),
    },
    // MAGE
    {
      imageUrl: "/images/mage.webp",
      text: () => (
        <>
          I also participated as a committee member for the{" "}
          <strong>Multimedia and Game Event (MAGE)</strong>, a national-scale
          annual event. This event features seminars, workshops, and
          competitions in game development, app development, IoT development,
          and computer olympiads. We also have an exhibition showcasing the
          finalists' projects in the development competition. My involvement was
          in MAGE 7 and MAGE 8, starting in the{" "}
          <strong>Marketing Division</strong> for MAGE 7, where I worked on
          event promotion and participant recruitment. For MAGE 8, I advanced to
          the role of <strong>Development Competition Coordinator</strong>,
          leading the efforts to organize the competition aspects and ensuring a
          smooth and successful event execution. To get more information about
          the event, check out MAGE's Instagram page at{" "}
          <a
            href="
            https://www.instagram.com/mage_its?igsh=cW5tdXp2ZWk0ZjU1"
            target="_blank"
            style={{
              color: "black",
              fontWeight: "bold",
              textDecoration: "underline",
            }}
          >
            @mage_its
          </a>
          .
        </>
      ),
    },
    // Indosat Idcamp
    {
      imageUrl: "/images/ilits.webp",
      text: () => (
        <>
          I took part as a member of the public relations committee for the
          INILHO ITS (ILITS) program in 2021. ILITS program aims to provide high
          school students with real knowledge and experiences about university
          life, guiding them towards their dream major that aligns with their
          interests and talents. This initiative serves as a bridge for students
          to explore and connect with their future academic paths. My primary
          responsibilities involve presenting our university's offerings to high
          schools. This role includes preparing presentations, contacting
          schools for engagement opportunities, and effectively communicating
          the value of our educational programs. For additional details about
          this programs, please visit{" "}
          <a
            href="https://inilho.its.ac.id/"
            target="_blank"
            style={{
              color: "black",
              fontWeight: "bold",
              textDecoration: "underline",
            }}
          >
            ILITS website
          </a>
          .
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
        <ModalHeader>I'm an active community member &#127881;</ModalHeader>
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
