import React from "react";
import './header.css'
import Icon from "./molecules/icon";

const Header = () => {
    return (
      <nav className="navbar">
        <div className="navbar-container">
          <a href="/" className="navbar-logo">
            <img className="li-logo" src="/assets/LI-In-Bug.png"/>
          </a>
          <div className="nav-buttons">
            <ul className="nav-menu">
              <li className="nav-item">
              <Icon title="Home" icon="fa-house" />
              </li>
              <li className="nav-item">
              <Icon title="My Network" icon="fa-user-group" />
              </li>
              <li className="nav-item">
              <Icon title="Jobs" icon="fa-briefcase" />
              </li>
            </ul>
            <button className="nav-button"><Icon title="Profile" icon="fa-user"></Icon></button>
            <button className="nav-button"></button>
          </div>
        </div>
      </nav>
    );
};

export default Header;