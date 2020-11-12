import React from 'react';
import { CssIcon, GaIcon, GscIcon, GtmIcon, HtmlIcon, JsIcon, NodeIcon, ReactIcon, ReduxIcon, SassIcon, TypescriptIcon } from '../../media/icons/icons';
import './Skills.scss';

const Skills = () => {
  return (
    <section className="skills">
      <div className="skillsWrapper">
        <div className="skillsWrapper__card">
          <h3>Web Development</h3>
          <div className="skillsWrapper__card__techGroup">
            <div className="tech">
              <HtmlIcon />
              <p>HTML 5</p>
            </div>
            <div className="tech">
              <CssIcon />
              <p>CSS 3</p>
            </div>
            <div className="tech">
              <JsIcon />
              <p>Javascript</p>
            </div>
            <div className="tech">
              <ReactIcon />
              <p>React</p>
            </div>
            <div className="tech">
              <ReduxIcon />
              <p>Redux</p>
            </div>
            <div className="tech">
              <TypescriptIcon />
              <p>Typescript</p>
            </div>
            <div className="tech">
              <SassIcon />
              <p>Sass</p>
            </div>
            <div className="tech">
              <NodeIcon />
              <p>NodeJS</p>
            </div>
          </div>
          <h3>SEO & Web Analysis</h3>
          <div className="skillsWrapper__card__techGroup">
            <div className="tech">
              <GaIcon />
              <p>Analytics</p>
            </div>
            <div className="tech">
              <GtmIcon />
              <p>GTM</p>
            </div>
            <div className="tech">
              <GscIcon />
              <p>GSC</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
