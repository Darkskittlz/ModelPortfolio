import React, { useEffect, useRef } from 'react'
import Ts2 from './Ts2'
import { init } from "ityped";
import { BodyContainer, CrewColumn, CrewGridContainer, GridContainer, IntroContainer, IntroGridContainer, NavContainer } from '../Styles/Styles';
import Navbar from 'react-bootstrap/Navbar';

export default function Photography() {
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
                <Navbar bg="light" data-bs-theme="light">
                    <NavContainer>
                        <Navbar.Brand href="#home">Home</Navbar.Brand>
                        <Navbar.Brand href="#model">Film</Navbar.Brand>
                        <Navbar.Brand href="#test">Photography</Navbar.Brand>
                        <Navbar.Brand href="#test">Content</Navbar.Brand>
                    </NavContainer>
                </Navbar>
                <IntroGridContainer>
                    <IntroContainer>
                        <div>
                            <h1>
                                Photography
                                <br />
                                <span ref={textRef} />
                            </h1>
                        </div>
                    </IntroContainer>
                </IntroGridContainer>
            </BodyContainer>
        </>
    )
}