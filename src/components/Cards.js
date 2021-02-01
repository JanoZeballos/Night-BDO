import React from 'react'
import { Link } from 'react-router-dom'
import './Cards.css'
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

function Cards() {

    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: false,
      });
    
    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
        /*console.log(state.checkedB);*/
    };

    const none = {
        display: 'none'
    }

    const grayfilter = {
        filter: 'grayscale(100%) blur(4px)'
    };

    return (
        <>
        <FormGroup className='btn_onoff'>
            <FormControlLabel control={
            <Switch checked={state.checkedB} onChange={handleChange} name="checkedB" color="primary" />
            }
            label="Mostrar Informacion"
            />
        </FormGroup>
        <div className='titles-container'>
            <h1 className='title'>Informacion</h1>
            <div className="fade_line"></div> 
            <p className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
        {/*
        <div className='cards-container-mk' id='cards'>
            <ul className="cards">
                <li className="cards_item">
                    <Link to='/' onClick={ (event) => event.preventDefault() }>
                    <div className="card">
                        <h2 className='title_prox'>BLACK MARKET</h2>
                        <img className='card_background' src='images/cards/market.jpg' alt='Card_4' style={grayfilter} />
                        <div className={state.checkedB ? 'card_content_nohover' : 'card_content'} style={none}>
                            <h1 className='card_title'>Mercado Negro</h1>
                            <p className="card_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                        </div>
                    </div>
                    </Link>
                </li>
            </ul>
        </div>
        */}
        <div className='cards-container' id='cards'>
            <ul className="cards">
                <li className="cards_item">
                    <Link to='/Oceano'>
                    <div className="card">
                        <img className='card_background' src='images/cards/oceano.png' alt='Card_1' />
                        <div className={state.checkedB ? 'card_content_nohover' : 'card_content'}>
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
                        <div className={state.checkedB ? 'card_content_nohover' : 'card_content'}>
                            <h1 className='card_title'>Night</h1>
                            <p className="card_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                        </div>
                    </div>
                    </Link>
                </li>
                <li className="cards_item">
                    <Link to='/Life'>
                    <div className="card">
                        <img className='card_background' src='images/cards/life.jpg' alt='Card_3' />
                        <div className={state.checkedB ? 'card_content_nohover' : 'card_content'}>
                            <h1 className='card_title'>Life</h1>
                            <p className="card_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                        </div>
                    </div>
                    </Link>
                </li>
                <li className="cards_item">
                    <Link to='/' onClick={ (event) => event.preventDefault() }>
                    <div className="card">
                        <h2 className='title_prox'>PROXIMAMENTE</h2>
                        <img className='card_background' src='images/night/2020-06-29_1644308039.png' alt='Card_4' style={grayfilter} />
                        <div className={state.checkedB ? 'card_content_nohover' : 'card_content'} style={none}>
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
