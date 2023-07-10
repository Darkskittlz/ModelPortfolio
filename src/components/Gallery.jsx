import React from 'react'
import ImageGallery from 'react-image-gallery'
import { ImageGridContainer, ModalContainer, SocialContainer, SocialGridContainer } from '../Styles/Styles'
import insta from "../assets/insta.png"
import tiktok from "../assets/tiktok.png"
import ChakraModal from './ChakraModal'

export class MyGallery extends React.Component {
    render() {
        return (
            <>
                <ImageGridContainer>
                    <img src="https://github.com/Darkskittlz/ModelPortfolio/blob/main/src/assets/images/modelIMG%20(4).jpg?raw=true" />
                    <img src="https://github.com/Darkskittlz/ModelPortfolio/blob/main/src/assets/images/modelIMG%20(20).jpg?raw=true" />
                    <img src="https://github.com/Darkskittlz/ModelPortfolio/blob/main/src/assets/images/modelIMG%20(3).jpg?raw=true" />
                    <img src="https://github.com/Darkskittlz/ModelPortfolio/blob/main/src/assets/images/modelIMG%20(12).jpg?raw=true" />
                    <img src="https://github.com/Darkskittlz/ModelPortfolio/blob/main/src/assets/images/modelIMG%20(11).jpg?raw=true" />
                    <img src="https://github.com/Darkskittlz/ModelPortfolio/blob/main/src/assets/images/modelIMG%20(14).jpg?raw=true" />
                    <img src="https://github.com/Darkskittlz/ModelPortfolio/blob/main/src/assets/images/modelIMG%20(19).jpg?raw=true" />
                    <img src="https://github.com/Darkskittlz/ModelPortfolio/blob/main/src/assets/images/modelIMG%20(13).jpg?raw=true" />
                    <img src="https://github.com/Darkskittlz/ModelPortfolio/blob/main/src/assets/images/modelIMG%20(10).jpg?raw=true" />
                    <img src="https://github.com/Darkskittlz/ModelPortfolio/blob/main/src/assets/images/modelIMG%20(9).jpg?raw=true" />
                    <img src="https://github.com/Darkskittlz/ModelPortfolio/blob/main/src/assets/images/modelIMG%20(18).jpg?raw=true" />
                    <img src="https://github.com/Darkskittlz/ModelPortfolio/blob/main/src/assets/images/modelIMG%20(15).jpg?raw=true" />
                    <img src="https://github.com/Darkskittlz/ModelPortfolio/blob/main/src/assets/images/modelIMG%20(17).jpg?raw=true" />
                    <img src="https://github.com/Darkskittlz/ModelPortfolio/blob/main/src/assets/images/modelIMG%20(16).jpg?raw=true" />
                    <img src="https://github.com/Darkskittlz/ModelPortfolio/blob/main/src/assets/images/modelIMG%20(8).jpg?raw=true" />
                    <img id="portrait" src="https://github.com/Darkskittlz/ModelPortfolio/blob/main/src/assets/images/modelIMG%20(6).jpg?raw=true" />
                    <img id="portrait" src="https://github.com/Darkskittlz/ModelPortfolio/blob/main/src/assets/images/modelIMG%20(5).jpg?raw=true" />
                    <img id="portrait" src="https://github.com/Darkskittlz/ModelPortfolio/blob/main/src/assets/images/modelIMG%20(7).jpg?raw=true" />
                </ImageGridContainer>
                <br />
                <SocialGridContainer>
                    <SocialContainer>
                        <a href="https://instagram.com/Darkskiiittles" target="_blank"><img src={insta} /></a>
                        {/* <a href="https://www.freepik.com/icons/instagram">Icon by Pixel perfect</a> */}
                        <ChakraModal />
                        <a href="https://tiktok.com/@darkskiiittles" target="_blank"><img src={tiktok} /></a>
                        {/* <a href="https://www.freepik.com/icons/instagram">Icon by Pixel perfect</a> */}
                    </SocialContainer>
                </SocialGridContainer>
            </>
        )
    }
}

