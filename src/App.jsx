import ComputerEngineer from "src/pages/ComputerEngineer";
import Programmer from "src/pages/Programmer";
import Designer from "src/pages/Designer";
import LabAssistant from "src/pages/LabAssistant";
import GameDev from "src/pages/GameDev";
import IsPotrait from "src/pages/IsPotrait";
import ScrollContent from "./pages/ScrollContent";
import React from "react";
import { useScroll } from "framer-motion";
import ProgressBar from "./components/ProgressBar";
import ContactMe from "./pages/ContactMe";
import { useMediaQuery } from "@chakra-ui/react";
function generateTransformValues(page, pageCount) {
  // Calculate the start and end percentages for the current page
  const start = (page - 1) / pageCount;
  const end = page / pageCount;
  // console.log(start, end);
  // Return the values for useTransform
  return [start, end];
}
function App() {
  const [isLandscape] = useMediaQuery("(orientation: landscape)");
  // const ref = useRef(null);
  const pageCount = 7;
  const { scrollYProgress } = useScroll({
    // target: ref,
    offset: ["start start", "end start"],
  });

  return isLandscape ? (
    <>
      <ProgressBar scrollY={scrollYProgress} range={[0, 0.85]} />
      <ComputerEngineer page={1} scrollY={scrollYProgress} />
      <LabAssistant
        page={2}
        range={generateTransformValues(1, pageCount)}
        scrollY={scrollYProgress}
      />
      <Programmer
        page={3}
        range={generateTransformValues(2, pageCount)}
        scrollY={scrollYProgress}
      />
      <Designer
        page={4}
        range={generateTransformValues(3, pageCount)}
        scrollY={scrollYProgress}
      />
      <GameDev
        page={5}
        range={generateTransformValues(4, pageCount)}
        scrollY={scrollYProgress}
      />
      <ContactMe scrollY={scrollYProgress} />
      <ScrollContent />
    </>
  ) : (
    <>
      <IsPotrait></IsPotrait>
    </>
  );
}

export default App;
