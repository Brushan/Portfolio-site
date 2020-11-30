import React from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Skill.scss';

gsap.registerPlugin(ScrollTrigger);

const Skill = ({ delay, skillId, Icon, title }) => {
  const skillRef = React.useRef(null);

  React.useEffect(() => {
    gsap.from(skillRef.current, {
      scale: 0,
      delay: delay * skillId,
      ScrollTrigger: {
        trigger: ".tech",
        start: "top center+=100",
      },

    });
  }, []);

  return (
    <>
      <div className="tech" ref={skillRef}>
        <Icon />
        <p>{title}</p>
      </div>
    </>
  )
}

export default Skill
