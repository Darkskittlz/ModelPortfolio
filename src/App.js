import './Styles/App.css';
import React from 'react';
import Layout from './components/layouts/article';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Homepage from './components/Homepage';
import Navbar from './components/navbar';


const NavContainer = styled.div`
    width: 100%;
    justify-content: center;
    z-index: 2;
    
    @media (max-width: 960px){
        width: 50%;
        margin-left: 12%;
        z-index: 2;
        position: relative;
    }
`

const App = ({ Component, pageProps, router }) => {
  return (
      <div className="app">
          <div className='main'>
                <Layout>
                <NavContainer>
                    <Navbar />
                </NavContainer>
                  <div className='routes'>
                      <Routes>
                            <Route path='/' element={<Homepage />} />                            
                      </Routes>                       
                  </div>
              </Layout>
          </div>
      </div>
  )
}

export default App;
