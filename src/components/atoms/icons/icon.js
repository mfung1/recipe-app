import React from 'react';
import Star from './star/star';
import Chevron from './chevron/chevron';
import Person from './person/person';

const Icon = (props) => {
  const Icons = {
    star: Star,
    chevron: Chevron,
    person: Person,
  };
  const TheIcon = Icons[props.icon || 'chevron'];
  return (
    <TheIcon icon={props.icon} color={props.color}/>
  )
}

export default Icon;