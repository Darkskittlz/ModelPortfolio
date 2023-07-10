import React, { useEffect, useRef } from 'react'
import Ts2 from './Ts2'
import { init } from "ityped";
import { BodyContainer, Col, Col2, Col2Text, CrewColumn, CrewGridContainer, Grid2Container, GridContainer, IntroContainer, IntroGridContainer, NavContainer, Row } from '../Styles/Styles';
import tristanIMG from "../assets/Tristan.png"
import aliceIMG from "../assets/Alice.jpg"
import headshot2 from "../assets/headshot2.jpg"
import headshot3 from "../assets/headshot3.png"
import headshot4 from "../assets/headshot4.png"
import Navbar from 'react-bootstrap/Navbar';
import ChakraModal from './ChakraModal';
import { Gallery, MyGallery } from './Gallery';

export default function Homepage() {
    const textRef = useRef();
    useEffect(() => {
        init(textRef.current, {
            showCursor: false,
            backDelay: 1500,
            backSpeed: 60,
            strings: ["Film", "Code", "Design"],
        })
    });
    return (
        <>
            <Ts2 />
            <BodyContainer>
                {/* <Navbar bg="dark" data-bs-theme="dark">
                    <NavContainer>
                        <Navbar.Brand style={{ color: "white" }} href="#home">Home</Navbar.Brand>
                        <Navbar.Brand style={{ color: "white" }} href="#film">Film</Navbar.Brand>
                        <Navbar.Brand style={{ color: "white" }} href="#photography">Photography</Navbar.Brand>
                        <Navbar.Brand style={{ color: "white" }} href="#content">Content</Navbar.Brand>
                    </NavContainer>
                </Navbar> */}
                <IntroGridContainer>
                    <IntroContainer>
                        <div>
                            <h1>
                                <h1 id="Title">Tristan Neal</h1>
                            </h1>
                        </div>
                    </IntroContainer>
                </IntroGridContainer>

                <GridContainer>
                    <MyGallery />
                </GridContainer>
            </BodyContainer>
        </>
    )
}