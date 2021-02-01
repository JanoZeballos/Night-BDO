import React from 'react'
import { Link } from 'react-router-dom'
import './Cards.css'

function Cards() {

    return (
        <>
        <div className='container_card'>
            <h1 className='title_card_3'>Life</h1>
            <div className="fade_line_oc">
                <img className='line-oc' src='images/logo_line.png' alt='Line' />
            </div>
            <div className='cards-container-oc' id='cards'>
                <ul className="cards">
                    <li className="cards_item">
                        <Link to='/E404'>
                        <div className="card">
                            <img className='card_background' src='images/life/alquimia.jpeg' alt='Card_1' />
                            <div className="card_content">
                                <h1 className='card_title'>Alquimia</h1>
                                <p className="card_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                            </div>
                        </div>
                        </Link>
                    </li>
                    <li className="cards_item">
                        <Link to='/E404'>
                        <div className="card">
                            <img className='card_background' src='images/life/caza.jpg' alt='Card_2' />
                            <div className="card_content">
                                <h1 className='card_title'>Caza</h1>
                                <p className="card_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                            </div>
                        </div>
                        </Link>
                    </li>
                    <li className="cards_item">
                        <Link to='/E404'>
                        <div className="card">
                            <img className='card_background' src='images/life/cocina.png' alt='Card_3' />
                            <div className="card_content">
                                <h1 className='card_title'>Cocina</h1>
                                <p className="card_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                            </div>
                        </div>
                        </Link>
                    </li>
                    <li className="cards_item">
                        <Link to='/E404'>
                        <div className="card">
                            <img className='card_background' src='images/life/comercio.jpg' alt='Card_4' />
                            <div className="card_content">
                                <h1 className='card_title'>Comercio</h1>
                                <p className="card_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                            </div>
                        </div>
                        </Link>
                    </li>
                    <li className="cards_item">
                        <Link to='/E404'>
                        <div className="card">
                            <img className='card_background' src='images/life/entrenar.jpg' alt='Card_5' />
                            <div className="card_content">
                                <h1 className='card_title'>Entrenar</h1>
                                <p className="card_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                            </div>
                        </div>
                        </Link>
                    </li>
                    <li className="cards_item">
                        <Link to='/E404'>
                        <div className="card">
                            <img className='card_background' src='images/life/pesca.jpg' alt='Card_6' />
                            <div className="card_content">
                                <h1 className='card_title'>Pesca</h1>
                                <p className="card_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                            </div>
                        </div>
                        </Link>
                    </li>
                    <li className="cards_item">
                        <Link to='/E404'>
                        <div className="card">
                            <img className='card_background' src='images/life/procesar.jpg' alt='Card_7' />
                            <div className="card_content">
                                <h1 className='card_title'>Procesar</h1>
                                <p className="card_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                            </div>
                        </div>
                        </Link>
                    </li>
                    <li className="cards_item">
                        <Link to='/E404'>
                        <div className="card">
                            <img className='card_background' src='images/life/recoleccion.jpeg' alt='Card_8' />
                            <div className="card_content">
                                <h1 className='card_title'>Recoleccion</h1>
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
