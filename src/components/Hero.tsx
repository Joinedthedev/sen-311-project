import { Button, Flex, Heading, HStack, Icon, VStack } from '@chakra-ui/react'
import React from 'react'
import { GrGithub, GrInstagram, GrLinkedin } from 'react-icons/gr'
import { VT323 } from "next/font/google"
import { FaFacebook } from 'react-icons/fa'
import { BiDownload } from 'react-icons/bi'

const pixel = VT323({
    weight: '400',
    subsets: ['latin'],
})

const Hero = () => {

    return (
        <VStack gap={6} justifyContent={"center"} align={"center"} mt={"200px"} mx={"auto"} >
            <Heading fontSize={"3xl"}> I'M A </Heading>
            <Heading className={pixel.className} fontSize={"5xl"}>FRONTEND   DEVELOPER</Heading>
            <HStack>
                <Flex spaceX={4} align={"center"} ml={"auto"} gap={2}>

                    <Icon size={"2xl"} bg={"none"}>
                        <FaFacebook />
                    </Icon>

                    <Icon size={"2xl"} bg={"none"}>
                        <GrLinkedin />
                    </Icon>

                    <Icon size={"2xl"} bg={"none"}>
                        <GrInstagram />
                    </Icon>

                    <Icon size={"2xl"} bg={"none"}>
                        <GrGithub />
                    </Icon>

                </Flex>
            </HStack>

            <a href="/SalimResumeReform.pdf" download>
                <Button color={"blue.600"} border={"solid"} borderColor={"blue.500"} bgColor={"white"} size={["md"]}>
                    <BiDownload /> Download Resume
                </Button>
            </a>
        </VStack>
    )
}

export default Hero