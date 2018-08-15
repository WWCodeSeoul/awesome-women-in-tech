import React, { Component } from 'react';
import { Footer } from '../Footer/Footer'
import { DeveloperList } from './DeveloperList/DeveloperList'
import './Project.css';

class Project extends Component {
  render() {
    return (
      <section className="project-section">
        <div className="column-one">
          <div className="title-wrapper">
            <div className="title-text-wrapper">
              <div className="title-a">
                당신을<br/>
                알려주세요!
              </div>
            </div>
            <div className="description-wrapper">
              <div className="description-a">
                어떤 개발자인지, 어떤 사람인지<br/>
                일하고 있는 당신을 모두에게 알려주세요!
              </div>
            </div>
          </div>
        </div>
        <div className="column-two">
          <DeveloperList></DeveloperList>
        </div>
        <Footer></Footer>
      </section>
    );
  }
}
  
export { Project };
