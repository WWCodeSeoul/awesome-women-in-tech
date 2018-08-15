import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { AnimatedRoute } from 'react-router-transition';

import { NavigationBar } from './navigationBar/NavigationBar'
import { Home } from './Home/Home';
import { Project } from './Project/Project';
// import { About } from './About/About';

import './Reset.css'
import './App.css'

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
  }
  // {
  //   path: `${baseUrl}/about`,
  //   main: () => <About></About>
  // }
];

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="logo-wrapper">
            <a className="logo" 
               href="https://wwcodeseoul.github.com/awsome-women-in-tech">
               AWSOME<br/>
               WOMEN<br/>
               IN<br/>
               TECH<br/>
            </a>
          </div>
          <NavigationBar></NavigationBar>
            <div className="ContentWrapper">
              {routes.map((route, index) => (
                <AnimatedRoute
                  atEnter={{ offset: index === 0 ? -100 : index === routes.length-1 ? 100 : 100 }}
                  atLeave={{ offset: index === 0 ? -100 : index === routes.length-1 ? 100 : -100 }}
                  atActive={{ offset: 0 }}
                  mapStyles={(styles) => ({
                    transform: `translateY(${styles.offset}%)`,
                  })}
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
