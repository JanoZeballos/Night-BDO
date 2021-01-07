import React from 'react'
import './Herosection.css'

function Herosection() {
    return (
        <div className='container' id='inicio'>
            <div className='hero-cont'>
                <img className='background' src='/images/2020-06-29_1644308039.png' alt='Background' />
            </div>
            <div className='content'>
                <div className='items'>
                    <h1>NIGHT</h1>
                    <p>Black Desert Online</p>
                    <div className="line"></div>
                </div>
            </div>
        </div>
    )
}

export default Herosection
