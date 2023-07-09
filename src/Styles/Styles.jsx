import styled, { keyframes } from 'styled-components';

export const BodyContainer = styled.div`
    display: flex;
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
    flex-direction: column;
    justify-content; center;
    z-index: 999;
    position: fixed;
    top: 0; 
    overflow-y: scroll;
    padding: 20px;
    padding-bottom: 40px;


    @media screen and (max-width: 960px) {
        width: 95%;
        height: 100vh;
        margin-left: 2.5%;
        margin-top: -50px;
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
`

export const IntroContainer = styled.div`
    height: 100px;
    width: 350px;
    align-items: center;
    display: flex;
    flex-direction: column;
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
        height: 200px;
        width: 500px;
    }

    span {
      color: #53b9ff;
    }

    h1 {
      padding: 0px;
      border-radius: 10px;
      margin-top: 20px;
      margin-bottom: -37px;
      text-align: center;
      font-size: 30px;
      color: white;
    }

    @media screen and (max-width: 960px) {
      width: 90%;
      height: 70px;
      margin-left: 2%;
      display: none;

      h1 {
        flex-direction: column;
        font-size: 18px;
        margin-bottom: -37px;
      }
    }
`

export const GridContainer = styled.div`
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
  flex-direction: column;
  display: flex;
  align-items: center;

  @media only screen and (max-width: 960px){
    height: 80vh;
    overflow-y: scroll;
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
  display: block;
  flex-direction: column;
  height: 65vh;
  object-fit: cover;

  img {
    object-fit: cover;
    height: 25vh;
  }
`