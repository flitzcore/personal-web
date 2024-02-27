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

export default function ModalProgrammer(props) {
  const pages = [
    // MathArc
    {
      imageUrl: "/images/matharc.webp",
      text: () => (
        <>
          <strong>MathArc</strong>, an engaging online educational game designed
          to teach mathematics to elementary school children, secured{" "}
          <strong>funding at the 36th PIMNAS</strong>, a distinguished national
          scientific competition. In this project, I took on the role of both{" "}
          <strong>Web and Game Developer</strong>, contributing to the creation
          and deployment of MathArc. MathArc was created in response to a
          societal issue: the declining interest in learning among students as
          their engagement with online gaming increases. MathArc aims to merge
          play with education, transforming the learning environment into a more
          exciting and engaging space. This innovative approach encourages
          students to learn while they play, making education a fun and
          interactive experience. This game introduces a creative twist to
          learning by incorporating a parkour-style gameplay where players face
          mathematical challenges. Should players fall or "die" during the game,
          they are required to solve math problems to continue. An intriguing
          feature allows players to throw "bomb" items, forcing their opponents
          to tackle math questions, adding a competitive edge to learning.
          MathArc has actively pursued promotional activities, embarking on a
          roadshow that included participation in two university events and
          presentations at over ten elementary schools. Despite being in its
          early release phase on the Play Store, MathArc has quickly gained
          traction, amassing over 1,000 downloads. This initiative demonstrates
          the project's innovative approach to education, blending the
          excitement of gaming with the fundamentals of mathematics, thereby
          fostering a fun and interactive learning environment. To get more
          information about the event, check out{" "}
          <a
            href="
                https://www.matharc.my.id/"
            target="_blank"
            style={{
              color: "black",
              fontWeight: "bold",
              textDecoration: "underline",
            }}
          >
            MathArc Website
          </a>
          .
        </>
      ),
    },
    // Rongsokin
    {
      imageUrl: "/images/rongsokin.webp",
      text: () => (
        <>
          <strong>Rongsokin</strong> is a project that garnered both{" "}
          <strong>funding and a bronze medal</strong> at the{" "}
          <strong>34th PIMNAS</strong>, a prestigious national scientific
          competition. I took on the role of{" "}
          <strong>Application Developer</strong> in this project, creating a
          solution to a widespread societal issue: the accumulation of unused
          items in homes due to the lack of access to recycling services,
          leading to improper disposal or hoarding of these items. Rongsokin
          addresses this challenge by offering a marketplace for selling or
          recycling non-functional household items, distinguishing itself from
          similar apps through unique features and partnerships with local
          recyclers. This collaboration aims to boost the local economy by
          providing a sustainable income for recyclers. The project encompasses
          two interconnected systems: the "Rongsokin User" app for consumers and
          the "Rongsokin Picker" app for recycling partners. By bridging the gap
          between households and recyclers, Rongsokin seeks to tackle the
          problem of waste and contribute to the prosperity of local recycling
          workers, offering a sustainable and economically beneficial solution
          to manage unused household items. More of this project can be read on
          this article about{" "}
          <a
            href="https://dikti.kemdikbud.go.id/kabar-dikti/kampus-kita/rongsokin-aplikasi-bank-sampah-digital-gagasan-mahasiswa-its/"
            target="_blank"
            style={{
              color: "black",
              fontWeight: "bold",
              textDecoration: "underline",
            }}
          >
            Rongsokin
          </a>
          .
        </>
      ),
    },
    // Demiwatch
    {
      imageUrl: "/images/demiwatch.webp",
      text: () => (
        <>
          I participated in the <strong>DemiWatch</strong> project as part of my
          coursework. DemiWatch is an innovative project designed to assist
          individuals with dementia in navigating more freely. The DemiWatch
          project encompasses a comprehensive system, including hardware, a
          mobile application, and a backend system. In this project, I took on
          the role of <strong>Hardware Developer</strong>. This hardware serves
          as the core of DemiWatch, designed to be worn by individuals with
          dementia.. Those with dementia often forget their destinations and end
          up getting lost. DemiWatch is engineered as a wearable device that
          displays directions to intended destinations for individuals with
          dementia. Moreover, this device includes a feature for tracking the
          wearer's location, accessible via an application held by family
          members. Through this app, families can monitor the location of their
          loved ones and search for them if they go missing. The device also
          sends emergency notifications to the app if any issues arise.
          DemiWatch aims to ease the monitoring process for families and empower
          individuals with dementia to explore their surroundings with more
          confidence.
        </>
      ),
    },

    // Indosat Idcamp
    {
      imageUrl: "/images/moru.webp",
      text: () => (
        <>
          <strong>Moru</strong>, a capstone project at{" "}
          <strong>Bangkit Academy</strong>, is an app I developed as the{" "}
          <strong>Backend Developer</strong>. It's designed to assist users in
          establishing productive daily routines, addressing the shift towards
          less productive habits post-pandemic. Moru encourages activities like
          reading and exercising by suggesting daily tasks based on users' past
          activities. The goal of Moru is to help users develop positive habits
          through a structured morning routine, promoting a healthier, more
          productive lifestyle.
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
      size={{ base: "sm", md: "md", lg: "lg", xl: "xl" }}
      isCentered
      isOpen={props.isOpen}
      onClose={props.onClose}
      scrollBehavior="inside"
    >
      <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px) " />
      <ModalContent>
        <ModalHeader>
          I have participated in numerous projects &#128204;
        </ModalHeader>
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
