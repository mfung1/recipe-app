import React from 'react';

const Chevron = (props) => {
  return (
    <svg class={`ddl-svg ddl-svg--${props.color}`} viewBox="0 0 18 24" width="18" height="24">
      <polyline points="5.31 3.35 14.28 12 5.31 20.64"></polyline>
    </svg>
  )
}

export default Chevron;