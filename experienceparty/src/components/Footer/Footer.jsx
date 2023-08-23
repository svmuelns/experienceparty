import React from 'react'
import './Footer.css'
import footer from '../../assets/footer.jpg'
import {FaPhoneAlt, FaFacebook, FaWhatsapp, FaEnvelope} from 'react-icons/fa'

function FooterSection() {
  return (
    <footer className="footer section">
        <img src={footer} alt="party" className="footer-img"/>
        <div className="footer__container container">
            <h1 className="footer__title alt__title">
                Private event<span className="accent">?</span> Book now<span className="accent">.</span>
            </h1>
            <div className='hero__buttons'>
                <a href="#" className='footer__button hero-button primary-button button'>
                    <FaPhoneAlt />
                    Call Us
                </a>
            </div>
        </div>
        <div className='footer__div'>
                <div className='footer__infos'>
                    <div className='footer__info'>
                        <div className='footer__buttons'>
                            <a href="tel:305-438-8987" className='footer-button'>
                                <FaPhoneAlt />
                                Telephone
                            </a>
                            <a href="https://www.facebook.com/WN-Garage-duo-auto-repair-103639939067239" className='footer-button'>
                                <FaFacebook />
                                Facebook
                            </a>
                        </div>
                        <div className='footer__subheaders'>
                            <p className='button-subheader'>
                                000 00 00
                            </p>
                            <p className='button-subheader'>
                                Party Produce SLS
                            </p>
                        </div>
                    </div>
                    <div className='footer__info'>
                        <div className='footer__buttons'>
                            <a href="https://api.whatsapp.com/send?phone=13054388987" className='footer-button'>
                                <FaWhatsapp />
                                Whatsapp
                            </a>
                            <a href="mailto:duowngarage@gmail.com" className='footer-button'>
                                <FaEnvelope />
                                Email
                            </a>
                        </div>
                        <div className='footer__subheaders'>
                            <p className='button-subheader'>
                                +34 000 00 00
                            </p>
                            <p className='button-subheader'>
                                partyproducer@gmail.com
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <p id='madeby'>website made by <a href="http://linktr.ee/svmuelns" target="_blank">svmuelns</a></p>
    </footer>
  )
}

export default FooterSection