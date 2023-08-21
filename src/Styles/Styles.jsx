import styled, { keyframes } from 'styled-components';


export const BodyContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content; center;
  align-items: center;
  z-index: 999;
  position: fixed;
  top: 0; 
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none; /* for Chrome, Safari, and Opera */
  }

  @media (max-width: 480px) {
    width: 95%;
    overflow-x: hidden; /* Stop horizontal scroll on screens <= 768px */
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

    @media (max-width: 1200px) {
      margin-top: 10px;
    }
  
    @media (max-width: 768px) {
      margin-top: 10px;
    }
  
    @media (max-width: 480px) {
      width: 50%;
      heigth: 80px;
      margin-top: 10px;
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
  margin-top: 10px;
  grid-template-columns: 33.5% 33.5% 33.5%;
  flex-direction: column;
  justify-items: center;
  grid-gap: 0px;
  height: 70vh;
  object-fit: cover;

  img {
    object-fit: cover;
    border-radius: 5px;
    margin: 2px;
    height: 35vh;
  }
  
  @media (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;

    img {
      height: 35vh;
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;

    img {
      height: 35vh;
    }
  }

  @media (max-width: 480px) {
    img {
      height: 25vh;
    }
  }
`

export const SocialGridContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 10px;
  border-radius: 10px;
  
  img {
    height: 45px;
    margin-top: 20px;
    margin-left: 20px;
    margin-right: 20px;
  }
  
  @media (max-width: 480px) {
    margin-bottom: 40px;
  }
  `

export const SocialContainer = styled.div`
  backdrop-filter: blur(20px);
  background-color: #1d1d1d;
  padding: 15px 8px 15px 8px;
  display: flex;
  border-radius: 10px;
`