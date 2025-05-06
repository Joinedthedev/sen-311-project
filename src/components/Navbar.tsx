"use client"
import { Flex, Icon, IconButton, Link, useBreakpointValue } from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react';
import { GrGithub, GrLinkedinOption, GrMail, GrYoutube } from "react-icons/gr";
import { RxHamburgerMenu } from 'react-icons/rx';
import { Link as ScrollLink } from 'react-scroll';
import { ColorModeButton, useColorModeValue } from './ui/color-mode';
import { MenuContent, MenuItem, MenuRoot, MenuTrigger, } from "./ui/menu";

export const Navbar = () => {
    const isMobile = useBreakpointValue({ base: true, xs: true, sm: true, md: false, lg: false });
    const bg = useColorModeValue("blue.50", "gray.900")
    const [isVisible, setIsVisible] = useState(true);
    const timeoutRef = useRef<number | null>(null);

    const handleScroll = () => {
        if (timeoutRef.current !== null) {
            clearTimeout(timeoutRef.current);
        }
        setIsVisible(true);

        if (window.scrollY === 0) {
            setIsVisible(true);

        } else {

            timeoutRef.current = window.setTimeout(() => {
                setIsVisible(false);
            }, 2000);
        }
    };

    useEffect(() => {

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (timeoutRef.current !== null) {
                clearTimeout(timeoutRef.current);
            }
        };

    }, []);

    return (
        <Flex
            p={3}
            w={"100%"}
            position="sticky"
            top={0}
            zIndex={1000}
            transition="opacity 0.5s"
            opacity={isVisible ? 1 : 0}
        
        >
            {isMobile ? (
                <Flex ml={"auto"}>
                    <MenuRoot>
                        <MenuTrigger>
                            <IconButton bg={"none"}>
                                <RxHamburgerMenu />
                            </IconButton>
                        </MenuTrigger>
                        <MenuContent>
                            <MenuItem bg={bg} value='About Me'>
                                <ScrollLink smooth={true} duration={500} to={"about-me"} > About Me</ScrollLink>
                            </MenuItem>
                            <MenuItem bg={bg} value='Experience'>
                                <ScrollLink style={{ cursor: "pointer" }} smooth={true} duration={500} to='exp'> Experience</ScrollLink>
                            </MenuItem>
                            <MenuItem bg={bg} value='Projects'>
                                <ScrollLink style={{ cursor: "pointer" }} smooth={true} duration={500} to='projects'> Projects</ScrollLink>
                            </MenuItem>
                        </MenuContent>
                    </MenuRoot>
                </Flex>

            ) : (
                <Flex ml={"auto"} gap={4} direction={"row"}>
                    <ScrollLink style={{ cursor: "pointer" }} smooth={true} duration={500} to='about-me'> About Me</ScrollLink>
                    <ScrollLink style={{ cursor: "pointer" }} smooth={true} duration={500} to='exp'> Experience</ScrollLink>
                    <ScrollLink style={{ cursor: "pointer" }} smooth={true} duration={500} to='blog'> Blog</ScrollLink>
                    <ScrollLink style={{ cursor: "pointer" }} smooth={true} duration={500} to='projects'> Projects</ScrollLink>
                </Flex>
            )}
          
        </Flex>
    );
};
