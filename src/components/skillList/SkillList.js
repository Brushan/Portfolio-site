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
      <Skill Icon={JsIcon} title="Javascript"/>
      <Skill Icon={HtmlIcon} title="Html"/>
    </div>
  </div>
  <div className="skillsWrapper__card">
    <h3>Tools & Frameworks</h3>
    <div className="skillsWrapper__card__techGroup">
      <Skill Icon={JsIcon} title="Javascript"/>
      <Skill Icon={HtmlIcon} title="Html"/>
    </div>
  </div>
</div>
  )
}

export default SkillList;
