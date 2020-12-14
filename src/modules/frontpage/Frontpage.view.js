import React from 'react';
import Flash from '../../components/flash/Flash';
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
        <SkillList />
      </section>
        <Project />
      <Footer />
    </div>
  )
}

export default Frontpage
