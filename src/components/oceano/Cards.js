import React from 'react'
import { Link } from 'react-router-dom'
import './Cards.css'

function Cards() {

    return (
        <>
        <div className='titles-container'>
            <h1 className='title_card'>Oceano</h1>
            <div className="fade_line_oc">
                <img className='line-oc' src='images/logo_line.png' alt='Line' />
            </div>
        </div>
        <div className='cards-container-oc' id='cards'>
            <ul className="cards">
                <li className="cards_item">
                    <Link to='/Khan'>
                    <div className="card">
                        <img className='card_background' src='images/oceano/khan.png' alt='Card_2' />
                        <div className="card_content">
                            <h1 className='card_title'>Khan</h1>
                            <p className="card_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                        </div>
                    </div>
                    </Link>
                </li>
                <li className="cards_item">
                    <Link to='/'>
                    <div className="card">
                        <img className='card_background' src='images/oceano/bartering.jpg' alt='Card_1' />
                        <div className="card_content">
                            <h1 className='card_title'>Intercambios</h1>
                            <p className="card_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                        </div>
                    </div>
                    </Link>
                </li>
                <li className="cards_item">
                    <Link to='/'>
                    <div className="card">
                        <img className='card_background' src='images/oceano/vell.jpg' alt='Card_3' />
                        <div className="card_content">
                            <h1 className='card_title'>Vell</h1>
                            <p className="card_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
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
