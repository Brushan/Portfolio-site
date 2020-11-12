import React from 'react';
import { GithubIcon, LinkedInIcon } from '../../media/icons/icons';
import './Footer.scss'

const Footer = () => {
  return (
    <section className="footer">
      <div className="footerWrapper">
        <div className="footerWrapper__contact">
          <div className="footerWrapper__contact__link">
            <a href="https://github.com/Brushan" target="_blank" rel="noreferrer"><GithubIcon /></a>
          </div>
          <div className="footerWrapper__contact__link">
            <a href="https://www.linkedin.com/in/tommy-berggren/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
