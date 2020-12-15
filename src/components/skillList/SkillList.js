import React from 'react';
import Skill from '../skill/Skill';
import { CssIcon, GaIcon, GscIcon, GtmIcon, HtmlIcon, JsIcon, NodeIcon, ReactIcon, ReduxIcon, SassIcon, TypescriptIcon } from '../../media/icons/icons';
import './SkillList.scss';


const SkillList = () => {
  return (
<div className="skillsWrapper">
  <div className="skillsWrapper__card">
    <h3>Languages & Frameworks</h3>
    <div className="skillsWrapper__card__techGroup">
      <Skill Icon={ReactIcon} title="React"/>
      <Skill Icon={JsIcon} title="Javascript"/>
      <Skill Icon={TypescriptIcon} title="Typescript"/>
      <Skill Icon={HtmlIcon} title="Html"/>
      <Skill Icon={CssIcon} title="CSS"/>
    </div>
  </div>
  <div className="skillsWrapper__card">
    <h3>Tools</h3>
    <div className="skillsWrapper__card__techGroup">
      <Skill Icon={NodeIcon} title="Node"/>
      <Skill Icon={ReduxIcon} title="Redux"/>
      <Skill Icon={SassIcon} title="Sass"/>
      <Skill Icon={GaIcon} title="GA"/>
      <Skill Icon={GtmIcon} title="GTM"/>
      <Skill Icon={GscIcon} title="GSC"/>
    </div>
  </div>
</div>
  )
}

export default SkillList;
