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
                <Icon title="Homeabc" />
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link">
                  <i className="fa-solid fa-user-group icon"></i>
                  My Network
                </a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link">
                  <i className="fa-solid fa-briefcase icon"></i>
                  Jobs
                </a>
              </li>
            </ul>
            <button className="nav-button"></button>
            <button className="nav-button"></button>
          </div>
        </div>
      </nav>
    );
};

export default Header;