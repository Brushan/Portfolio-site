import React from 'react';
import Footer from '../../components/footer/Footer';
import FrontpageHero from '../../components/frontpageHero/FrontpageHero';
import PersonalInformation from '../../components/personalInformation/PersonalInformation';

import './Frontpage.view.scss';

const Frontpage = () => {
  return (
    <div>
      <FrontpageHero />
      <PersonalInformation />
      <Footer />
    </div>
  )
}

export default Frontpage
