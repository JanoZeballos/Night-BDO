import React from 'react'
import { Link } from 'react-router-dom'
import './Cards.css'

function Cards() {

    return (
        <>
        <div className='titles-container'>
            <h1 className='title'>Informacion</h1>
            <div className="fade_line"></div> 
            <p className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
        <div className='cards-container' id='cards'>
            <ul className="cards">
                <li className="cards_item">
                {/*<h1 className='title_card'>Oceano</h1>*/}
                    <Link to='/Khan'>
                    <div className="card">
                        <img className='card_background' src='images/cards/oceano.png' alt='Card_1' />
                        <div className="card_content">
                            <h1 className='card_title'>Oceano</h1>
                            <p className="card_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                        </div>
                    </div>
                    </Link>
                </li>
                <li className="cards_item">
                    <Link to='/Night'>
                    <div className="card">
                        <img className='card_background' src='images/cards/night.jfif' alt='Card_2' />
                        <div className="card_content">
                            {/*<h1 className='title_card_2'>Night</h1>*/}
                            <h1 className='card_title'>Night</h1>
                            <p className="card_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                        </div>
                    </div>
                    </Link>
                </li>
                <li className="cards_item">
                    <Link to='/Vell'>
                    <div className="card">
                        <img className='card_background' src='images/cards/life.jpg' alt='Card_3' />
                        <div className="card_content">
                            {/*<h1 className='title_card_3'>Life</h1>*/}
                            <h1 className='card_title'>Life</h1>
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
