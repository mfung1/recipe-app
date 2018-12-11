import React from 'react';
import TheIcon from '../../atoms/icons/icon';

import './icon-with-text.css';

const IconWithText = (props) => { 
  return (
    <div className="ddl-icn-txt">
      <TheIcon icon={props.icon}/>
      <p className="ddl-t2 ml-12 col-blk">{props.txt}</p>
    </div>
  )
}

export default IconWithText;