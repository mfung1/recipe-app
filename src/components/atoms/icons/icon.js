import React from 'react';
import Star from './star/star';
import Chevron from './chevron/chevron';
import Person from './person/person';
import Time from './time/time';
import Smile from './smile/smile';
import Favourite from './favourites/favourites';

const Icon = (props) => {
  const Icons = {
    star: Star,
    chevron: Chevron,
    person: Person,
    time: Time,
    smile: Smile,
    favourite: Favourite,
  };
  const TheIcon = Icons[props.icon || 'chevron'];
  return (
    <TheIcon icon={props.icon} color={props.color}/>
  )
}

export default Icon;