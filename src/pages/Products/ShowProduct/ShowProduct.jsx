import React, { Fragment, useState, useEffect } from "react";
import { Navbar } from "../../../components/modules/Navbar/Navbar";
import { useParams } from "react-router";
import image from "../../../assets/images/products/img-p-1.jpg";
import { ImageProductGallery } from "../../../components/base/imageProductGallery/ImageProductGallery";
// eslint-disable-next-line no-unused-vars
import style from "./ShowProduct.module.css";
import { ColorPicker } from "../../../components/base/ColorPicker/ColorPicker";
import { ButtonCount } from "../../../components/base/ButtonCount/ButtonCount";
import { Card, Cards } from "../../../components/modules/Cards/Card";
import axios from "axios";

export const ShowProduct = () => {
  const { id } = useParams();
  const [dataProduct, setData] = useState([]);
  const getData = () => {
    axios
      .get(`http://localhost:4000/product/show/${id}`)
      .then((response) => {
        // setData(response.data)
        setData(response.data.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(dataProduct);

  const [count, setCount] = useState(1);

  const handlePlusCount = () => {
    if (count < dataProduct.quantity) {
      setCount(count + 1);
    } else {
      setCount(dataProduct.quantity);
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
          <a href="/">Home</a> &#62; Category &#62;{" "}
          <b>{dataProduct.category}</b>
        </span>
        <div className="row">
          <div className="col-lg-4">
            <div className={`row image-product-main`}>
              <img src={dataProduct.image} className="rounded" alt="" />
            </div>
            <div className={`row image-product-small`}>
              <div className={`gallery d-flex justify-content-between`}>
                <ImageProductGallery srcImage={dataProduct.image} />
                <ImageProductGallery srcImage={dataProduct.image} />
                <ImageProductGallery srcImage={dataProduct.image} />
                <ImageProductGallery srcImage={dataProduct.image} />
                <ImageProductGallery srcImage={dataProduct.image} />
              </div>
            </div>
          </div>
          <div className="col-8">
            <div className="row">
              <span>
                <h3>{dataProduct.product_name}</h3>
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
              <span className={`fs-2 ${style.price}`}>
                $ {dataProduct.price}
              </span>
            </div>
            <div className="row pt-5">
              <span className={`pb-3 ${style.color}`}>Color</span>
              <div className="d-flex">
                <ColorPicker color="Black" type="radio" />
                <ColorPicker color="Primary" type="radio" />
                <ColorPicker color="darkBlue" type="radio" />
                <ColorPicker color="lightGreen" type="radio" />
              </div>
            </div>
            <div className="row w-50 pt-3">
              <div className="col">
                <span className={`${style.size} fw-bold`}>Size</span>
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
            <div className="row pt-5">
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
            {dataProduct.status}
          </span>
          <span className="fw-bold fs-5">Description</span>
          <p>{dataProduct.description}</p>
          <span className="mt-3 fw-bold fs-5">Product Review</span>
          <hr />
          <h2 className="fw-bold">You can also like this</h2>
          <span className="text-secondary">You’ve never seen it before!</span>
          <div className="cards d-flex flex-wrap">
            {/* {data.map((item) => (
              <Card
                key={item.id_product}
                id={item.id_product}
                title={item.product_name}
                src={item.image}
                price={item.price}
                store={item.store_name}
              />
            ))} */}
          </div>
        </section>
      </div>
    </Fragment>
  );
};
