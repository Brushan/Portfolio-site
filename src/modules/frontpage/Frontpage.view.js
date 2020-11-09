import React from 'react';
import FrontpageHero from '../../components/frontpageHero/FrontpageHero';
import PersonalInformation from '../../components/personalInformation/PersonalInformation';

import './Frontpage.view.scss';

const Frontpage = () => {
  return (
    <div>
      <FrontpageHero />
      <PersonalInformation />
    </div>
  )
}

export default Frontpage
