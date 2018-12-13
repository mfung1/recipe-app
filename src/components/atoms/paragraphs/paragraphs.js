import React from 'react';

const T1 = (props) => {
  return (<p className={`ddl-t1 mb-20 col-${props.colour}`}>{props.txt}</p>)
}
const T2 = (props) => {
  return (<p className={`ddl-t2 mb-20 col-${props.colour}`}>{props.txt}</p>)
}
const T3 = (props) => {
  return (<p className={`ddl-t3 mb-20 col-${props.colour}`}>{props.txt}</p>)
}

const Paragraph = (props) => {
  let level = {
    t1: T1,
    t2: T2,
    t3: T3
  },
      TheParagraph = level[props.level || 't1'];
  return (
    <TheParagraph colour={props.colour} txt={props.txt}/>
  )
}

export default Paragraph;