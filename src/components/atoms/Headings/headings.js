import React from 'react';

const H1 = (props) => {
  return (<h1 className={`ddl-h1 mb-13 col-${props.colour}`}>{props.txt}</h1>)
}
const H2 = (props) => {
  return (<h2 className={`ddl-h2 mb-13 col-${props.colour}`}>{props.txt}</h2>)
}
const H3 = (props) => {
  return (<h3 className={`ddl-h3 mb-13 col-${props.colour}`}>{props.txt}</h3>)
}

const Heading = (props) => {
  let level = {
    h1: H1,
    h2: H2,
    h3: H3
  },
      TheHeading = level[props.level || 'h1'];
  return (
    <TheHeading colour={props.colour} txt={props.txt}/>
  )
}

export default Heading;