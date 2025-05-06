import { Box, Heading, VStack, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'

const ProjectCard = () => {
    const imageStyle = {
        marginLeft: "auto"
    }

    return (
        <>
                <VStack p={5} width={"300px"} height={"350px"} border={"solid"} borderWidth={"thin"} borderColor={"blue.600"} borderRadius={"16px"} align={"center"} justify="space-between">
                    
                    <VStack gap={4}>
                        <Image src={"/public.png"}
                            alt='cloud'
                            width={20}
                            height={20}
                            style={imageStyle}
                        />
                        <Heading>
                            Best Project Ever
                        </Heading>
                        <Text textAlign={"center"}>
                            Encompassing tasks like cloud migration,
                            architecture, security and optimization while also ensuring data accessibility, security, and efficient processing.
                        </Text>
                    </VStack>

                    <Text width="100%" textAlign="center">
                        React, SASS, OpenAI
                    </Text>
                </VStack>
        </>
    )
}

export default ProjectCard