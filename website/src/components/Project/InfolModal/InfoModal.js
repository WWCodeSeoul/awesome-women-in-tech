import React, { Component } from 'react';
import './InfoModal.css';

class InfoModal extends Component {

  render() {
    if(!this.props.show) {
      return null;
    }
    return (
      <div className="modal-wrapper">
        <div className="dimmed" onClick={this.props.onClose}></div>
        <div className="profile-detail-wrapper">
          <div className="profile-wrapper">
            <div className="profile-description" dangerouslySetInnerHTML={{__html: this.props.selectedInfo.Description}}></div>
            <div className="profile-divider"></div>
            <div className="profile-name">{this.props.selectedInfo.Name}</div>
            <div className="profile-social">
              {
                this.props.selectedInfo.Social.map(social => <a className={social.name} href={social.link} key={social.name}> </a>)
              }
            </div>
          </div>
          <div className="detail-wrapper">
            <div className="info-item info-location">
              <div className="info-title">
                Location
              </div>
              <div className="info-text">
                {this.props.selectedInfo.Location}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
  
export { InfoModal };
