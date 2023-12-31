import React, { useState } from 'react'
import './Navbar.css'
import {CgClose, CgMenu} from 'react-icons/cg'
import logo from '../../assets/small_logo.png'

function Navbar() {
    // toggle menu: for closing or opening menu when clicking
    const[nav, setNav] = useState(false)
    function toggle() { setNav(!nav) }  // const toggle = () => setNav(!nav)

    // change nav color when scrolling
    const [color, setColor] = useState(false)
    function changeColor() {
        if (window.scrollY >= 620 & window.scrollY <= 1200) {
            setColor(true)
        } else if (window.scrollY >= 3100) {
            setColor(true)
        } else {
            setColor(false)
        }
    }
    window.addEventListener('scroll', changeColor)
    return (
        <header className="header" id="header">
        <nav className="nav container">
            <div className={`nav__menu ${nav ? 'show-menu': ''}`} id="nav-menu" >
                <ul className="nav__list" id="nav__list">
                    <li className="nav__item hide"> 
                        <a href="#home" onClick={toggle} className={`nav__link ${color? 'scrolling-font-color': ''}`}>
                            Experience
                        </a>
                    </li>
                    <li className="nav__item"> 
                        <a href="#about" onClick={toggle} className={`nav__link ${color? 'scrolling-font-color': ''}`}>
                            Party
                        </a>
                    </li>
                </ul>
            </div>
            <a href="#service" alt="logo" className="nav__logo" id="logo1">
                <img src={logo} className='logo'></img>
            </a>
            {/* <a href="#" alt="logo" className="nav__logo nav__logo-hidden" id="logo2">
                <img src={logo} className='logo'></img>
            </a> */}

            {/* conditional */}
            <div className={`nav__menu ${nav ? 'show-menu': ''}`} id="nav-menu" >
                <ul className="nav__list" id="nav__list">
                    <li className="nav__item hide"> 
                        <a href="#pricing" onClick={toggle} className={`nav__link ${color? 'scrolling-font-color': ''}`}>
                            Offers
                        </a>
                    </li>
                    <li className="nav__item"> 
                        <a href="#footer" onClick={toggle} className={`nav__link ${color? 'scrolling-font-color': ''}`}>
                            Contact
                        </a>
                    </li>
                </ul>

                <div onClick={toggle} className="nav__close" id="nav-close">
                    <CgClose />
                </div>
            </div>

            <div onClick={toggle} className="nav__toggle" id="nav-toggle">
                <CgMenu/>
            </div>
        </nav>
    </header>











        // <header className="header" id="header">
        //     <nav className='navbar container'>
        //         <div className='logo__div'>
        //             <div className='logo'></div>
        //         </div>
        //         <ul className='nav__menu' id='nav-menu'>
        //             <li>Home</li>
        //             <li>About</li>
        //             <li>Services</li>
        //             <li>Contact</li>
        //         </ul>
        //         <div className='nav__toggle'>
        //             <FaBars />
        //         </div>
        //     </nav>
        // </header>
    )
}

export default Navbar