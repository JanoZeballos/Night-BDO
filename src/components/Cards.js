import React from 'react'
import './Cards.css'

function Gallery() {
    return (
        <div className='cards-container' id='cards'>
            <ul className="cards">
                <li className="cards_item">
                    <div className="card">
                        <img className='background' src='/images/background.jpg' alt='Background' />
                        <div className="card_content">
                            <h2 className="card_title">KHAN</h2>
                            <p className="card_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
                        </div>
                    </div>
                </li>
                <li className="cards_item">
                    <div className="card">
                        <div className="card_content">
                            <h2 className="card_title">VELL</h2>
                            <p className="card_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
                        </div>
                    </div>
                </li>
                <li className="cards_item">
                    <div className="card">
                        <div className="card_content">
                            <h2 className="card_title">NIGHT</h2>
                            <p className="card_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Gallery
