import React, { Component } from 'react';
import './style/App.css';
import profile from './img/profile.png';
import 'bootstrap/dist/css/bootstrap.min.css';


class Intro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hr1: 'trans--grow hr1',
      count: 0
    }
  }

  render() {
    var timeout = setTimeout(() => {
      this.setState({
        hr1: 'trans--grow grow hr1',
        count: 1
      })

    }, 500);

    if (this.state.count > 0) {
      clearTimeout(timeout);
    }

    return (
      <div className="Intro" id='intro'>
        <div className="intro-wrap">
          <div className="profile-img-sec dropshadow">
            <div className="profile-img-wrap">
              <div className="crooked">
                <img src={profile} alt=" " className="profile-img"></img>
              </div>
            </div>

          </div>
          <div className="intro-blank-top">
            <canvas id="canvas1" />
          </div>

          <div className="intro-floor shadow">
            <div className="name">
              <p className="first-name " >
                THAKORN
              </p>
              <div className="nameline">
                <hr className={this.state.hr1} ></hr>
              </div>
              <p className="last-name " >
                THONGRAK
              </p>
            </div>

          </div>
        </div>

      </div>
    );
  }
}

export default Intro;

