import React from 'react'
import './Contact.css'

function ContactSection() {
  return (
    <section className="contact section">
        <div className="contact container">
            <div className="contact__info">
                <h1 className="contact__title alt__title">
                    Find Us<span className='accent'>.</span>
                </h1>
                <div className="separator__container">
                    <div className="separator"></div>
                </div>
                <div className="contact__subheaders">
                    <h2 className="contact__subheader service__subheader">
                        Our meeting point. You'll find us here<span className='accent'> at 22:00</span> (10:00pm) in <span className='accent'>Monna Lisa</span> 
                    </h2>
                </div>
            </div>
            <div className='contact__map'>
                <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.6974230182896!2d-3.7038931242836832!3d40.4155533557113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422880f5feb7d5%3A0x82a979659757d033!2sMonnalisa%20Madrid!5e0!3m2!1sen!2ses!4v1692457208051!5m2!1sen!2ses" 
                    width="600" 
                    height="450" 
                    style={{ border:"0" }} 
                    allowfullscreen="" 
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </div>
    </section>
  )
}

export default ContactSection