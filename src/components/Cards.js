import React from 'react'
import './Cards.css'

function Gallery() {
    return (
        <div className='cards-container' id='cards'>
            <ul className="cards">
                <li className="cards_item">
                    <a href='/'>
                    <div className="card">
                        <img className='card_background' src='/images/khan.png' alt='Background' />
                        <div className="card_content">
                            <h2 className="card_title">KHAN</h2>
                            <p className="card_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
                        </div>
                    </div>
                    </a>
                </li>
                <li className="cards_item">
                    <a href='/'>
                    <div className="card">
                        <img className='card_background' src='/images/vell.jpg' alt='Background' />
                        <div className="card_content">
                            <h2 className="card_title">VELL</h2>
                            <p className="card_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
                        </div>
                    </div>
                    </a>
                </li>
                <li className="cards_item">
                    <a href='/'>
                    <div className="card">
                        <img className='card_background' src='/images/night.png' alt='Background' />
                        <div className="card_content">
                            <h2 className="card_title">NIGHT</h2>
                            <p className="card_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
                        </div>
                    </div>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Gallery
