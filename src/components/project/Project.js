import React from 'react';
import { GithubIcon } from '../../media/icons/icons';
import trashTag from '../../media/images/trashtagger.png'
import tappyGif from '../../media/images/tappy.gif'
import recipeImage from '../../media/images/Recipes.jpg'

export const Project = () => {
  return (
  <section className="projects">
    <h2>Some of my work</h2>
    <div className="projectsWrapper">
      <div className="project">
          <h5>Web Development</h5>
          <div className="project__image">
            <img src={recipeImage} alt="tappy"/>
          </div>
          <div className="project__description">
            <h3>Recipe site</h3>
            <p>A web app built with the MERN-stack - <strong>MongoDB</strong>, <strong>Express</strong>, <strong>React</strong> and <strong>Nodejs</strong>. Search through a grid of recipes with the help of a filtering system, each recipe has structured data for better SEO performance.</p>
          </div>
          <div className="project__link">
            <a href="https://github.com/Brushan/Recipe-Site" target="_blank" rel="noreferrer">
              <GithubIcon />
              To the code <span>&rarr;</span></a>
          </div>
        </div>

      <div className="project">
        <h5>Mobile Development</h5>
        <div className="project__image">
          <img src={trashTag} alt="trashtagger"/>
        </div>
        <div className="project__description">
          <h3>TrashTagger</h3>
          <p>A mobile app built in <strong>React Native</strong> using <strong>Firebase</strong> as database. The app is meant to be used as a tool in the fight for the environment and allow users to geo-tag littered areas in need of cleaning up.</p>
        </div>
        <div className="project__link">
          <a href="https://github.com/Brushan/TrashTagger" target="_blank" rel="noreferrer">
            <GithubIcon />
            To the code <span>&rarr;</span></a>
        </div>
      </div>

      <div className="project">
        <h5>Mobile Development</h5>
        <div className="project__image">
          <img src={tappyGif} alt="tappy"/>
        </div>
        <div className="project__description">
          <h3>Tappy</h3>
          <p>A mobile app built in <strong>React Native</strong> that allows users to gift "taps" which can be redeemed for beverages and pastries at different coffee shops, bars and restaurants.</p>
        </div>
        <div className="project__link">
          <a href="https://github.com/Brushan/TappyPublic" target="_blank" rel="noreferrer">
            <GithubIcon />
            To the code <span>&rarr;</span></a>
        </div>
      </div>

    </div>
    </section>     
  )
}
