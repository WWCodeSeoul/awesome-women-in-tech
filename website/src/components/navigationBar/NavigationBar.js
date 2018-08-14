import React, { Component } from 'react';
import './NavigationBar.css';

import { Link } from "react-router-dom";
const baseUrl = '/awsome-women-in-tech'

class NavigationBar extends Component {
  render() {
    return (
      <nav className="Navigation-bar">
        <ul className="navbar-item-wrapper">
          <li className="navbar-item">
            <Link to={`${baseUrl}/`}>
              Main
            </Link>
          </li>
          <li className="navbar-item">
            <Link to={`${baseUrl}/project`}>
              Project
            </Link>
          </li>
          <li className="navbar-item">
            <Link to={`${baseUrl}/about`}>
              ABOUT
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export {NavigationBar};
