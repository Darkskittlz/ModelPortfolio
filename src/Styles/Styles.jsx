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

  ::-webkit-scrollbar {
    display: none; /* for Chrome, Safari, and Opera */
}

  @media only screen and (max-width: 1440px){
    padding-bottom: 144px;
    height: 66vh;
  }

  @media only screen and (max-width: 1024px){
    width: 100%;
    margin-left: -18px;
    height: 66vh;
  }

  @media screen and (max-width: 960px) {
      width: 100%;
      height: 105vh;
      margin-left: -25px;
      margin-top: 20px;
  }

  @media screen and (max-width: 380px) {
    margin-top: 3px;
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

    @media screen and (max-width: 330px) {
      margin-top: -13px;
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

  @media only screen and (max-width: 425px){
    height: 73vh;
  }

  @media only screen and (max-width: 375px){
    margin-top: 8px;
    height: 75vh;
  }

  @media only screen and (max-width: 360px){
    height: 76vh;
  }

  @media only screen and (max-width: 330px){
    height: 98vh;
    margin-top: -187px;
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
    border-radius: 5px;
    margin: 2px;
    height: 25vh;
  }

  @media only screen and (max-width: 1759px){
    height: 50vh;
  }

  @media only screen and (max-width: 1024px){
    margin-left: 0px;
    margin: 0px;
    
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
    margin-top: -162px;
    margin-left: 3%;
    
    img {
      border-radius: 10px;
      margin-bottom: 1px;
      height: 34.2vh;
    }
  }

  @media only screen and (max-width: 380px){
    img {
      height: 25.8vh;
    }
  }

  @media only screen and (max-width: 375px){
    img {
      height: 30vh;
    }
  }

  @media only screen and (max-width: 360px){
    img {
      height: 29.2vh;
    }
  }

  @media only screen and (max-width: 330px){
    margin-left: 18px;
    margin-top: 30px;

    img {
      height: 22vh;
    }
  }

  @media only screen and (max-width: 320px){

    img {
      height: 25vh;
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

  @media only screen and (max-width: 1440px){
    width: 73%;
  }

  @media only screen and (max-width: 960px){
    margin-bottom: 10px;
  }

  @media only screen and (max-width: 320px){
    width: 328px;
    margin-bottom: 10px;
  }

`

export const SocialContainer = styled.div`
  backdrop-filter: blur(20px);
  background-color: #1d1d1d;
  padding: 15px 8px 15px 8px;
  border-radius: 10px;
`