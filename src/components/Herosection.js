import React from 'react'
import './Herosection.css'

function Herosection() {
    return (
        <div className='container' id='inicio'>
            <div className='hero-cont'>
                <img className='background' src='images/hero/background.jpg' alt='Background' />
            </div>
            <div className='content'>
                <div className='items'>
                <div className="animation-wrapper">
                    <div className="particle particle-1"></div>
                    <div className="particle particle-2"></div>
                    <div className="particle particle-3"></div>
                    <div className="particle particle-4"></div>
                </div>
                    <h1>NIGHT</h1>
                    <div className="line"></div>
                    <p>Black Desert Online</p>
                </div>
            </div>
        </div>
    )
}

export default Herosection
