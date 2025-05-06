import { Box, Heading, VStack, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'

const ServicesCard = () => {
  return (
    <>
      <Box p={5} width={"300px"} height={"350px"} border={"solid"} borderWidth={"thin"} borderColor={"blue.600"} borderRadius={"16px"}>
        <VStack align={"center"}>
          <Image src={"/cloud.png"}
            alt='cloud'
            width={75}
            height={75} />
          <Heading>
            Cloud Engineering
          </Heading>
          <Text textAlign={"center"}>
            Encompassing tasks like cloud migration,
            architecture, security and optimization while also ensuring data accessibility, security, and efficient processing.
          </Text>
        </VStack>
      </Box>
    </>
  )
}

export default ServicesCard