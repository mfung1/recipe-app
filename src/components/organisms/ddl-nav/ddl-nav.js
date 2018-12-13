import React from 'react';
import Heading from '../../atoms/Headings/headings';

const Nav = (props) => {
  return (
    <nav style={{height: '143px', backgroundColor: '#00539f', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <Heading level="h1" txt="Navigation" colour="wht"/>
    </nav>
  )
}

export default Nav;