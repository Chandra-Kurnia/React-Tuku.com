import React, { Fragment, useEffect } from "react";
import { NavbarLogin } from "../../../components/modules/NavbarLogin/NavbarLogin";
import { useParams } from "react-router";
// eslint-disable-next-line no-unused-vars
import style from "./ShowByCategory.module.css";
import { Card } from "../../../components/modules/Cards/Card";
import { showProductByCategory } from "../../../config/redux/actions/productAction";
import { useDispatch, useSelector } from "react-redux";

export const ShowByCategory = () => {
  const dispatch = useDispatch()
  const { category } = useParams();

  useEffect(() => {
    dispatch(showProductByCategory(category))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { products } = useSelector((state) => state.product);

  return (
    <Fragment>
      <NavbarLogin />
      <div className="container mt-5">
        <span className="d-inline-block mb-5">
          <a href="/">Home</a> &#62; Category &#62; <b>{category}</b>
        </span>
        <h1 className="fw-bold">{category}</h1>
        <div className="cards d-flex flex-wrap">
        {products ? products.map((product) => (
            <Card
              key={product.id_product}
              id={product.id_product}
              title={product.product_name}
              src={product.image}
              price={product.price}
              store={product.store_name}
            />
          )) : "products Not Found"}
        </div>
      </div>
    </Fragment>
  );
};
