import { HStack, Box, VStack, Heading, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'

const AboutMe = () => {
    return (
        <HStack justify={"space-between"}  mx={"auto"}>
            <VStack width={"70%"} >
                <Heading fontSize={"4xl"} mr={"auto"}>
                    About me
                </Heading>
                <VStack gap={5} fontSize={"xl"}>
                    <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Text>
                    <Box mr={"auto"} >
                        <Text > Here are some of the technologies I&apos;ve worked with: </Text>
                        <HStack p={5} justify={"space-between"}>
                            <VStack>
                                <Box as = "ul" listStyleType={"disc"}>
                                    <Box as ="li"  _marker={{color: "blue"}}>React</Box>
                                    <Box as={"li"} _marker={{color: "blue"}}>FastApi</Box>
                                    <Box as={"li"} _marker={{color: "blue"}}>Javascript</Box>
                                </Box>
                            </VStack>
                            <VStack>
                                <Box  as = "ul" listStyleType={"disc"}>
                                    <Box as={"li"} _marker={{color: "blue"}}>Django</Box>
                                    <Box as={"li"} _marker={{color: "blue"}}>Pandas</Box>
                                    <Box as={"li"} _marker={{color: "blue"}}>Python</Box>
                                </Box>
                            </VStack>
                        </HStack>

                        
                    </Box>
                    <Text mr={"auto"}> Outside of development, I&apos;m also interested in reading, machine learning, and making waffles</Text>
                </VStack>



            </VStack>
            <Box >
                <Image
                    alt="The Most Amazing Woman Ever"
                    src={"/Shukrah.png"}
                    width={300}
                    height={300}
                    style={{ borderRadius: "50px" }}
                />
            </Box>
        </HStack>
    )
}

export default AboutMe