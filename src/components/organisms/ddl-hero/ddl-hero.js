import React, { Component } from 'react';
import './ddl-hero.css';
import RecipeDescription from '../../organisms/recipe-description/recipe-description';
import Divider from '../../atoms/divider/divider';
import RecipeDetails from '../../organisms/recipe-details/recipe-details';

class Hero extends Component {
  render () {
    return (
      <section className="ddl-hero ddl-card mb-32">
        <RecipeDescription/>
        <Divider/>
        <RecipeDetails/>
      </section>
    )
  }
}

export default Hero;