import React from 'react'
import './Pricing.css'
import {FaHandPointRight, FaTicketAlt} from 'react-icons/fa'

function PricingSection() {
    return (
        <section className="pricing section" id="pricing">
            <h1 className="pricing__title alt__title">Cheap drinks<span className='accent'>?</span> We got you<span className='accent'>.</span></h1>
            <div className="card__container grid">
                <article className="card__article grid">
                    <header className="card__header">
                        <h3 className="header__subheader">Basic</h3>
                        <h2 className="header__title">Students</h2>
                    </header>
                    <ul className="card__list grid">
                        <il className="card__item">
                            <i className="card__icon">
                                <FaHandPointRight/>
                            </i>
                            <p className="card__description">
                                Just 1 person
                            </p>
                        </il>
                        <il className="card__item">
                            <i className="card__icon">
                                <FaHandPointRight/>
                            </i>
                            <p className="card__description">
                                No drinks
                            </p>
                        </il>
                        <il className="card__item">
                            <i className="card__icon">
                                <FaHandPointRight/>
                            </i>
                            <p className="card__description">
                                Entrance to 2 bars and 1 club
                            </p>
                        </il>

                    </ul>
                    <div className="card__buttons">
                        <a href="#pricing" className='hero-button primary-button button'>
                            <FaTicketAlt />
                            Buy Ticket
                        </a>                        
                    </div>
                </article>
                <article className="card__article grid">
                    <header className="card__header">
                        <h3 className="header__subheader">Most Popular</h3>
                        <h2 className="header__title">Standard</h2>
                    </header>
                    <ul className="card__list grid">
                        <il className="card__item">
                            <i className="card__icon">
                                <FaHandPointRight/>
                            </i>
                            <p className="card__description">
                                Just 1 person
                            </p>
                        </il>
                        <il className="card__item">
                            <i className="card__icon">
                                <FaHandPointRight/>
                            </i>
                            <p className="card__description">
                                1 shot in every bar
                            </p>
                        </il>
                        <il className="card__item">
                            <i className="card__icon">
                                <FaHandPointRight/>
                            </i>
                            <p className="card__description">
                                Entrance to 2 bars and 1 club
                            </p>
                        </il>

                    </ul>
                    <div className="card__buttons">
                        <a href="#pricing" className='hero-button primary-button button'>
                            <FaTicketAlt />
                            Buy Ticket
                        </a>                        
                    </div>
                </article>
                <article className="card__article grid">
                    <header className="card__header">
                        <h3 className="header__subheader">Full Party</h3>
                        <h2 className="header__title">Experience</h2>
                    </header>
                    <ul className="card__list grid">
                        <il className="card__item">
                            <i className="card__icon">
                                <FaHandPointRight/>
                            </i>
                            <p className="card__description">
                                Up to 5 persons
                            </p>
                        </il>
                        <il className="card__item">
                            <i className="card__icon">
                                <FaHandPointRight/>
                            </i>
                            <p className="card__description">
                                Bottle and shots
                            </p>
                        </il>
                        <il className="card__item">
                            <i className="card__icon">
                                <FaHandPointRight/>
                            </i>
                            <p className="card__description">
                                Entrace to 2 bar and 1 club
                            </p>
                        </il>
                    </ul>
                    <div className="card__buttons">
                        <a href="#pricing" className='hero-button primary-button button'>
                            <FaTicketAlt />
                            Buy Ticket
                        </a>                        
                    </div>
                </article>
            </div>
        </section>
    )
}

export default PricingSection