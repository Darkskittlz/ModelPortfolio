import React, { useEffect, useRef } from 'react'
import "../Styles/App.css"
import { init } from "ityped";
import { BodyContainer, Col, Col2, Col2Text, CrewColumn, CrewGridContainer, Grid2Container, GridContainer, IntroContainer, IntroGridContainer, NavContainer, PageContainer, Row } from '../Styles/Styles';
import { Gallery, MyGallery } from './Gallery';
import StarBackground from './StarBackground';

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
            <StarBackground />
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
                
                <MyGallery />
                
            </BodyContainer>
        </>
    )
}