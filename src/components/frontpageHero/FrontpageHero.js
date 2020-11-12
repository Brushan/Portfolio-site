import React from 'react'

import './FrontpageHero.scss'

const FrontpageHero = () => {
  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__container__title">
          <span className="block"></span>
          <h1>
            Hello,
          </h1>
        </div>
        <div className="hero__container__name">
          <span className="block"></span>
          <h1>
            <span>I am Tommy</span>
          </h1>
        </div>
      </div>
      <div className="hero__image"></div>
    </section>
  )
}

export default FrontpageHero
