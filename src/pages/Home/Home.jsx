import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card } from "../../components/modules/Cards/Card";
import { Carousel } from "../../components/modules/Slider/Carousel/Carousel";
import { SliderCategory } from "../../components/modules/Slider/SliderCategory/SliderCategory";
import { getProduct } from "../../config/redux/actions/productAction";
require("dotenv").config();

export const Home = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProduct());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const { products } = useSelector((state) => state.product);
  return (
    <div>
      <Carousel />
      <section className="container mt-5">
        <h2 className="fw-bold">Category</h2>
        <span>What are you currently looking for</span>
        <SliderCategory />
        <h2 className="fw-bold">New</h2>
        <span>You've never seen it before!</span>
        <div className="cards d-flex flex-wrap">
          {products && products.map((product) => (
            <Card
              key={product.id_product}
              id={product.id_product}
              title={product.product_name}
              src={product.image}
              price={product.price}
              store={product.store_name}
            />
          ))}
        </div>
      </section>
    </div>
  );
};
