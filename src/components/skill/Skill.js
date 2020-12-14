import React from 'react';
import './Skill.scss';


const Skill = ({ Icon, title }) => {

  return (
    <>
      <div className="tech">
        <Icon />
        <p>{title}</p>
      </div>
    </>
  )
}

export default Skill
