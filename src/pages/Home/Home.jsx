import React, { useEffect, useState } from "react";
import { Card } from "../../components/modules/Cards/Card";
import { Navbar } from "../../components/modules/Navbar/Navbar";
import { Carousel } from "../../components/modules/Slider/Carousel/Carousel";
import axios from "axios";
import { SliderCategory } from "../../components/modules/Slider/SliderCategory/SliderCategory";
require('dotenv').config();


export const Home = (props) => {
  const [data, setData] = useState([]);
  const getAllData = () => {
    axios
      .get(process.env.REACT_APP_SERVER_URL)
      .then((response) => {
        // setData(response.data)
        setData(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAllData();
  }, []);
  return (
    <div>
      <Navbar history={props.history}/>
      <Carousel />
      <section className="container mt-5">
        <h2 className="fw-bold">Category</h2>
        <span>What are you currently looking for</span>
      <SliderCategory/>
        <h2 className="fw-bold">New</h2>
        <span>You've never seen it before!</span>
        <div className="cards d-flex flex-wrap">
          {data.map((item) => (
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
        {/* <h2 className="fw-bold">Popular</h2>
                <span>You've never seen it before!</span>
                <div className="cards d-flex flex-wrap">
                <Card/>
                </div> */}
      </section>
    </div>
  );
};
