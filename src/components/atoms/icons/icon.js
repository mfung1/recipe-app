import React from 'react';
import Star from './star/star';
import Chevron from './chevron/chevron';

const Icon = (props) => {
  const Icons = {
    star: Star,
    chevron: Chevron
  };
  const TheIcon = Icons[props.icon || 'chevron'];
  return (
    <TheIcon icon={props.icon} color={props.color}/>
  )
}

export default Icon;