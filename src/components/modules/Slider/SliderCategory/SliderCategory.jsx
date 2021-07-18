import React from "react";
import Slider from "react-slick";
import style from "./SliderCategory.module.css";
import { SliderItemCategory } from "../../../base/SliderCategory/SliderItemCategory";
import item1 from '../../../../assets/images/carousel/item1.jpg'
import item2 from '../../../../assets/images/carousel/item2.jpg'

export const SliderCategory = () => {
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
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <CarouselButtonNext />,
    prevArrow: <CarouselButtonPrev />,
  };

  return (
    <div className="container mt-2 mb-5 p-0">
      <Slider {...settings}>
        <SliderItemCategory color="colorDarkPrimary" text="T-Shirt"/>
        <SliderItemCategory color="colordarkBlue" text="Shorts"/>
        <SliderItemCategory color="gold" text="Jacket"/>
        <SliderItemCategory color="darkPink" text="Pants"/>
        <SliderItemCategory color="blueGreen" text="Shoes"/>
        <SliderItemCategory color="violetBlue" text="High heels"/>
        <SliderItemCategory color="lemon" text="Wristwatch"/>
        <SliderItemCategory color="blueGreen" text="Handbag"/>
        <SliderItemCategory color="violet" text="Bagback"/>
        <SliderItemCategory color="darkPink" text="Socks"/>
        <SliderItemCategory color="blueBlur" text="Glasses"/>
        <SliderItemCategory color="greenLeave" text="Cap"/>
        <SliderItemCategory color="yellowBlur" text="Tie"/>
        <SliderItemCategory color="darkPink" text="Dress"/>
        <SliderItemCategory color="skyBlue" text="Formal suit"/>
        <SliderItemCategory color="redBlur" text="Accessories"/>
      </Slider>
    </div>
  );
};
