import React from 'react'
import './Service.css'
import bracelet from '../../assets/gallery9.jpg'

function SeparatorTwo() {
  return (
      <section className='separator__section'>
        <div className="about__beartitle">
            <img src={bracelet} className='service-img about-img'></img>

            <h1 className="hidden about__title title">
                OUR PARTY
            </h1>
        </div>

      </section>
  )
}

export default SeparatorTwo