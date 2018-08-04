import React, { Component } from 'react';
import './NavigationBar.css';
// import './NavigationBar.css';
import { Link } from "react-router-dom";

class NavigationBar extends Component {
  render() {
    return (
      <nav className="Navigation-bar">
        <ul className="navbar-item-wrapper">
          <li className="navbar-item">
            <Link to="/">
              WWCODESEOUL
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/project">
              P.WWCODESEOUL
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/about">
              ABOUT
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export {NavigationBar};
