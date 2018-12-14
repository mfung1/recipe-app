import React, { Component } from 'react';
import './App.css';
import './tesco-modern.css';
import './components/atoms/spacings.css';
import './fonts.css';
import './colours.css';

import Image from './components/atoms/image/hero.jpg';


// Components
import Nav from './components/organisms/ddl-nav/ddl-nav';
import HeroImg from './components/atoms/image/hero-img';
import Content from './components/organisms/content/content';

class App extends Component {
  render () {
    return (
      <main className="ddl-wrapper">
        <Nav txt="Navigation"/>
        <HeroImg ImgSrc={Image}/>
        <Content/>
        <Nav txt="Footer"/>
      </main>
    );
  }
}

export default App;
