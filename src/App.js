import React, { Component } from 'react';
import './App.css';
import './tesco-modern.css';
import './components/atoms/spacings.css';
import './fonts.css';
import './colours.css';


// Components
import Nav from './components/organisms/ddl-nav/ddl-nav';
import HeroImg from './components/atoms/image/hero-img';
import Hero from './components/organisms/ddl-hero/ddl-hero';
import Ingredients from './components/organisms/ingredients/ingredients';
import Utensils from './components/organisms/utensils/utensils';

class App extends Component {
  render () {
    return (
      <main className="ddl-wrapper">
        <Nav txt="Navigation"/>
        <HeroImg src={'./components/organisms/ddl-hero/hero.jpg'}/>
        <div className="ddl-grid mb-64">
          <Hero />
          <Ingredients />
          <Utensils/>
        </div>
        <Nav txt="Footer"/>
      </main>
    );
  }
}

export default App;
