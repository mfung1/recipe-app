import React from 'react';
import '../ddl-svg.css';

const Star = (props) => {
  return (
    <svg className={`ddl-svg ddl-svg--${props.color}`} viewBox="0 0 20 20" width="20" height="20">
      <path d="M10 16.589L3.844 20l1.178-7.233L0 7.61l6.933-1.055L10 0l3.067 6.556L20 7.61l-5.022 5.156L16.156 20z" fillRule="evenodd"/>
    </svg>
  )
}

export default Star;