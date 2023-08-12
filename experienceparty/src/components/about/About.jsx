import React from 'react'
import './About.css'
import gallery1 from '../../assets/gallery1.jpg'
import gallery2 from '../../assets/gallery2.jpg'
import gallery3 from '../../assets/gallery3.jpg'
import gallery4 from '../../assets/gallery4.jpg'

function AboutSection() {
    return (
        <section className='about section' id='about'>
            <div className='about__container container'>
                <div className="about__info">
                    <div className="about__titles">
                        <h1 className="alt__title">
                            What You'll Find<span className='accent'>.</span>
                        </h1>
                    </div>
                    <div className="separator__container">
                        <div className="separator"></div>
                    </div>
                    <p className="about__subheader title" id="subheader1">
                        Looking for <span className="accent">the best bars and clubs</span> in Madrid?
                    </p>
                    <p className="about__subheader title" id="subheader2">
                        <span className="accent">Meet people</span> of all around the world, <span className="accent">drunk!</span>
                    </p>
                    <p className="about__subheader title" id="subheader3">
                        Drink in every place, <span className="accent">for a cheap price.</span>
                    </p>
                </div>
                <div className="about__gallery grid">
                    <div className="gallery__img1">
                        <img src={gallery1} alt="gallery1" className="gallery1" />
                    </div>
                    <div className="gallery__img2">
                        <img src={gallery2} alt="gallery2" className="gallery2" />
                    </div>
                    <div className="gallery__img3">
                        <img src={gallery3} alt="gallery3" className="gallery3" />
                    </div>
                    <div className="gallery__img4">
                        <img src={gallery4} alt="gallery4" className="gallery4" />
                    </div>
                </div>
            </div>

        </section>
    )
}

export default AboutSection