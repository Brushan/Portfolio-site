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
      <PersonalInformation />
      <Skills />
      <section className="projects">
        <Project />
      </section>
      <Footer />
    </div>
  )
}

export default Frontpage
