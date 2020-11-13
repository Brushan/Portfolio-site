import React from 'react';
import './Project.scss';
import video from '../../media/videos/Hangman.mp4'

export const Project = () => {
  return (
      <div className="projectWrapper">
        <div className="projectWrapper__project">
          <h5>Web Development</h5>
          <video autoPlay muted loop src={video} type="video/mp4"/>
          <h3>Hangman game</h3>
          <p>This is a React web app of the classic pen and paper game Hangman which I made during a hackday.</p>
          <ul>
            <li>Javscript</li>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
        </div>
      </div>
  )
}
