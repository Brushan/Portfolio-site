import React from 'react'
import { FirebaseIcon, NodeIcon, ReactIcon, ReduxIcon, SassIcon } from '../../media/icons/icons';
import './Project.scss';

const Project = () => {
  return (
<section className="projects">
  <div className="projects__intro">
  <h2><span>A few projects</span></h2>
  <p>I always strive to become better at my craft, more than once catching myself looking at the clock at 2 a.m pondering whether I "should just get this one small thing done before bed" or not. Below are some projects I have been working on recently, more can be found on my <a href="https://github.com/Brushan">Github</a> of doom.</p>
  </div>
  <div className="projectsWrapper">
    <a href="https://github.com/Brushan/Recipe-Site" target="_blank" rel="noopener noreferrer">
      <div className="project">
        <div className="project__description">
          <h3>Recipes</h3>
          <p>A recipe web app built with React, Sass, Node.js using MongoDB and AWS as database solutions. The app is using libraries such as react-helmet to increase SEO perfomance.</p>
        </div>
        <hr className="project__linebreak" />
        <div className="project__tech">
          <ReactIcon />
          <SassIcon />
          <NodeIcon />
        </div>
      </div>
    </a>

    <a href="https://github.com/Brushan/Recipe-Site" target="_blank" rel="noopener noreferrer">
      <div className="project">
        <div className="project__description">
          <h3>Trash Tagger</h3>
          <p>A mobile app built in <strong>React Native</strong> meant to be used as a tool in the fight for the environment, it allow users to geo-tag littered areas in need of cleaning up.</p>
        </div>
        <hr className="project__linebreak" />
        <div className="project__tech">
          <ReactIcon />
          <ReduxIcon />
          <FirebaseIcon />
        </div>
      </div>
    </a>

    <a href="https://github.com/Brushan/Recipe-Site" target="_blank" rel="noopener noreferrer">
      <div className="project">
        <div className="project__description">
          <h3>Tappy</h3>
          <p>A mobile app built in <strong>React Native</strong> that allows users to gift "taps" which can be redeemed for beverages and pastries at different coffee shops, bars and restaurants.</p>
        </div>
        <hr className="project__linebreak" />
        <div className="project__tech">
          <ReactIcon />
          <ReduxIcon />
          <FirebaseIcon />
        </div>
      </div>
    </a>
  </div>
</section>
  )
}

export default Project
