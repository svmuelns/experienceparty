import React from 'react'
import './About.css'
import about from '../../assets/about.jpg'

function AboutSection() {
    return (
        <section className='about section' id='about'>
            <div className='about__container'>
                <img src={about} className='about-img'></img>
                <div className="about__info">
                    <p className="about__subheader title" id="subheader1">
                        Are you looking for the best bars and clubs in Madrid?
                    </p>
                    <p className="about__subheader title" id="subheader2">
                        Meet people of all around the world, drunk!
                    </p>
                    <p className="about__subheader title" id="subheader3">
                        Get a shot or drink in every place, for a cheap price...
                    </p>
                </div>
            </div>

        </section>
    )
}

export default AboutSection