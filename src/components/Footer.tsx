import React from 'react'
import { Icon, Flex, Link, Text } from '@chakra-ui/react'
import { FaFacebook } from 'react-icons/fa'
import { GrGithub, GrInstagram, GrLinkedin } from 'react-icons/gr'
const Footer = () => {
  return (
    <React.Fragment>
        <Flex justify={"center"} p={5} mt={"250px"} gap={15} align={"center"}>
        <Link>
            <Icon size={"2xl"} bg={"none"}>
                <FaFacebook />
            </Icon>
        </Link>
        <Link>
            <Icon size={"2xl"} bg={"none"}>
                <GrLinkedin />
            </Icon>
        </Link>
        <Link>
            <Icon size={"2xl"} bg={"none"}>
                <GrInstagram />
            </Icon>
        </Link>
        <Link>
            <Icon size={"2xl"} bg={"none"}>
                <GrGithub />
            </Icon>
        </Link>
        
        </Flex>
        <Text display={"flex"} justifyContent={"center"} fontSize={"xs"}> 2025 Shukrah Abdulraheem </Text>
    </React.Fragment>

  )
}

export default Footer