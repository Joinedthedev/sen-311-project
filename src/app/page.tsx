import React from "react";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import { VStack } from "@chakra-ui/react";
import Experiences from "@/components/Experiences";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
export default function Home() {
  return (
<>
<VStack px={"100px"} gap={"200px"}  >
  <Hero/>
  <AboutMe/>
  <Experiences/>
  <Services/>
  <Projects/>
</VStack>
</>
  );
}
