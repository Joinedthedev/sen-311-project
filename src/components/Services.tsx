import React from 'react'
import ServicesCard from './ServicesCard'
import { Heading, Box, HStack } from '@chakra-ui/react'

const Services = () => {
    return (
     
            <Box gap={10}>
                <Heading mb={10} mr={"auto"} fontSize={"4xl"}>
                    Services
                </Heading>
                <HStack gap={20}>
                    <ServicesCard />
                    <ServicesCard />
                    <ServicesCard />
                </HStack>
            </Box>
      
    )
}

export default Services