import React from 'react';
import TheIcon from '../../atoms/icons/icon';
import SkillLevel from '../../atoms/icons/skill-level/skill-level';

import './icon-with-text.css';

const IconWithText = (props) => {
  let x;

  if (props.skill === true) {
    x = <div className="ddl-icn-txt">
    <TheIcon icon={props.icon}/>
    <p className="ddl-t2 ml-12 col-blk mr-8">{props.txt}</p>
    <SkillLevel points={2.5} />
  </div>
  } else {
    x = <div className="ddl-icn-txt">
    <TheIcon icon={props.icon}/>
    <p className="ddl-t2 ml-12 col-blk">{props.txt}</p>
  </div>
  }
  return x;
}

export default IconWithText;