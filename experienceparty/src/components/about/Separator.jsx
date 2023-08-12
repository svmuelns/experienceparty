import React from 'react'
import './About.css'
import about from '../../assets/about.jpg'
import bear from '../../assets/bear.png'

function Separator() {
  return (
      <section className='separator__section'>
        <div className="about__beartitle">
            <img src={about} className='about-img'></img>

            <h1 className="about__title title">
                OUR PARTY
            </h1>
            <img src={bear} className='bear'></img>
        </div>

      </section>
  )
}

export default Separator