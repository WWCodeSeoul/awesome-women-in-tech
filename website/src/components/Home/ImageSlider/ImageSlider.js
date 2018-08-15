import React, { Component } from 'react';
import Slider from "react-slick";

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ImageSlider.css';

class ImageSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      accessibility: false,
      arrows: false,
      autoplay: true,
      speed: 500,
      autoplaySpeed: 10000
    };
    return (
      <Slider {...settings}>
        <div className="image-container image-a"></div>
        <div className="image-container image-b"></div>
      </Slider>
    );
  }
}

export { ImageSlider }