import React from 'react';
import Footer from '../../components/footer/Footer';
import FrontpageHero from '../../components/frontpageHero/FrontpageHero';
import PersonalInformation from '../../components/personalInformation/PersonalInformation';
import Project from '../../components/project/Project';
import SkillList from '../../components/skillList/SkillList';

import './Frontpage.view.scss';

const Frontpage = () => {
  return (
    <div>
      <FrontpageHero />
      <section className="about">
        <PersonalInformation />
      </section>
      <section className="skills">
        <h2><span>Tech I work with</span></h2>
        <p>The Javascript frontend ecosystem has really grown on me and I spend most of my days working with these tools and languages, always on the hunt to better my knowledge.</p>
        <SkillList />
      </section>
        <Project />
      <Footer />
    </div>
  )
}

export default Frontpage
