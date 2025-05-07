import { Heading, VStack, Text, Icon, Flex } from '@chakra-ui/react'
import React from 'react'
import { BiPhone } from 'react-icons/bi'
import { BsFileEarmarkFontFill } from 'react-icons/bs'
import { CiLocationOff } from 'react-icons/ci'
import { MdEmail } from 'react-icons/md'
import { TfiEmail, TfiLocationPin } from 'react-icons/tfi'

const Contact = () => {
    return (
        <VStack>
            <Heading mr={"auto"} fontSize={"4xl"}> Contact Me</Heading>
            <Text mt={7} fontSize={"xl"}>Below are some of my contact information.
                Feel free to reach out to me for any inquiries and I’ll get back to you promptly.
            </Text>

            <Flex mt={10} gap={"150px"}>
                <VStack gap={2}>
                    <Icon size={"2xl"}>
                        <BiPhone />
                    </Icon>
                    <Heading fontSize={"1xl"}>
                        Call Me
                    </Heading>
                    <Text>
                        +234 123 456 7890
                    </Text>
                </VStack>
                <VStack gap={2}>
                    <Icon size={"2xl"}>
                        <TfiEmail />
                    </Icon>
                    <Heading fontSize={"1xl"}>
                        Email Me
                    </Heading>
                    <Text>
                        beansaregreat@gmail.com
                    </Text>
                </VStack>
                <VStack gap={2}>
                    <Icon size={"2xl"}>
                        <TfiLocationPin />
                    </Icon>
                    <Heading fontSize={"1xl"}>
                        Location
                    </Heading>
                    <Text>
                        Abuja
                    </Text>
                </VStack>
            </Flex>
        </VStack>
    )
}

export default Contact