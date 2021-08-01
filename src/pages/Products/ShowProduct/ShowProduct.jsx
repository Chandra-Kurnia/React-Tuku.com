import React, { Fragment, useState, useEffect } from "react";
import { Navbar } from "../../../components/modules/Navbar/Navbar";
import { useParams } from "react-router";
import { ImageProductGallery } from "../../../components/base/imageProductGallery/ImageProductGallery";
// eslint-disable-next-line no-unused-vars
import style from "./ShowProduct.module.css";
import { ColorPicker } from "../../../components/base/ColorPicker/ColorPicker";
import { ButtonCount } from "../../../components/base/ButtonCount/ButtonCount";
import { Card } from "../../../components/modules/Cards/Card";
import { useDispatch, useSelector } from "react-redux";
import {
  showProduct,
  showProductByCategory,
} from "../../../config/redux/actions/productAction";

export const ShowProduct = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [count, setCount] = useState(1);
  const { products, product } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(showProduct(id));
    dispatch(showProductByCategory(product.category));
  });

  const handlePlusCount = () => {
    if (count < product.quantity) {
      setCount(count + 1);
    } else {
      setCount(product.quantity);
    }
  };
  const handleMinusCount = () => {
    if (count < 2) {
      setCount(1);
    } else {
      setCount(count - 1);
    }
  };
  return (
    <Fragment>
      <Navbar />
      <div className="container">
        <span className="d-inline-block mt-5 mb-5">
          <a href="/">Home</a> &#62; Category &#62; <b>{product.category}</b>
        </span>
        <div className="row">
          <div className="col-lg-4">
            <div className={`row image-product-main`}>
              <img
                src={`http://localhost:4000/file/${product.image}`}
                className="rounded"
                alt=""
              />
            </div>
            <div className={`row image-product-small`}>
              <div className={`gallery d-flex justify-content-between`}>
                <ImageProductGallery
                  srcImage={`http://localhost:4000/file/${product.image}`}
                />
                <ImageProductGallery
                  srcImage={`http://localhost:4000/file/${product.image}`}
                />
                <ImageProductGallery
                  srcImage={`http://localhost:4000/file/${product.image}`}
                />
                <ImageProductGallery
                  srcImage={`http://localhost:4000/file/${product.image}`}
                />
                <ImageProductGallery
                  srcImage={`http://localhost:4000/file/${product.image}`}
                />
              </div>
            </div>
          </div>
          <div className="col-8">
            <div className="row">
              <span>
                <h3>{product.product_name}</h3>
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
              <span className={`fs-2 ${style.price}`}>Rp. {product.price}</span>
            </div>
            <div className="row pt-5">
              <span className={`pb-3 ${style.color}`}>Color</span>
              <div className="d-flex">
                <ColorPicker color="Black" type="checkbox" value={() => {}} />
                {/* <ColorPicker color="Primary" type="radio" value={() => {}} />
                <ColorPicker color="darkBlue" type="radio" value={() => {}}/>
                <ColorPicker color="lightGreen" type="radio" value={() => {}}/> */}
              </div>
            </div>
            <div className="row w-50 pt-3">
              <div className="col">
                <span className={`${style.size} fw-bold`}>Size</span>
                <br />
                <span className="fs-3">{product.size}</span>
              </div>
              <div className="col">
                <span className={`${style.quantity} fw-bold`}>Quantity</span>
                <ButtonCount
                  count={count}
                  plus={() => handlePlusCount()}
                  minus={() => handleMinusCount()}
                />
              </div>
            </div>
            <div className={`row pt-5 ${style.btnwrapp}`}>
              <div className="pt-5 d-flex justify-content-between">
                <div className="col-3 pe-2">
                  <button className="btn btn-outline-secondary rounded-pill w-100">
                    Chat
                  </button>
                </div>
                <div className="col-3 pe-2">
                  <button className="btn btn-outline-secondary rounded-pill w-100">
                    Add
                  </button>
                </div>
                <div className="col-6 pe-2">
                  <button
                    className={`btn btn-outline-secondary rounded-pill w-100 ${style.btnBuy}`}
                  >
                    Buy
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="mt-5">
          <h2>Informasi Product</h2>
          <span className="mt-3 fw-bold fs-5">Condition</span>
          <br />
          <span style={{ color: "red" }} className="d-block mb-5">
            {product.status}
          </span>
          <span className="fw-bold fs-5">Description</span>
          <p>{product.description}</p>
          <span className="mt-3 fw-bold fs-5">Product Review</span>
          <hr />
          <h2 className="fw-bold">You can also like this</h2>
          <span className="text-secondary">You’ve never seen it before!</span>
          <div className="cards d-flex flex-wrap">
            {products &&
              products.map((item) => (
                <Card
                  key={item.id_product}
                  id={item.id_product}
                  title={item.product_name}
                  src={item.image}
                  price={item.price}
                  store={item.store_name}
                />
              ))}
          </div>
        </section>
      </div>
    </Fragment>
  );
};
