import React from 'react'
import heroImage from '../../media/images/Tommy-blue.png'

import './FrontpageHero.scss'

const FrontpageHero = () => {
  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__container__title">
          <span className="block"></span>
          <h1>Javascript Dev, Technical SEO & Web Analysis</h1>
        </div>
        <div className="hero__container__subtitle">
          <span className="block"></span>
          <p>I build products with the user in mind.</p>
        </div>
        <div className="hero__container__image">
            <img src={heroImage} alt=""/>
        </div>
      </div>
    </section>
  )
}

export default FrontpageHero
