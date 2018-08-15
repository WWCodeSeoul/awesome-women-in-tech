import React, { Component } from 'react';
import { ImageSlider } from './ImageSlider/ImageSlider'
import { Footer } from '../Footer/Footer';

import './Home.css';

class Home extends Component {
  render() {
    return (
      <section className="home-section">
        <div className="column-one">
          <div className="title-wrapper">
            <div className="title-text-wrapper">
              <div className="title-a">
                당신은
              </div>
              <div className="title-b">
                <div className="blank-left-box"></div>
                <div className="blank-underline-box"></div>
                <div className="blank-right-box"></div>
              </div>
              <div className="title-c">
                개발자인가요?
              </div>
            </div>
            <div className="description-wrapper">
              <div className="description-a">
                당신이 어떤 개발자인지,<br/>
                당신의 커리어를 설명해야할 그 자리에<br/>
                항상 '여성'이란 수식어만 남지 않았나요?<br/>
              </div>
              <div className="description-b">
                우리는 코딩하는 <span>여성</span> 개발자입니다.
              </div>
            </div>
          </div>
        </div>
        <div className="column-two">
          <div className="column-content-wrapper">
            <ImageSlider></ImageSlider>
            <div className="title-text">
              WOMEN<br/>WHO<br/>CODE
            </div>
            <div className="cohort-name">
              @SEOUL<br/>
              SOUTH KOREA
            </div>
          </div>
        </div>
        <div className="blank-column">
          <Footer></Footer>
        </div>
      </section>
    );
  }
}
  
export { Home };
  