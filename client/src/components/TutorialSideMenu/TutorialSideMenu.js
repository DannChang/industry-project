import "./TutorialSideMenu.scss";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/images/Logo/logo.svg";
import Radiobutton from "../../assets/images/Icons/radio-unselected.svg";
import dots from "../../assets/images/Icons/connectingdots.svg";

import React, { Component } from "react";

class TutorialSideMenu extends Component {
  render() {
    return (
      <div>
        <>
          <section className="side-menu">
            <div>
              <NavLink to="/">
                <img className="side-menu__logo" src={Logo} alt="Logo" />
              </NavLink>
              <div className="side-menu__welcome-container">
                <h1 className="side-menu__title">Welcome!</h1>
              </div>
              <div className="side-menu__basics-container">
                <h1 className="side-menu__title">LEARN THE BASICS</h1>
                <NavLink className="side-menu__link-basics" to="/">
                  <img
                    className="side-menu__link-basics"
                    src={Radiobutton}
                    alt="Radiobutton"
                  />
                  <h4>Moving around</h4>
                </NavLink>
                <Link className="side-menu__link-basics" to="/">
                  <img
                    className="side-menu__link-basics"
                    src={Radiobutton}
                    alt="Radiobutton"
                  />
                  <h4>Interact with others</h4>
                </Link>
                <Link className="side-menu__link-basics" to="/">
                  <img
                    className="side-menu__link-basics"
                    src={Radiobutton}
                    alt="Radiobutton"
                  />
                  <h4>Play mini game</h4>
                </Link>
              </div>
              <div className="side-menu__onboarding-container">
                <h1 className="side-menu__title">ONBOARDING</h1>
                <Link className="side-menu__link-onboarding" to="/">
                  <img
                    className="side-menu__link-onboarding"
                    src={Radiobutton}
                    alt="Radiobutton"
                  />
                  <h4>Workplace Culture</h4>
                </Link>
                <img className="dots" src={dots} />
                <Link className="side-menu__link-onboarding" to="/">
                  <img
                    className="side-menu__link-onboarding"
                    src={Radiobutton}
                    alt="Radiobutton"
                  />
                  <h4>Mission & Values</h4>
                </Link>
                <img className="dots" src={dots} />
                <Link className="side-menu__link-onboarding" to="/">
                  <img
                    className="side-menu__link-onboarding"
                    src={Radiobutton}
                    alt="Radiobutton"
                  />
                  <h4>Roles & Responsibilities</h4>
                </Link>
                <img className="dots" src={dots} />
                <Link className="side-menu__link-onboarding" to="/">
                  <img
                    className="side-menu__link-onboarding"
                    src={Radiobutton}
                    alt="Radiobutton"
                  />
                  <h4>Health & Safety</h4>
                </Link>
              </div>
            </div>
          </section>
        </>
      </div>
    );
  }
}

export default TutorialSideMenu;
