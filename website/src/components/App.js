import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { NavigationBar } from './navigationBar/NavigationBar'
import { Home } from './Home/Home';
import { Project } from './Project/Project';
import { About } from './About/About';

const baseUrl = '/awsome-women-in-tech'
const routes = [
  {
    path: `${baseUrl}/`,
    exact: true,
    main: () => <Home></Home>
  },
  {
    path: `${baseUrl}/project`,
    main: () => <Project></Project>
  },
  {
    path: `${baseUrl}/about`,
    main: () => <About></About>
  }
];

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavigationBar></NavigationBar>
            <div className="wrapper">
              {routes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  component={route.main}
                  />
                ))}
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
