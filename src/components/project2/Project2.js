import React from 'react'
import { HtmlIcon } from '../../media/icons/icons';
import './Project2.scss';

const Project2 = () => {
  return (
<section className="projects">
  <h1>projects</h1>
  <div className="projectsWrapper">
    <a href="https://github.com/Brushan/Recipe-Site">
      <div className="project">
        <div className="description">
          <h3>Recipe site</h3>
          <p>A web app built with the MERN-stack - <strong>MongoDB</strong>, <strong>Express</strong>, <strong>React</strong> and <strong>Nodejs</strong>. Search through a grid of recipes with the help of a filtering system, each recipe has structured data for better SEO performance.</p>
        </div>
        <div className="languages">
          <div className="languages__icon">
            <HtmlIcon />
            <p>HTML</p>
          </div>
        </div>
      </div>
    </a>
  </div>
</section>
  )
}

export default Project2
