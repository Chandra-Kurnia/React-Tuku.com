import React from "react";
import Slider from "react-slick";
import { SliderItem } from "../../../base/SliderItem/SliderItem";
import style from "./Carousel.module.css";
import item1 from '../../../../assets/images/carousel/item1.jpg'
import item2 from '../../../../assets/images/carousel/item2.jpg'

export const Carousel = () => {
  const CarouselButtonNext = (props) => {
    const { onClick } = props;
    return (
      <div
        className={`d-flex align-items-center shadow ${style.btnNext}`}
        onClick={onClick}
      >
        <i className="fa fa-chevron-right d-block m-auto"></i>
      </div>
    );
  };

  const CarouselButtonPrev = (props) => {
    const { onClick } = props;
    return (
      <div
        className={`d-flex align-items-center shadow ${style.btnPrev}`}
        onClick={onClick}
      >
        <i className="fa fa-chevron-left d-block m-auto"></i>
      </div>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2.7,
    slidesToScroll: 1,
    nextArrow: <CarouselButtonNext />,
    prevArrow: <CarouselButtonPrev />,
    appendDots: (dots) => (
      <div
        style={{
          position: "relative",
          left: 0,
        }}
      >
        <ul style={{ margin: "0px", top: "-20px", padding: "0px", position: "absolute", left: 0 }}> {dots} </ul>
      </div>
    ),
  };

  return (
    <div className="container mt-5">
      <Slider {...settings}>
        <SliderItem src={item1} text="Trends in 2020"/>
        <SliderItem src={item2} text="Black Edition"/>
        <SliderItem src={item1}/>
        <SliderItem src={item2}/>
        <SliderItem src={item2}/>
      </Slider>
    </div>
  );
};
