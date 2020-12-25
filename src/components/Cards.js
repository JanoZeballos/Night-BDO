import React from 'react'
import './Cards.css'

function Cards() {
    return (
        <>
        <div className='titles-container'>
            <h1 className='title'>Informacion</h1>
            <div class="fade_line"></div> 
            <p className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
        <div className='cards-container' id='cards'>
            <ul className="cards">
                <li className="cards_item">
                    <a href='/'>
                    <div className="card">
                        <img className='card_background' src='/images/khan.png' alt='Card_1' />
                        <div className="card_content">
                            <h2 className="card_title">KHAN</h2>
                            <p className="card_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                        </div>
                    </div>
                    </a>
                </li>
                <li className="cards_item">
                    <a href='/'>
                    <div className="card">
                        <img className='card_background' src='/images/night.png' alt='Card_3' />
                        <div className="card_content">
                            <h2 className="card_title">NIGHT</h2>
                            <p className="card_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                        </div>
                    </div>
                    </a>
                </li>
                <li className="cards_item">
                    <a href='/'>
                    <div className="card">
                        <img className='card_background' src='/images/vell.jpg' alt='Card_2' />
                        <div className="card_content">
                            <h2 className="card_title">VELL</h2>
                            <p className="card_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                        </div>
                    </div>
                    </a>
                </li>
            </ul>
        </div>
        </>
    )
}

export default Cards
