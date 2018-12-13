import React, { Component } from 'react';
import './App.css';
import './tesco-modern.css';
import './components/atoms/spacings.css';
import './fonts.css';
import './colours.css';
import Image from './components/organisms/ddl-hero/hero.jpg';

// Components
import Nav from './components/organisms/ddl-nav/ddl-nav';
import Hero from './components/organisms/ddl-hero/ddl-hero';
import Ingredients from './components/organisms/ingredients/ingredients';

class App extends Component {
  render () {
    return (
      <main className="ddl-wrapper">
        <Nav txt="Navigation"/>
        <div className="ddl-hero_img" style={{backgroundImage: `url(${Image})`}}></div>
        <Hero />
        <Ingredients />
        <Nav txt="Footer"/>
      </main>
    );
  }
}

export default App;
