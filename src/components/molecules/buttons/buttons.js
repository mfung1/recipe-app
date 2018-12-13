import React from 'react';
import TheIcon from '../../atoms/icons/icon';
import './ddl-btn.css';
const Button = (props) => {
  let modifier = `ddl-btn-`;
  props.filled
  ?
  modifier += `flld`
  :
  modifier += `hllw`
  return (
    <a href="https://www.tesco.com" className={`ddl-btn ${modifier} mr-16 mb-24`}>
      <span className="ddl-lbl ddl-t2">{props.txt}</span>
      <TheIcon icon="chevron" color={props.filled ? 'wht' : 'blu'}/>
    </a>
  )
}

export default Button;