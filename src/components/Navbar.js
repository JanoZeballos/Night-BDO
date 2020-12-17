import React, { useState, useEffect } from 'react';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

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
                <a href='#galeria' className='nav-links' onClick={closeMobileMenu}>
                    Galeria
                </a>
                </li>
                <li>
                <a href='#guias' className='nav-links' onClick={closeMobileMenu}>
                    Guias
                </a>
                </li>
            </ul>
      </nav>
    </>
  );
}

export default Navbar;