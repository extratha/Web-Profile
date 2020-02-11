import React, { Component } from 'react';
import './App.css';
import Nav1 from './Nav1';
import Intro from './Intro';
import Profile from './Profile';
import 'bootstrap/dist/css/bootstrap.min.css';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';
import Contact from './Contact';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _overlay : 'overlay backblur'
    }
  }
  callbackFunction = (overlayFromNav) => {
    this.setState({_overlay: overlayFromNav})
  }
  render() {
    return (
      <div className="main-wrap">
        <div className={this.state._overlay}></div>
        <Nav1 parentOverlay={this.state._overlay} parentCallback={this.callbackFunction}></Nav1>
        <Intro ></Intro>
        <Profile  ></Profile>
        <Education  ></Education>
        <Experience  ></Experience>
        <Skills  ></Skills>
        <Contact ></Contact>

      </div>
    )

  }

}

export default App;
