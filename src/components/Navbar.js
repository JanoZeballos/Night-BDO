import React, { useState, useEffect } from 'react';
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
                <a href='#inicio' className='nav-links' onClick={closeMobileMenu}>
                    Inicio
                </a>
                </li>
                <li>
                <a href='#cards' className='nav-links' onClick={closeMobileMenu}>
                    Informacion
                </a>
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