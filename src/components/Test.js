import React from 'react'
import { Link } from 'react-router-dom'
import './Test.css'

function Cards() {
    return (
        <>
        <div className='titles-container'>
            <h1 className='title'>Test</h1>
            <div className="fade_line"></div> 
            <p className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
        <div className='cards-container' id='cards'>
            <ul className="cards">
                <li className="cards_item">
                    <h1 className='title_card'>Oceano</h1>
                    <Link to='/Khan'>
                    <div className="card">
                        <div className='parent'>
                            <img className='card_background' src='images/vell.jpg' alt='Card_1' />
                            <div className='child child-1'>
                                <img className='card_background' src='images/night.png' alt='Card_2' />
                            </div>
                            <div className='child child-2'>
                                <img className='card_background' src='images/khan.png' alt='Card_3' />
                                <div className="card_content">
                                    <h2 className="card_title">KHAN</h2>
                                    <p className="card_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    </Link>
                </li>
                <li className="cards_item">
                    <h1 className='title_card_2'>Night</h1>
                    <Link to='/Khan'>
                    <div className="card">
                        <div className='parent'>
                            <img className='card_background' src='images/khan.png' alt='Card_1' />
                            <div className='child child-1'>
                                <img className='card_background' src='images/vell.jpg' alt='Card_2' />
                            </div>
                            <div className='child child-2'>
                                <img className='card_background' src='images/night.png' alt='Card_3' />
                                <div className="card_content">
                                    <h2 className="card_title">NIGHT</h2>
                                    <p className="card_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    </Link>
                </li>
                <li className="cards_item">
                    <h1 className='title_card_3'>Life</h1>
                    <Link to='/Khan'>
                    <div className="card">
                        <div className='parent'>
                            <img className='card_background' src='images/khan.png' alt='Card_1' />
                            <div className='child child-1'>
                                <img className='card_background' src='images/night.png' alt='Card_2' />
                            </div>
                            <div className='child child-2'>
                                <img className='card_background' src='images/vell.jpg' alt='Card_3' />
                                <div className="card_content">
                                    <h2 className="card_title">VELL</h2>
                                    <p className="card_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    </Link>
                </li>
            </ul>
        </div>
        </>
    )
}

export default Cards
