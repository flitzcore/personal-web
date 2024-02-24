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

export default function ModalComputerEngineer(props) {
  const pages = [
    {
      imageUrl: "/images/Tekkom.webp",
      text: () => (
        <>
          I learn my trade at the{" "}
          <strong>Department of Computer Engineering</strong> at{" "}
          <strong>Institut Teknologi Sepuluh Nopember (ITS)</strong>. In here,
          we integrate core informatics principles with electrical engineering,
          offering a robust foundation and innovative specializations. This
          department has specializations in hardware (including embedded
          systems, robotics, and circuitry), software (covering programming,
          cluster computing, and multimedia data processing), networks (focusing
          on communication, wireless sensor networks, and security), and
          intelligent systems (emphasizing machine learning and soft computing).
          Dive deeper into our curriculum's blend of informatics and electrical
          engineering by visiting our{" "}
          <a
            href="https://www.its.ac.id/komputer/"
            target="_blank"
            style={{
              color: "black",
              fontWeight: "bold",
              textDecoration: "underline",
            }}
          >
            university's website
          </a>
          .
        </>
      ),
    },
    {
      imageUrl: "/images/Google.webp",
      text: () => (
        <>
          Besides my studies at the university, I also enhance my skills at
          <strong> Bangkit Academy</strong>. Bangkit is a career readiness
          program led by <strong>Google, GoTo, and Traveloka</strong>. Launched
          in 2020, this Kampus Merdeka program offers 3 learning path options,
          i.e. machine learning, mobile development, and cloud computing. Not
          only tech skills, Bangkit also provides essential English and Soft
          Skills development. At Bangkit Academy, I'm advancing my expertise in
          Cloud Computing, where I delve into the intricacies of cloud
          infrastructure and services, preparing myself for the tech industry's
          future challenges. For more details on the learning journey at
          Bangkit, you can visit{" "}
          <a
            href="https://registration.bangkit.academy/"
            target="_blank"
            style={{
              color: "black",
              fontWeight: "bold",
              textDecoration: "underline",
            }}
          >
            Bangkit Academy's website
          </a>
          .
        </>
      ),
    },
    // Add more pages as needed
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
      size={{ base: "sm", md: "md", lg: "lg", xl: "xl" }}
      isCentered
      isOpen={props.isOpen}
      onClose={props.onClose}
      scrollBehavior="inside"
    >
      <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px) " />
      <ModalContent>
        <ModalHeader>Hi, I'm a Computer Engineer &#x1F44B;</ModalHeader>
        <ModalCloseButton />
        <ModalBody mx={"1em"}>
          <Image
            src={pages[currentPage].imageUrl}
            alt="Page Image"
            mb={4}
            width={"100%"}
            height={{ base: "8em", lg: "10em", xl: "18em" }}
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
