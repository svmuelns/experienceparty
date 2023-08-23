import React from 'react'
import './Pricing.css'
import {FaHandPointRight, FaTicketAlt} from 'react-icons/fa'
import {TbHandRock} from 'react-icons/tb'

function PricingSection() {
    return (
        <section className="pricing section" id="pricing">
            <h1 className="pricing__title alt__title">Cheap drinks<span className='accent'>?</span> We got you<span className='accent'>.</span></h1>
            <div className="separator__container">
                <div className="separator"></div>
            </div>
            <div className="card__container grid">
                <article className="card__article grid">
                    <header className="card__header">
                        <h1 className="header__amount">10€</h1>
                        <h3 className="header__subheader">Basic</h3>
                        <h2 className="header__title">Students</h2>
                    </header>
                    <ul className="card__list grid">
                        <il className="card__item">
                            <i className="card__icon">
                                <TbHandRock/>
                            </i>
                            <p className="card__description">
                                Just 1 person
                            </p>
                        </il>
                        <il className="card__item">
                            <i className="card__icon">
                                <TbHandRock/>
                            </i>
                            <p className="card__description">
                                A shot in every place
                            </p>
                        </il>
                        <il className="card__item">
                            <i className="card__icon">
                                <TbHandRock/>
                            </i>
                            <p className="card__description">
                                Entrance to 3 bars and 1 club
                            </p>
                        </il>

                    </ul>
                    <div className="card__buttons">
                        <div className="hero__buttons">
                            <a href="#" className='hero-button primary-button button'>
                                <FaTicketAlt />
                                Buy Ticket
                            </a>
                        </div>
                        
                    </div>
                </article>
                <article className="card__article grid">
                    <header className="card__header">
                        <h1 className="header__amount">20€</h1>
                        <h3 className="header__subheader">Most Popular</h3>
                        <h2 className="header__title">Standard</h2>
                    </header>
                    <ul className="card__list grid">
                        <il className="card__item">
                            <i className="card__icon">
                                <TbHandRock/>
                            </i>
                            <p className="card__description">
                                Just 1 person
                            </p>
                        </il>
                        <il className="card__item">
                            <i className="card__icon">
                                <TbHandRock/>
                            </i>
                            <p className="card__description">
                                1 drink and shot in every place
                            </p>
                        </il>
                        <il className="card__item">
                            <i className="card__icon">
                                <TbHandRock/>
                            </i>
                            <p className="card__description">
                                Entrance to 3 bars and 1 club
                            </p>
                        </il>

                    </ul>
                    <div className="card__buttons">
                        <div className="hero__buttons">
                            <a href="#" className='hero-button primary-button button'>
                                <FaTicketAlt />
                                Buy Ticket
                            </a>
                        </div>
                        
                    </div>
                </article>
                <article className="card__article grid">
                    <header className="card__header">
                        <h1 className="header__amount">250€</h1>
                        <h3 className="header__subheader">Full Party</h3>
                        <h2 className="header__title">Experience</h2>
                    </header>
                    <ul className="card__list grid">
                        <il className="card__item">
                            <i className="card__icon">
                                <TbHandRock/>
                            </i>
                            <p className="card__description">
                                Up to 5 persons
                            </p>
                        </il>
                        <il className="card__item">
                            <i className="card__icon">
                                <TbHandRock/>
                            </i>
                            <p className="card__description">
                                Bottle and shots
                            </p>
                        </il>
                        <il className="card__item">
                            <i className="card__icon">
                                <TbHandRock/>
                            </i>
                            <p className="card__description">
                                Entrace to 3 bars and 1 club
                            </p>
                        </il>
                    </ul>
                    <div className="card__buttons">
                        <div className="hero__buttons">
                            <a href="#" className='hero-button primary-button button'>
                                <FaTicketAlt />
                                Buy Ticket
                            </a>
                        </div>
                        
                    </div>
                </article>
            </div>
        </section>
    )
}

export default PricingSection