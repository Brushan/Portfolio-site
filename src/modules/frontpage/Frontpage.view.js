import React from 'react';
import heroImage from '../../media/images/Tommy.png'

import './Frontpage.view.scss';

const Frontpage = () => {
  return (
    <section className="hero">
      <div className="hero__heading">
        <div className="hero__heading__title">
          <span className="block"></span>
          <h1>Tommy Berggren</h1>
        </div>
        <div className="hero__heading__subtitle">
          <span className="block"></span>
          <h2>Javascript Dev  - Technical SEO - Web Analysis</h2>
        </div>
      </div>
      <div className="hero__image">
        <div className="hero__image__png">
          <img src={heroImage} alt=""/>
        </div>
      </div>
    </section>
  )
}

export default Frontpage
