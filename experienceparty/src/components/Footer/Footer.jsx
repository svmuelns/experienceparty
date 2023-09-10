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
                <button className="pushable">
                    <a href="tel:+34692051943" className='footer__button front'>
                        <FaPhoneAlt />
                        Call Us
                    </a>
                </button>

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
                                +34 692051943
                            </p>
                            <p className='button-subheader'>
                                Party Producer SLS
                            </p>
                        </div>
                    </div>
                    <div className='footer__info'>
                        <div className='footer__buttons'>
                            <a href="https://api.whatsapp.com/send?phone=34692051943" className='footer-button'>
                                <FaWhatsapp />
                                Whatsapp
                            </a>
                            <a href="mailto:partyproducersls@gmail.com" className='footer-button'>
                                <FaEnvelope />
                                Email
                            </a>
                        </div>
                        <div className='footer__subheaders'>
                            <p className='button-subheader'>
                                +34 692051943
                            </p>
                            <p className='button-subheader'>
                                partyproducersls@gmail.com
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