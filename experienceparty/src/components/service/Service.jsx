import React from 'react'
import './Service.css'
import gallery5 from '../../assets/gallery5.jpg'

function ServiceSection() {
  return (
    <section className="service section" id="service">
        <div className="service__media">
            <img src={gallery5} alt="gallery5" className="service__img" />
        </div>
        <div className="service__container container">
            <div className='service__info'>
                <div className="service__titles">
                    <h1 className="service__title alt__title">
                        What's Experience Party<span className='accent'>?</span>
                    </h1>
                </div>
                <div className="separator__container">
                    <div className="separator"></div>
                </div>
                <div className="service__subheaders">
                    <p className="service__subheader">
                        We're a <span className="accent">Pubcrawl</span>, a group of persons that guides you through bars and clubs in <span className="accent">Madrid, Spain</span> so you don't lose anything!
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ServiceSection