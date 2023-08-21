import '../Styles/App.css';
import styled, { keyframes } from 'styled-components';
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Intro from './Intro';
import { Suspense } from 'react';
import {
	Link,
	Box,
	Heading,
	Image,
	Container,
} from '@chakra-ui/react'
import { FooterContainer, SectionDivider } from '../Styles/GlobalStyles';
import Planet from './threeJS/Earth';
import ChakraModal from './Modal';
import StarBackground from '../ParticleBackground4';
import { MyGallery } from './Gallery';
import insta from "../assets/insta.png"
import tiktok from "../assets/tiktok.png"
import { SocialContainer, SocialGridContainer } from '../Styles/Styles';




const HeadingContainer = styled.div`
	display: flex;
	width: 100%;
	flex-direction: column;
	margin-bottom: 10px;
	z-index: 999;
	
	h1 {
		color: var(--text-color);
		font-size: 50px;
		border-radius: 10px;
	}
`


const Homepage = () => {

	return (
		<>
			<StarBackground />
			<Container className="homePageContainer" >
				<Section delay={0.2}>
					<HeadingContainer>
						<h1>Photos</h1>
						<SectionDivider />
					</HeadingContainer>
					<MyGallery />
				</Section>
			</Container>
		</>
	);
};

export default Homepage;
