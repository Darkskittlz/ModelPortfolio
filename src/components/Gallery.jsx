import React from 'react';
import ImageGallery from 'react-image-gallery';
import { ImageGridContainer } from '../Styles/Styles';
import modelIMG1 from "../assets/images/modelIMG (1).jpg"
import modelIMG2 from "../assets/images/modelIMG (2).jpg"
import modelIMG3 from "../assets/images/modelIMG (3).jpg"
import modelIMG4 from "../assets/images/modelIMG (4).jpg"
import modelIMG5 from "../assets/images/modelIMG (5).jpg"
import modelIMG6 from "../assets/images/modelIMG (6).jpg"
import modelIMG7 from "../assets/images/modelIMG (7).jpg"
import modelIMG8 from "../assets/images/modelIMG (8).jpg"
import modelIMG9 from "../assets/images/modelIMG (9).jpg"
import modelIMG10 from "../assets/images/modelIMG (10).jpg"
import modelIMG11 from "../assets/images/modelIMG (11).jpg"
import modelIMG12 from "../assets/images/modelIMG (12).jpg"
import modelIMG13 from "../assets/images/modelIMG (13).jpg"
import modelIMG14 from "../assets/images/modelIMG (14).jpg"
import modelIMG15 from "../assets/images/modelIMG (15).jpg"
import modelIMG16 from "../assets/images/modelIMG (16).jpg"
import modelIMG17 from "../assets/images/modelIMG (17).jpg"
import modelIMG18 from "../assets/images/modelIMG (18).jpg"
import modelIMG19 from "../assets/images/modelIMG (19).jpg"
import modelIMG20 from "../assets/images/modelIMG (20).jpg"

export class MyGallery extends React.Component {
    render() {
        return (
            <ImageGridContainer>
                <img src={modelIMG1} />
                <img src={modelIMG3} />
                <img src={modelIMG4} />
                <img src={modelIMG12} />
                <img src={modelIMG11} />
                <img src={modelIMG14} />
                <img src={modelIMG19} />
                <img src={modelIMG20} />
                <img src={modelIMG13} />
                <img src={modelIMG10} />
                <img src={modelIMG9} />
                <img src={modelIMG18} />
                <img src={modelIMG15} />
                <img src={modelIMG17} />
                <img src={modelIMG16} />
                <img src={modelIMG8} />
                <img src={modelIMG5} />
                <img src={modelIMG6} />
                <img src={modelIMG7} />
                <img src={modelIMG2} />
            </ImageGridContainer>
        )
    }
}