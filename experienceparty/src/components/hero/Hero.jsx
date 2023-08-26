/*rfce*/
import React from 'react'
import './Hero.css'
import {FaFacebook, FaEnvelope, FaWhatsapp, FaPhoneAlt, FaTicketAlt} from 'react-icons/fa'
import hero1 from '../../assets/wallpaper1.jpg'
import hero2 from '../../assets/wallpaper2.jpg'
// import delivery from '../../assets/red_house.png'
// import Fade from 'react-reveal/Fade';

function HeroSection() {
    return (
        <section className='hero' id='home'>
            <div className='hero__images'>
                <img src={hero1} className='top'></img>
                <img src={hero2} className='bottom'></img>
            </div>

            <div className='hero__container container'>
                <div className='hero__titles'>
                    {/* <Fade left> */}
                    <h1 className='hero__title'>A pubcrawl <br></br><span className="primary-color-animated">Experience</span></h1>
                    <h1 className='hero__subtitle'>with the <span className="primary-color-animated">Party</span> <br></br>people.</h1>
                    {/* </Fade> */}
                </div>
                <div className='hero__buttons'>
                    <a href="#pricing" className='hero-button primary-button button'>
                        <FaTicketAlt />
                        Buy Ticket
                    </a>
                </div>
                
                {/* <div className='hero__socials'>
                    <a href="https://www.facebook.com/WN-Garage-duo-auto-repair-103639939067239" className='facebook'>
                        <FaFacebook />
                    </a>
                    <a href="https://api.whatsapp.com/send?phone=13054388987" className='whatsapp'>
                        <FaWhatsapp />
                    </a>
                    <a href="mailto:duowngarage@gmail.com" className='email'>
                        <FaEnvelope />
                    </a>
                </div> */}
                {/* </Fade> */}
            </div>
        </section>
    )
}

export default HeroSection