import React, { Fragment } from "react";
import { Navbar } from "../../../components/modules/Navbar/Navbar";
import { useParams } from "react-router";
import image from "../../../assets/images/products/img-p-1.jpg";
import { ImageProductGallery } from "../../../components/base/imageProductGallery/ImageProductGallery";
// eslint-disable-next-line no-unused-vars
import style from "./ShowProduct.module.css";
import { ColorPicker } from "../../../components/base/ColorPicker/ColorPicker";

export const ShowProduct = () => {
  const { id } = useParams();
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
              <span className={style.color}>Color</span>
              <div className="d-flex">
                <ColorPicker color="Black" type="radio"/>
                <ColorPicker color="Primary" type="radio"/>
                <ColorPicker color="darkBlue" type="radio"/>
                <ColorPicker color="lightGreen" type="radio"/>
              </div>
            </div>
            <div className="row w-25">
              <div className="col">size</div>
              <div className="col">Quantity</div>
            </div>
            <div className="row">
              <span>
                <button className="btn">1</button>
                <button className="btn">2</button>
                <button className="btn">3</button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
