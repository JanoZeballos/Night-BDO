import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='nav'>
          <div className='bars' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                    Inicio
                </Link>
                </li>
                <li>
                <div className="nav-links dropdown">
                  <button className="dropbtn">Informacion</button>
                  <div className="dropdown-content">
                    <Link to="/Oceano">Oceano</Link>
                    <Link to="/Night">Night</Link>
                    <Link to="/Life">Life</Link>
                  </div>
                </div>
                </li>
                <li>
                <a href='https://discord.gg/2aWDvV5' className='nav-links' id='discord' onClick={closeMobileMenu}>
                    Discord
                </a>
                </li>
            </ul>
      </nav>
    </>
  );
}

export default Navbar;