import React, { Component } from "react";
import logo from "./img/logo2.svg";
import exNav from "./img/exNav.png";
import cross from "./img/cross.png";
import "./style/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, animateScroll as scroll } from "react-scroll";

class Nav1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _profile: "Profile",
      _education: "Education",
      _experience: "Experience",
      _skills: "Skills",
      _contact: "Contact",
      show: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    if (this.state.show === false) {
      this.setState({ show: true });
      this.props.parentCallback("overlay backblur show");
    } else {
      this.setState({ show: false });
      this.props.parentCallback("overlay backblur");
    }
  }

  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    let navStatus = "nav-canvas";
    let navOverlay = "navOverlay backblur";
    const _linkOffset = -62;
    const CanvasLine = () => (
      <div className="px-5">
        <hr
          style={{
            color: "#765b8b",
            backgroundColor: "#765b8b",
            borderRadius: "20px",
            height: "0.1px",
            marginTop: "1rem",
            marginBottom: "1rem",
          }}
        />
      </div>
    );
    if (this.state.show) {
      navStatus += " show";
      navOverlay += " show";
    } else {
      navStatus.replace(" show", "");
      navOverlay.replace(" show", "");
    }
    return (
      <div className="Nav">
        <div className="nav-wrap backblur ">
          <div className={navOverlay}> </div>

          <div className={navStatus} id="nav-canvas">
            <div className="canvas-list px-3 mt-2 mb-5">
              <button
                className="btn btn-light btncross"
                type="button"
                onClick={this.handleClick}
              >
                <img src={cross} alt=" " width="20" height="20"></img>
              </button>
              <div className="nav-canvas-main  p-5">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item active my-3">
                    <Link
                      className="nav-link"
                      onClick={this.handleClick}
                      activeClass="active"
                      to="profile"
                      spy={true}
                      smooth={true}
                      offset={_linkOffset}
                      duration={0}
                    >
                      Introduce
                    </Link>
                  </li>
                  <CanvasLine />
                  <li className="nav-item my-3">
                    <Link
                      className="nav-link"
                      onClick={this.handleClick}
                      activeClass="active"
                      to="education"
                      spy={true}
                      smooth={true}
                      offset={_linkOffset}
                      duration={0}
                    >
                      {this.state._education}
                    </Link>
                  </li>
                  <CanvasLine />
                  <li className="nav-item my-3">
                    <Link
                      className="nav-link"
                      onClick={this.handleClick}
                      activeClass="active"
                      to="experience"
                      spy={true}
                      smooth={true}
                      offset={_linkOffset}
                      duration={0}
                    >
                      {this.state._experience}
                    </Link>
                  </li>
                  <CanvasLine />
                  <li className="nav-item my-3">
                    <Link
                      className="nav-link"
                      onClick={this.handleClick}
                      activeClass="active"
                      to="skills"
                      spy={true}
                      smooth={true}
                      offset={_linkOffset}
                      duration={0}
                    >
                      {this.state._skills}
                    </Link>
                  </li>
                  <CanvasLine />
                  <li className="nav-item my-3">
                    <Link
                      className="nav-link"
                      onClick={this.handleClick}
                      activeClass="active"
                      to="contact"
                      spy={true}
                      smooth={true}
                      offset={_linkOffset}
                      duration={0}
                    >
                      {this.state._contact}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <nav className="navbar navbar-expand-md navtheme px-4">
            <div
              className="collapse navbar-collapse mx-auto  "
              style={{ width: "80%", display: "flex" }}
            >
              <Link
                className="navbar-brand mr-auto"
                activeClass="active"
                to="intro"
                spy={true}
                smooth={true}
                offset={_linkOffset}
                duration={0}
              >
                <img src={logo} alt=" " width="30" height="30"></img>
              </Link>

              <button
                className="navbar-toggler "
                type="button"
                onClick={this.handleClick}
              >
                <img src={exNav} alt=" " width="23" height="25"></img>
              </button>

              <div className="collapse navbar-collapse ">
                <ul className="mr-auto"></ul>
                <ul
                  className=" position-sticky custom-font-menu flex-row align-middle"
                  style={{ margin: "0px" }}
                >
                  <li className="nav-item active ">
                    <Link
                      className="nav-link"
                      activeClass="active"
                      to="profile"
                      spy={true}
                      smooth={true}
                      offset={_linkOffset}
                      duration={0}
                    >
                      Introduce
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      activeClass="active"
                      to="education"
                      spy={true}
                      smooth={true}
                      offset={_linkOffset}
                      duration={0}
                    >
                      {this.state._education}
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      activeClass="active"
                      to="experience"
                      spy={true}
                      smooth={true}
                      offset={_linkOffset}
                      duration={0}
                    >
                      {this.state._experience}
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      activeClass="active"
                      to="skills"
                      spy={true}
                      smooth={true}
                      offset={_linkOffset}
                      duration={0}
                    >
                      {this.state._skills}
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      activeClass="active"
                      to="contact"
                      spy={true}
                      smooth={true}
                      offset={_linkOffset}
                      duration={0}
                    >
                      {this.state._contact}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default Nav1;
