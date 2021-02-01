import React from 'react'
import { Link } from 'react-router-dom'
import './Cards.css'

function Cards() {

    return (
        <>
        <div className='container_card'>
        <h1 className='title_card_2'>Night</h1>
        <div className="fade_line_oc">
            <img className='line-oc' src='images/logo_line.png' alt='Line' />
        </div>
        <div className='cards-container-oc' id='cards'>
            <ul className="cards">
                <li className="cards_item">
                    <Link to='/E404'>
                    <div className="card">
                        <img className='card_background' src='images/night/2020-06-29_1644308039.png' alt='Card_1' />
                        <div className="card_content">
                            <h1 className='card_title'>Night</h1>
                            <p className="card_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                        </div>
                    </div>
                    </Link>
                </li>
            </ul>
        </div>
        <div className="fade_line_oc">
            <img className='line-oc' src='images/logo_line.png' alt='Line' />
        </div>
        </div>
        </>
    )
}

export default Cards
