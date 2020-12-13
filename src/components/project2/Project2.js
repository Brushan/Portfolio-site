import React from 'react'
import { HtmlIcon, NodeIcon, ReactIcon, SassIcon } from '../../media/icons/icons';
import './Project2.scss';

const Project2 = () => {
  return (
<section className="projects">
  <h1>Projects</h1>
  <p>I always strive to become better at my craft through experimenting with different techonologies that I find interesting and intriguing. Here are some projects I have been working on recently, more to be found on my <a href="https://github.com/Brushan">Github</a>.</p>
  <div className="projectsWrapper">
    <a href="https://github.com/Brushan/Recipe-Site">
      <div className="project">
        <div className="project__description">
          <h3>Recipes</h3>
          <p>A web app built with the MERN-stack. Search through a grid of recipes with the help of a filtering system, each recipe has structured data for better SEO performance.</p>
        </div>
        <div className="project__tech">
          <ReactIcon />
          <SassIcon />
          <NodeIcon />
        </div>
      </div>
    </a>

    <a href="https://github.com/Brushan/Recipe-Site">
      <div className="project">
        <div className="project__description">
          <h3>Trash Tagger</h3>
          <p>A mobile app meant to be used as a tool in the fight for the environment, it allow users to geo-tag littered areas in need of cleaning up.</p>
        </div>
        <div className="project__tech">
          <ReactIcon />
          <SassIcon />
          <NodeIcon />
        </div>
      </div>
    </a>

    <a href="https://github.com/Brushan/Recipe-Site">
      <div className="project">
        <div className="project__description">
          <h3>Tappy</h3>
          <p>A mobile app that allows users to gift "taps" which can be redeemed for beverages and pastries at different coffee shops, bars and restaurants.</p>
        </div>
        <div className="project__tech">
          <ReactIcon />
          <SassIcon />
          <NodeIcon />
        </div>
      </div>
    </a>
  </div>
</section>
  )
}

export default Project2