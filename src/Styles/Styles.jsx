import styled, { keyframes } from 'styled-components';

export const PageContainer = styled.div`
  height: 100%;
  width: 100%;
  background-color: black;
`

export const BodyContainer = styled.div`
  display: flex;
  width: 72%;
  margin-left: 15%;
  margin-right: 15%;
  flex-direction: column;
  justify-content; center;
  z-index: 999;
  position: fixed;
  top: 0; 
  overflow-y: scroll;
  padding: 20px;
  padding-bottom: 40px;

  @media only screen and (max-width: 1440px){
    padding-bottom: 144px;
  }

  @media only screen and (max-width: 1024px){
    width: 100%;
    margin-left: 0%;
    height: 88vh;
  }

  @media screen and (max-width: 960px) {
      width: 100%;
      height: 105vh;
      margin-left: -25px;
      margin-top: 20px;
  }
`

export const NavContainer = styled.div`
    width: 100%;
    margin-top: 0px;
    border-radius: 10px;
    padding: 10px;
    flex-direction: row;
    grid-gap: 20px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    display: flex;
    box-shadow: 0 0 10px #09DEEE; 

a

    @media screen and (max-width: 960px) {
      margin-top: 40px;
      justify-content: center;
      margin-bottom: -20px;
    }
`

export const Animation = keyframes`
    0% { box-shadow: 0 0 10px #09EE9A; } 
    30% { box-shadow: 0 0 30px rgba(222, 59, 208, 1);  } 
    50% { box-shadow: 0 0 20px #09DEEE;  } 
    70% { box-shadow: 0 0 30px rgba(102, 37, 177, 1);  } 
    100% { box-shadow: 0 0 30px rgba(102, 37, 177, 1);  } 
`

export const IntroGridContainer = styled.div`
    justify-content: center;
    display: flex;
    margin-top: 20px;

    @media screen and (max-width: 960px) {
      margin-top: 0px;
    }
`

export const IntroContainer = styled.div`
    height: 100px;
    width: 350px;
    align-items: center;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    color: white;
    border-radius: 20px;
    backdrop-filter: blur(50px);
    animation-name: ${Animation};
    animation-duration: 4s;
    animation-iteration-count: infinite;
    background: rgb(9,9,121);
    background: linear-gradient(165deg, rgba(9,9,121,1) 0%, rgba(1,156,188,1) 100%);

    div {
        width: 500px;
    }

    span {
      color: #53b9ff;
    }

    h1 {
      padding: 0px;
      border-radius: 10px;

      text-align: center;
      font-size: 30px;
      color: white;
    }

    @media screen and (max-width: 960px) {
      width: 90%;
      height: 70px;

      h1 {
        flex-direction: column;
        font-size: 18px;
      }
    }
`

export const GridContainer = styled.div`
  margin-top: 10px;
  margin-bottom: 40px;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 960px){
    height: 72vh;
    overflow-y: scroll;
  }

  @media only screen and (max-width: 430px){
    height: 74vh;
  }
`

export const Grid2Container = styled.div`
  display: flex;
  position: relative;
  z-index:999;
  width: 20%;
  justify-content: center;
  align-items: flex-end;
`
export const ImageGridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  flex-direction: column;
  height: 64vh;
  object-fit: cover;

  img {
    object-fit: cover;
    height: 25vh;
  }

  @media only screen and (max-width: 1759px){
    height: 50vh;
  }

  @media only screen and (max-width: 1024px){
    margin-left: 0px;
  }

  @media only screen and (max-width: 768px){
    grid-template-columns: 1fr 1fr;
    
    img {
      height: 27vh;
    }
  }

  @media only screen and (max-width: 430px){
    width: 100%;
    grid-template-columns: 1fr;
    margin-top: -159px;
    margin-left: 3%;
    
    img {
      border-radius: 10px;
      margin-bottom: 1px;
      height: 24vh;
      width: 96.5%;
    }
  }
`

export const SocialGridContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-bottom: 20px;
  bottom: 0;
  border-radius: 10px;
  position: fixed;
  
  img {
    height: 40px;
    margin-left: 20px;
    margin-right: 20px;
  }

  @media only screen and (max-width: 960px){
    margin-bottom: 10px;
  }

`

export const SocialContainer = styled.div`
  backdrop-filter: blur(20px);
  background-color: #1d1d1d;
  padding: 15px 8px 15px 8px;
  border-radius: 10px;
`