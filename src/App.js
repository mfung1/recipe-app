import React, { Component } from 'react';
import './App.css';
import './tesco-modern.css';
import './components/atoms/spacings.css';
import './fonts.css';
import './colours.css';
// Components
import Nav from './components/organisms/ddl-nav/ddl-nav';
import Hero from './components/organisms/ddl-hero/ddl-hero';

class App extends Component {
  render() {
    return (
      <main className="ddl-wrapper">
        <Nav txt="Navigation"/>
        <Hero />
        <Nav txt="Footer"/>
      </main>
    );
  }
}

export default App;
