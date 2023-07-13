import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './Styles/App.css'
import Homepage from './components/Homepage';


const App = () => {
    return (
        <div className="app">
            <div className='main'>
                <div className='routes'>
                    <Routes>
                        <Route path='/' element={<Homepage />} />                           
                    </Routes>
                </div>
            </div>
        </div>
    )
}

export default App
