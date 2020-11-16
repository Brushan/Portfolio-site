import React from 'react';
import './Project.scss';
import { GithubIcon } from '../../media/icons/icons';
import hangmanImage from '../../media/images/Hangman.jpg'

export const Project = () => {
  return (
  <section className="projects">
    <h2>Earlier work</h2>
    <div className="projectsWrapper">
      <div className="project">
        <h5>Web Development</h5>
        <div className="project__image">
          <img src={hangmanImage} alt="hangman"/>
        </div>
        <div className="project__description">
          <h3>Hangman game</h3>
          <p>A React web app of the classic pen and paper game Hangman, built during a hackday event.</p>
        </div>
        <div className="project__link">
          <a href="https://github.com/Brushan/Hangman" target="_blank" rel="noreferrer">
            <GithubIcon />
            To the code <span>&rarr;</span></a>
        </div>
      </div>

      <div className="project">
        <h5>Web Development</h5>
        <div className="project__image">
          <img src={hangmanImage} alt="hangman"/>
        </div>
        <div className="project__description">
          <h3>Hangman game</h3>
          <p>A React web app of the classic pen and paper game Hangman, built during a hackday event.</p>
        </div>
        <div className="project__link">
          <a href="https://github.com/Brushan/Hangman" target="_blank" rel="noreferrer">
            <GithubIcon />
            To the code <span>&rarr;</span></a>
        </div>
      </div>

      <div className="project">
        <h5>Web Development</h5>
        <div className="project__image">
          <img src={hangmanImage} alt="hangman"/>
        </div>
        <div className="project__description">
          <h3>Hangman game</h3>
          <p>A React web app of the classic pen and paper game Hangman, built during a hackday event.</p>
        </div>
        <div className="project__link">
          <a href="https://github.com/Brushan/Hangman" target="_blank" rel="noreferrer">
            <GithubIcon />
            To the code <span>&rarr;</span></a>
        </div>
      </div>
    </div>
    </section>     
  )
}
