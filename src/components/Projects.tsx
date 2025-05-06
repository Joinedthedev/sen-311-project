import { Box, Heading, HStack, SimpleGrid } from '@chakra-ui/react'
import Image from 'next/image'
import ProjectCard from './ProjectCards'

const Projects = () => {
    const imageStyle = {
        borderRadius: "15px",
        border: '0.5px solid black',
        marginLeft:"auto ",
        marginRight: "auto"
      }
    return (
     
            <Box gap={10}>
                <Heading  mb={10} mr={"auto"} fontSize={"4xl"}>
                    Projects
                </Heading>
                  
                        <Image
                        
                        src="/projects.png"
                        alt='screenshot of project'
                        width={700}
                        height={100}
                        style={imageStyle}
                       
                        />
             
           
                <SimpleGrid mt={"100px"} gap={"40px"} columns={3} >
                    <ProjectCard/>
                    <ProjectCard/>
                    <ProjectCard/>
                    <ProjectCard/>
                    <ProjectCard/>
                    <ProjectCard/>
                </SimpleGrid>
            </Box>
      
    )
}


export default Projects