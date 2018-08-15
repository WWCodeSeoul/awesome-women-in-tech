import React, { Component } from 'react';
import { getProfileData } from './ProfileDataProcessor'
import './DeveloperList.css';

const profileData = getProfileData();

class DeveloperList extends Component {
  render() {
    return (
      <div className="developer-list-wrapper">
        {
          profileData.map((data, index) => {
            return (
              <div className="profile-wrapper" key={index} onClick={()=>{this.props.setSelectedInfo(data)}}>
                <div className="profile-description" dangerouslySetInnerHTML={{__html: data.Description}}></div>
                <div className="profile-divider"></div>
                <div className="profile-name">{data.Name}</div>
                <div className="profile-social">
                  {
                    data.Social.map(social => <a className={social.name} href={social.link} key={social.name}> </a>)
                  }
                </div>
              </div>
            )
          })
        }
      </div>
    );
  }
}
  
export { DeveloperList };
