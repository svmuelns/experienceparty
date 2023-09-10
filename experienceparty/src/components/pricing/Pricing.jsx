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
            <div className="contact__subheaders">
                <h2 className="contact__subheader service__subheader" id='ql'>
                    To enjoy the most out of our <span className="accent">pubcrawl</span>, you can choose how much you want to drink, and how <span className='accent'>special</span> you want it to be.
                </h2>
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
                            <button className='pushable'>
                                <a href='#home' className='front'>
                                    <FaTicketAlt />
                                    Buy Ticket    
                                </a>
                            </button>
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
                            <button className='pushable'>
                                <a href='#home' className='front'>
                                    <FaTicketAlt />
                                    Buy Ticket    
                                </a>
                            </button>
                        </div>
                        
                    </div>
                </article>
                <article className="card__article grid">
                    <header className="card__header">
                        <h1 className="header__amount">250€</h1>
                        <h3 className="header__subheader white">Full Party</h3>
                        <h2 className="header__title primary-color-animated">Experience</h2>
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
                            <button className='pushable'>
                                <a href='#home' className='front'>
                                    <FaTicketAlt />
                                    Buy Ticket    
                                </a>
                            </button>
                        </div>
                        
                    </div>
                </article>
            </div>
        </section>
    )
}

export default PricingSection