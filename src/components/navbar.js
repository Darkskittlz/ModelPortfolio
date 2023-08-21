import React, { useState } from "react";
import { HamburgerIcon } from '@chakra-ui/icons'
import DarkMode from "./DarkMode.js"
import '../Styles/App.css';
import { Container, Container2, Div1, Div2, Div3, NavLink, SocialIcons, Span } from '../Styles/HeaderStyles';
import { GlobalStyle } from '../Styles/GlobalStyles';
import styled from 'styled-components';
import MenuIcon from "../assets/menuIcon.svg"
import {
    Box,
    Stack,
    Heading, 
    Flex,
    Menu, 
    MenuItem, 
    MenuList,
    MenuButton,
    IconButton,
    Link,
    useColorModeValue,    
    Image
} from '@chakra-ui/react'



const IconContainer = styled.div`
background-size: 50px 50px;
filter: grayscale(100%);
border: none;
border-radius: 50%;
transition: background-color 0.3s ease-in-out, filter 0.3s ease-in-out;

    img {
        background-color: gray;
        padding: 5px;
        margin-left: -5px;
        margin-right: -5px;
        border-radius: 10px;
        height: 40px;
        width: 35px;
    }
`

const MenuIMG = styled.img`
    width: 25px;
    margin-top:2px;
`

const GridContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    z-index: 999;
    position: relative;
    border: 1px solid none;
    border-radius: 10px;
    width: 50%;
    backdrop-filter: blur(20px);

	@media (max-width: 960px) {
		flex-direction: row;
        width: 100%;
        margin-top: -20px;
        backdrop-filter: blur(20px);
        backdrop-filter: none;
        justify-content: center;
	}
`


const Grid1 = styled.div`
    display: flex;
    width: 100%;
`

const Grid2 = styled.div`
    display: flex;
`


const Navbar = props => {
    const [showModal, setShowModal] = useState(false);
    const { path } = props

    const openModal = () => {
        setShowModal((prev) => !prev);
      };

    return (
        <Container>
            <GridContainer>
                <Grid1>
                    <Container2>
                        <Box
                            bg="none"
                            position="relative"
                            as="nav"
                            h="70px"
                            pt="10px"
                            ml="20px"
                            wrap="wrap"
                            zIndex={2}
                            {...props}
                        >
                            <Heading as="h1" color="white" fontSize={"30px"} size="lg">
                                Tristan Neal
                            </Heading>
                        </Box>
                    </Container2>
                </Grid1>

                <Grid2>
                    <Div3>
                        <DarkMode />
                        <Box>
                            <Menu>
                                <MenuButton 
                                    height="42px"
                                    width="42px"
                                    aria-label="Options"
                                    cursor="pointer"
                                    style={{
                                        borderRadius: "10px",
                                        backgroundColor: "var(--text-color)"
                                    }}
                                >
                                    <MenuIMG src={MenuIcon} />
                                </MenuButton>
                                <MenuList >
                                    <Link color="var(--text-color)" href='/'>
                                        <MenuItem as={Link}>Home</MenuItem>
                                    </Link>
                                </MenuList>
                            </Menu>
                        </Box>
                    </Div3>
                </Grid2>
            </GridContainer>
        </Container>
    )
}

export default Navbar;