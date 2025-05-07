import { Heading, HStack, Text, VStack, Box } from '@chakra-ui/react'
import React from 'react'
import Image from 'next/image'

const Testimonial = () => {
    return (
        <React.Fragment>
            <VStack>
                <HStack width={"70%"} textAlign={"center"} fontSize={"2xl"}>
                    <span style={{ fontSize: "100px" }}>"</span> Lorem ipsum dolor sit amet consectetur. Viverra odio orci tellus ornare blandit. Eros nisl vulputate suscipit. Proin commodo dui ultricies senectus aliquam.<span style={{ fontSize: "100px" }}>"</span>
                </HStack>
                <Image
                    src={"/profile.png"}
                    width={76}
                    height={76}
                    alt='profile'
                />
                <VStack>
                    <Heading>Josh</Heading>
                    <Text> Tourify</Text>
                </VStack>
            </VStack>

        </React.Fragment>

    )
}

export default Testimonial