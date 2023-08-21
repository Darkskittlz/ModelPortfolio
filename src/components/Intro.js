import React, { useEffect, useRef } from 'react';
import { init } from 'ityped';
import { Container1, Container2, ButtonContainer, Animation } from '../Styles/IntroStyles';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Center, Flex } from '@chakra-ui/react';
import "../Styles/App.css";

const SectionTitle = styled.h2`
    font-weight: 800;
    opacity: 1;
    color: white;
    width: max-content;
    max-width: 100%;
`

const GridContainer = styled.div`
`

const Intro = (props) => {
    const textRef = useRef();

    useEffect(()=> {
        init(textRef.current, {
            showCursor: false,
            backDelay: 1500,
            backSpeed: 60,
            strings: ["Model", "Actor", "Programmer"],
        });
    }, []);
  return (
    <GridContainer>
        <main>
            <Flex>
                <Center w="100%" style={{zIndex: 1}}>
                    <Container1 main>
                        <motion.div initial="hidden" animate="visible" variants={{
                            hidden: {
                                scale: .5,
                                opacity: 0
                            },
                            visible: {
                                scale: 0.8,
                                opacity: 1,
                                padding: 4,
                                transition: {
                                    delay: .4
                                }
                            }, 
                        }}>
                            <Container2>
                                <SectionTitle>Tristan Neal</SectionTitle>
                            </Container2>
                        </motion.div>
                    </Container1>  
                </Center>
            </Flex>
        </main>
    </GridContainer>
    )
}

export default Intro

