import React from 'react';
import Footer from '../../components/footer/Footer';
import FrontpageHero from '../../components/frontpageHero/FrontpageHero';
import PersonalInformation from '../../components/personalInformation/PersonalInformation';
import { Project } from '../../components/project/Project';
import Skills from '../../components/skills/Skills';

import './Frontpage.view.scss';

const Frontpage = () => {
  return (
    <div>
      <FrontpageHero />
      <section className="about">
        <PersonalInformation />
      </section>
      <section className="skills">
        <h2>Tech stack</h2>
        <Skills />
      </section>
      <section className="projects">
        <h2>My projects</h2>
        <Project />
      </section>
      <Footer />
    </div>
  )
}

export default Frontpage
