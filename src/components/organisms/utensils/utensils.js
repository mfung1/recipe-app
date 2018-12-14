import React from 'react';

import Heading from '../../atoms/Headings/headings';

class Utensils extends React.Component {
  constructor () {
    super();
    this.state = {
      UtensilsClass: 'ddl-card utensils'
    }
  }
  // fadeIn = setTimeout(() => {
  //   this.setState({UtensilsClass: 'ddl-card utensils visible'})
  // })
  render () {
    return (
      <section className={this.state.UtensilsClass}>
        <Heading level="h2" colour="blk" txt="Utensils"/>
      </section>
    )
  }
}

export default Utensils;