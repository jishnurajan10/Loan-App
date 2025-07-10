import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/Logo1.png'
import { Link } from 'react-scroll';
import menuicon from '../../assets/menu-icon.png'
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';


const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 60 ? setSticky(true) : setSticky(false);
    })
  }, []);

  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  }

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt="" className='logo' />

      <ul className={mobileMenu ? 'mobile-menu-visible' : 'hide-mobile-menu'}>
        <li><ScrollLink to="hero" smooth={true} offset={0} duration={500}>HOME</ScrollLink></li>
        <li><ScrollLink to="about" smooth={true} offset={-140} duration={500}>ABOUT US</ScrollLink></li>
        <li><ScrollLink to="contact" smooth={true} offset={-230} duration={500}>CONTACT US</ScrollLink></li>
        <li><RouterLink to="/login" className="btn">LOG IN</RouterLink></li>
        <li><RouterLink to="/signup" className="btn">SIGN UP</RouterLink></li>
      </ul>

      <img src={menuicon} alt="" className='menu-icon' onClick={toggleMenu} />
    </nav>
  )
}

export default Navbar
