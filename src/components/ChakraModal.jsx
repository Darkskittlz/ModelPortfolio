import styled from 'styled-components'
import React, { useState, useRef } from 'react'
import "../Styles/App.css"
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Select
} from '@chakra-ui/react'
import axios from 'axios'
import date from 'date-and-time';
import Clock from 'react-live-clock';
import { emotions } from '../constants/constants'


const Grid2Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-content: center;
  z-index:999;
  position: fixed;
`

const ModalContainer = styled.div`
  display: flex;
  z-index:999;
  position: fixed;
  height: 20px;

  @media screen and (max-width: 960px) {
    width: 90%;
  }  
`


const TimeContainer = styled.div`
    font-size: 22px;
    font-weight: 400;
    display: flex;
    margin-top: 5px;
    grid-gap: 10px;
    z-index:2;
    align-items: flex-end;

    h1 {
        font-size: 25px;
        color: #000000;
        font-weight: 600;
        margin-bottom: 0px;
    }
`

const DateContainer = styled.div`
    font-size: 20px;
    font-weight: 400;
    display: flex;
    align-items: center;
    z-index:2;
    grid-gap: 10px;
    margin-bottom: -25px;

    h1 {
        font-size: 23px;
        font-weight: 500;
        color: #000000;
    }
`


const IMGContainer = styled.div`
  width: 100%;
  justify-content: center;
  z-index:999;
  display: flex;


  img {
    border-radius: 10px;
    z-index:999;
    height: 450px;
    margin-top: 220px;

    @media screen and (max-width: 1440px) {
        height: 240px;
    }

    @media screen and (max-width: 960px) {
      height: 200px;
    }
  }
`

const DropdownContainer = styled.div`
  margin-bottom: 10px;
`

const InputContainer = styled.div`
  input {
    font-size: 25px;
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
    backdrop-filter: blur(10px);
    background-color: none;
  }
`

const MessageContainer = styled.div`

  input {
    padding-top: 10px;
    padding-bottom: 60px;    
  }
`



export default function ChakraModal() {
    const form = useRef();
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [message, setMessage] = useState(null)
    const [mood, setMood] = useState(null)
    const [email, setEmail] = useState(null)
    const [name, setName] = useState(null)


    const sendData = async () => {
        const formattedName = encodeURIComponent(name)
        const formattedMood = encodeURIComponent(mood)
        const formattedEmail = encodeURIComponent(email)
        const formattedMessage = encodeURIComponent(message)


        const URL = `name=${formattedName}&mood=${formattedMood}&email=${formattedEmail}&message=${formattedMessage}`;
        const results = await axios.post("/.netlify/functions/sendData/?" + URL);
        console.log(results);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        sendData()
    }

    console.log(`mood: `, mood);
    console.log(`Email: `, email);
    console.log(`Name: `, name);
    console.log(`Message: `, message);


    const now = new Date();
    date.format(now, 'MMM DD YYYY');



    return (
        <>
            <Button
                onClick={onOpen}
                css={{
                    borderRadius: "10px",
                    border: "none",
                    padding: "20px",
                    cursor: "pointer",
                    boxShadow: "0 0 40px rgb(1,74,250)",
                    background: "rgb(9,9,121)",
                    background: "linear-gradient(165deg, rgba(9,9,121,1) 0%, rgba(1,156,188,1) 100%)"
                }}
            >Contact</Button>

            <Grid2Container>
                <Modal
                    closeOnOverlayClick={true}
                    isOpen={isOpen}
                    onClose={onClose}
                    isCentered
                    allowPinchZoom="true"
                    motionPreset='slideInBottom'
                >
                    <ModalContainer>
                        <ModalOverlay>
                            <ModalContent
                                css={{
                                    display: "flex",
                                    justifyContent: "center",
                                    marginTop: "-200px",
                                    alignContent: "center",
                                    backdropFilter: "blur(50px)",
                                    zIndex: 999
                                }}
                            >
                                <form ref={form} id="myForm" onSubmit={(event) => handleSubmit(event)}>

                                    <IMGContainer>
                                        <img src="https://github.com/Darkskittlz/darkmeow-portfolio/blob/master/src/assets/rainTrain.gif?raw=true" alt="animeGif" />
                                    </IMGContainer>

                                    <ModalBody
                                        css={{
                                            display: "flex",
                                            justifyContent: "center",
                                            gridGap: "50px",
                                            marginBottom: "5px",
                                            zIndex: 999,
                                        }}>
                                        <TimeContainer>
                                            <h1>Time: </h1><Clock style={{ color: "#1d1d1d" }} format={'h:mm a'} ticking={true} id="time" />
                                        </TimeContainer>
                                    </ModalBody>
                                    <ModalBody
                                        css={{
                                            display: "flex",
                                            justifyContent: "center",
                                            gridGap: "50px",
                                            marginBottom: "30px"
                                        }}>
                                        <DateContainer>
                                            <h1>Date: </h1> {date.format(now, 'ddd, MMM DD YYYY')}
                                        </DateContainer>
                                    </ModalBody>




                                    <ModalBody
                                        css={{
                                            display: "Flex",
                                            justifyContent: "center",
                                            zIndex: 999
                                        }}
                                        pb={6}
                                    >
                                        <FormControl>
                                            <FormLabel
                                                css={{
                                                    fontSize: "25px",
                                                    textAlign: "center",
                                                    marginBottom: "10px",
                                                    color: "white"
                                                }}
                                            >Contact Form</FormLabel>
                                            <InputContainer>
                                                <DropdownContainer>
                                                    <Select
                                                        placeholder="Select Mood"
                                                        css={{ width: "100%", padding: "10px" }}
                                                        onChangeCapture={(event) => setMood(event.target.value)}
                                                    >
                                                        {emotions.map(({ id, title }) => {
                                                            return <option
                                                                key={id}
                                                                id="mood"
                                                                value={title}
                                                                name="user_mood"
                                                                type="text"
                                                            >
                                                                {title}
                                                            </option>
                                                        })}
                                                    </Select>
                                                </DropdownContainer>
                                                <input
                                                    id="name"
                                                    type="name"
                                                    name="user_name"
                                                    placeholder="Name"
                                                    onChange={(event) => {
                                                        setName(event.target.value)
                                                    }}
                                                />
                                                <input
                                                    id="email"
                                                    type='email'
                                                    name="user_email"
                                                    placeholder="E-Mail"
                                                    onChange={(event) => {
                                                        setEmail(event.target.value)
                                                    }}
                                                />
                                                <MessageContainer>
                                                    <input
                                                        type="message"
                                                        id="message"
                                                        placeholder="Message"
                                                        name="user_message"
                                                        onChange={(event) => setMessage(event.target.value)}
                                                    />
                                                </MessageContainer>
                                            </InputContainer>

                                        </FormControl>
                                    </ModalBody>
                                    <ModalFooter
                                        css={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
                                    >
                                        <Button
                                            className="modalButton"
                                            style={{ marginRight: "10px", padding: "10px", borderRadius: "5px" }}
                                            id="btn"
                                            value="send"
                                            type="submit"
                                            onClick={() => {
                                                alert("Message Sent. Please Check your inbox")
                                            }}
                                        > Send </Button>
                                        <Button
                                            style={{ padding: "10px", borderRadius: "5px" }}
                                            className="modalButton"
                                            onClick={onClose}
                                        >
                                            Close
                                        </Button>
                                    </ModalFooter>
                                </form>
                            </ModalContent>
                        </ModalOverlay>
                    </ModalContainer>
                </Modal>
            </Grid2Container>
        </>
    )
}