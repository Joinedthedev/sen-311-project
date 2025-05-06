import { Heading, HStack, Text, VStack, Box } from '@chakra-ui/react'
import React from 'react'

const Experiences = () => {
    return (
        <>
            <Box mr={"auto"}>
                <Heading mr={"auto"} fontSize={"4xl"}> Experience</Heading>
                <HStack gap={10} display={"flex"} alignItems={"center"} p={5}>
                  
                       
                  
                    <VStack>
                        <HStack>
                        <Heading fontSize={"2xl"}>
                                Software Engineer Intern @
                            </Heading>
                        <Text color={"blue"} fontSize={"2xl"} fontWeight={"light"}>
                            ChitHub
                        </Text>
                           
                        </HStack>
                        <Text fontWeight={"light"}>
                            June 2022 - Aug 2022
                        </Text>

                        <Box fontSize={"xl"} as="ul" listStyleType={"disc"}>
                            <Box as={"li"} _marker={{ color: "blue" }}>  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            </Box>

                            <Box as={"li"} _marker={{ color: "blue" }}> Excepteur sint occaecat cupidatat non proident, sunt in culpa q.
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            </Box>

                        </Box>

                    </VStack>
                </HStack>
            </Box>
        </>
    )
}

export default Experiences