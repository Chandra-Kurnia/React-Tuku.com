import React, { Fragment, useState } from "react";
import { Navbar } from "../../../components/modules/Navbar/Navbar";
import { useParams } from "react-router";
import image from "../../../assets/images/products/img-p-1.jpg";
import { ImageProductGallery } from "../../../components/base/imageProductGallery/ImageProductGallery";
// eslint-disable-next-line no-unused-vars
import style from "./ShowProduct.module.css";
import { ColorPicker } from "../../../components/base/ColorPicker/ColorPicker";
import { ButtonCount } from "../../../components/base/ButtonCount/ButtonCount"

export const ShowProduct = () => {
  const { id } = useParams();
  const [count, setCount] = useState(1);

  const handlePlusCount = () =>{
      setCount(count + 1)
  }
  const handleMinusCount = () =>{
      if(count < 2){
        setCount(1)
      }else{
          setCount(count - 1)
      }
  }
  return (
    <Fragment>
      <Navbar />
      <div className="container">
        <span className="d-inline-block mt-5 mb-5">
          <a href="/">Home</a> &#62; Category &#62; <b>{id}</b>
        </span>
        <div className="row">
          <div className="col-lg-4">
            <div className={`row image-product-main`}>
              <img src={image} className="rounded" alt="" />
            </div>
            <div className={`row image-product-small`}>
              <div className={`gallery d-flex justify-content-between`}>
                <ImageProductGallery srcImage={image} />
                <ImageProductGallery srcImage={image} />
                <ImageProductGallery srcImage={image} />
                <ImageProductGallery srcImage={image} />
                <ImageProductGallery srcImage={image} />
              </div>
            </div>
          </div>
          <div className="col-8">
            <div className="row">
              <span>
                <h3>Tittle Product</h3>
              </span>
              <span className={`fw-bold gray`}>Shop</span>
              <div className="d-flex">
                <span className={`fa fa-star pe-1 starChecked`}></span>
                <span className={`fa fa-star pe-1 starChecked`}></span>
                <span className={`fa fa-star pe-1 starChecked`}></span>
                <span className={`fa fa-star pe-1 starChecked`}></span>
                <span className={`fa fa-star pe-1 starChecked`}></span>
                <span className="fs-6">(10)</span>
              </div>
            </div>
            <div className="row">
              <span className="fw-bold gray">Price</span>
              <span className={`fs-2 ${style.price}`}>$ 20.0</span>
            </div>
            <div className="row pt-5">
              <span className={`pb-3 ${style.color}`}>Color</span>
              <div className="d-flex">
                <ColorPicker color="Black" type="radio"/>
                <ColorPicker color="Primary" type="radio"/>
                <ColorPicker color="darkBlue" type="radio"/>
                <ColorPicker color="lightGreen" type="radio"/>
              </div>
            </div>
            <div className="row w-50 pt-3">
              <div className="col">
                <span className={`${style.size} fw-bold`}>Size</span>
              </div>
              <div className="col">
                <span className={`${style.quantity} fw-bold`}>Quantity</span>
                <ButtonCount count={count} plus={() => handlePlusCount()} minus={() => handleMinusCount()}/>
              </div>
            </div>
            <div className="row pt-5">
              <div className="pt-5 d-flex justify-content-between">
                <div className="col-3 pe-2">
                  <button className="btn btn-outline-secondary rounded-pill w-100">Chat</button>
                </div>
                <div className="col-3 pe-2">
                <button className="btn btn-outline-secondary rounded-pill w-100">Add</button>
                </div>
                <div className="col-6 pe-2">
                <button className={`btn btn-outline-secondary rounded-pill w-100 ${style.btnBuy}`}>Buy</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
