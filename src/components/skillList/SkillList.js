import React from 'react';
import Skill from '../skill/Skill';
import { CssIcon, GaIcon, GscIcon, GtmIcon, HtmlIcon, JsIcon, NodeIcon, ReactIcon, ReduxIcon, SassIcon, TypescriptIcon } from '../../media/icons/icons';
import './SkillList.scss';


const SkillList = () => {
  return (
<div className="skillsWrapper">
  <div className="skillsWrapper__card">
    <h3>Web Development</h3>
    <div className="skillsWrapper__card__techGroup">
      <Skill delay="0.3" skillId="1" Icon={JsIcon} title="Javascript"/>
      <Skill delay="0.3" skillId="2" Icon={HtmlIcon} title="Html"/>
    </div>
  </div>
</div>
  )
}

export default SkillList;
