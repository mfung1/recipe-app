import React from 'react';

const Nav = (props) => {
  return (
    <nav style={{height: '143px', backgroundColor: '#00539f', display: 'flex', alignItems: 'center'}}>
      <h1 className="ddl-h1 col-wht" style={{margin: 'auto', padding: '24px', textAlign: 'center'}}>{props.txt}</h1>
    </nav>
  )
}

export default Nav;