import React from "react";
import Slider from "react-slick";
import style from "./SliderCategory.module.css";
import { SliderItemCategory } from "../../../base/SliderCategory/SliderItemCategory";
import accesories from '../../../../assets/images/sliderCategory/acessories.png'
import Bagback from '../../../../assets/images/sliderCategory/Bagback.png'
import cap from '../../../../assets/images/sliderCategory/cap.png'
import dress from '../../../../assets/images/sliderCategory/dress.png'
import formal from '../../../../assets/images/sliderCategory/formal.png'
import glasses from '../../../../assets/images/sliderCategory/glasses.png'
import HandBag from '../../../../assets/images/sliderCategory/HandBag.png'
import highH from '../../../../assets/images/sliderCategory/highH.png'
import jacket from '../../../../assets/images/sliderCategory/jacket.png'
import pants from '../../../../assets/images/sliderCategory/pants.png'
import shoes from '../../../../assets/images/sliderCategory/shoes.png'
import socks from '../../../../assets/images/sliderCategory/socks.png'
import sorts from '../../../../assets/images/sliderCategory/sorts.png'
import tShirt from '../../../../assets/images/sliderCategory/t-shirt.png'
import tie from '../../../../assets/images/sliderCategory/tie.png'
import Wriswatch from '../../../../assets/images/sliderCategory/Wriswatch.png'

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
    responsive: [
      {
        breakpoint: 576,
        settings:
        {
          slidesToShow: 1.4,
          arrows: false,
          centermode: true,
        }
      }
    ]
  };

  return (
    <div className="container mt-2 mb-5 p-0">
      <Slider {...settings}>
        <SliderItemCategory color="colorDarkPrimary" src={tShirt} text="T-Shirt" category="t-shirt"/>
        <SliderItemCategory color="colordarkBlue" src={sorts} text="Shorts" category="Shorts"/>
        <SliderItemCategory color="gold" src={jacket} text="Jacket" category="jacket"/>
        <SliderItemCategory color="darkPink" src={pants} text="Pants" category="Pants"/>
        <SliderItemCategory color="blueGreen" src={shoes} text="Shoes" category="Shoes"/>
        <SliderItemCategory color="violetBlue" src={highH} text="High heels" category="High Heels"/>
        <SliderItemCategory color="lemon" src={Wriswatch} text="Wristwatch" category="Wriswatch"/>
        <SliderItemCategory color="blueGreen" src={HandBag} text="Handbag" category="Handbag"/>
        <SliderItemCategory color="violet" src={Bagback} text="Bagback" category="Bagback"/>
        <SliderItemCategory color="darkPink" src={socks} text="Socks" category="Socks"/>
        <SliderItemCategory color="blueBlur" src={glasses} text="Glasses" category="Glasses"/>
        <SliderItemCategory color="greenLeave" src={cap} text="Cap" category="Cap"/>
        <SliderItemCategory color="yellowBlur" src={tie} text="Tie" category="Tie"/>
        <SliderItemCategory color="darkPink" src={dress} text="Dress" category="Dress"/>
        <SliderItemCategory color="skyBlue" src={formal} text="Formal suit" category="Formal Suit"/>
        <SliderItemCategory color="redBlur" src={accesories} text="Accessories" category="Accessories"/>
      </Slider>
    </div>
  );
};
