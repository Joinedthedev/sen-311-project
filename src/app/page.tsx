import React from "react";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import { VStack } from "@chakra-ui/react";
export default function Home() {
  return (
<>
<VStack gap={"200px"} align={"center"}>
  <Hero/>
  <AboutMe/>
</VStack>
</>
  );
}
