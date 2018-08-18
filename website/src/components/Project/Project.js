import React, { Component } from 'react';
import { Footer } from '../Footer/Footer'
import { InfoModal } from './InfolModal/InfoModal'
import { DeveloperList } from './DeveloperList/DeveloperList'
import './Project.css';

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      isModalOpen: false,
      selectedInfo: {}
    };
    this.setSelectedInfo = this.setSelectedInfo.bind(this)
  }

  closeModal = () => {
    this.setState({
      isModalOpen: false
    });
  }

  setSelectedInfo = (data) => {
    this.setState({
      selectedInfo: data,
      isModalOpen: true
    })
  }

  render() {
    return (
      <section className="project-section">
        <InfoModal
          show={this.state.isModalOpen}
          selectedInfo={this.state.selectedInfo}
          onClose={this.closeModal}>
        </InfoModal>
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
          <DeveloperList setSelectedInfo={this.setSelectedInfo}></DeveloperList>
        </div>
        <Footer></Footer>
      </section>
    );
  }
}
  
export { Project };
