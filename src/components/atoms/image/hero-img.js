import React from 'react';
const HeroImg = (props) => {
  return (
    <div className="ddl-hero_img" style={{backgroundImage: `url(${props.src})`}}></div>
  )
}
export default HeroImg;