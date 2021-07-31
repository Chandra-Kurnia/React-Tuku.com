import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card } from "../../components/modules/Cards/Card";
import { Navbar } from "../../components/modules/Navbar/Navbar";
import { Carousel } from "../../components/modules/Slider/Carousel/Carousel";
import axios from "axios";
import { SliderCategory } from "../../components/modules/Slider/SliderCategory/SliderCategory";
import getProduct from "../../config/redux/actions/productAction";
require("dotenv").config();

export const Home = (props) => {
  const [data, setData] = useState([]);
  // const getAllData = () => {
  //   axios
  //     .get(process.env.REACT_APP_SERVER_URL)
  //     .then((response) => {
  //       setData(response.data.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };
  const dispatch = useDispatch();

  useEffect(() => {
    // getAllData();
    dispatch(getProduct());
  }, []);

  const { products } = useSelector((state) => state.product);

  return (
    <div>
      <Navbar history={props.history} />
      <Carousel />
      <section className="container mt-5">
        <h2 className="fw-bold">Category</h2>
        <span>What are you currently looking for</span>
        <SliderCategory />
        <h2 className="fw-bold">New</h2>
        <span>You've never seen it before!</span>
        <div className="cards d-flex flex-wrap">
          {products.map((product) => (
            <Card
              key={product.id_product}
              id={product.id_product}
              title={product.product_name}
              src={product.image}
              price={product.price}
              store={product.store_name}
            />
          ))}
          {/* {products.map((product) => (
            <Card title={product.name} />
            console.log(product.product_name)
          ))} */}
        </div>
        {/* <h2 className="fw-bold">Popular</h2>
                <span>You've never seen it before!</span>
                <div className="cards d-flex flex-wrap">
                <Card/>
                </div> */}
      </section>
    </div>
  );
};
