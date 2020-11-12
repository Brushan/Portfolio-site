import React from 'react';
import { GithubIcon } from '../../media/icons/icons';
import './Footer.scss'

const Footer = () => {
  return (
    <section className="footer">
      <div className="footerWrapper">
        <div className="footerWrapper__contact">
          <div className="footerWrapper__contact__link">
            <a href="https://github.com/Brushan"><GithubIcon /></a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
