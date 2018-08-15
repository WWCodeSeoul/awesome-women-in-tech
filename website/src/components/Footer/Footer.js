import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <footer className="Footer">
        <div className="copyrights">
          <span>COPYRIGHT©2018 WOMEN WHO CODE SEOUL ALL RIGHTS RESERVED</span>
          <span className="icon icon-facebook"></span><span className="icon icon-github"></span>
        </div>
      </footer>
    );
  }
}

export {Footer};
