import React from 'react';

import './skill-points.css';

const Skill = (props) => {
  let icon;
  if (props.half === true) {
    icon = <svg width="20" height="20" viewBox="0 0 20 20"><g fill="none" fillRule="evenodd"><circle stroke="#00539F" cx="10" cy="10" r="10"/><path d="M10 0v20C4.477 20 0 15.523 0 10S4.477 0 10 0z" fill="#00539F"/></g></svg>
  } else if (props.hollow === true) {
    icon = <svg width="20" height="20" viewBox="0 0 22 22"><circle cx="10" cy="10" r="10" fill="transparent" fillRule="evenodd" stroke="#00539f"/></svg>
  } else {
    icon = <svg width="20" height="20" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10" fill="#00539F" fillRule="evenodd"/></svg> 
  }
  return icon;
}

const SkillLevel = (props) => {
  let x = Math.floor(props.points),
      y = 5 - Math.ceil(props.points),
      els = [],
      half = false;

  props.points % 1 === 0.5 ? half = true : half = false;

  while(x--) {
    els.push(<Skill key={x+1}/>)
  }

  if (half === true) {
    els.push(<Skill half={true} key={x+1}/>)
  }

  while (y--) {
    els.push(<Skill hollow={true} key={y}/>)
  }
  return (
    <div className="skill-points">
      {els}
    </div>
  );
}

export default SkillLevel;