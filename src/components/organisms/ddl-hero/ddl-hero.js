import React, { Component } from 'react';
import './ddl-hero.css';
import RecipeDescription from '../../organisms/recipe-description/recipe-description';
import Divider from '../../atoms/divider/divider';
import RecipeDetails from '../../organisms/recipe-details/recipe-details';

class Hero extends Component {
  constructor () {
    super();
    this.state = {
      HeroClass: 'ddl-hero ddl-card invisible'
    }
  }

  fadeIn = setTimeout(() => {
    this.setState({HeroClass: 'ddl-hero ddl-card visible'})
  }, 100);
  
  render () {
    return (
      <section className={this.state.HeroClass}>
        <RecipeDescription/>
        <Divider/>
        <RecipeDetails/>
      </section>
    )
  }
}

export default Hero;