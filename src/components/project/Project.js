import React from 'react';
import './Project.scss';
import { GithubIcon, JsIcon } from '../../media/icons/icons';
import image from '../../media/images/Hangman.jpg'

export const Project = () => {
  return (
        <div className="project">
          <h5>Web Development</h5>
          <div className="project__image">
            <img src={image} alt="hangman"/>
          </div>
            <div className="project__description">
              <h3>Hangman game</h3>
              <p>A React web app of the classic pen and paper game Hangman, built during a hackday event.</p>
            </div>
            <div className="project__tech">
              <ul>
                <li>
                  <div className="project__tech__icon">
                  <JsIcon />
                  </div>
                  <p>Javascript</p>
                </li>
                <li>
                  HTML
                </li>
                <li>
                  CSS
                </li>
              </ul>
            </div>
            <div className="project__link">
              <a href="https://github.com/Brushan/Hangman">
                <GithubIcon />
                To the code <span>&rarr;</span></a>
            </div>
          </div>
  )
}
