import React, { Fragment, useEffect } from "react";
import { NavbarLogin } from "../../../components/modules/NavbarLogin/NavbarLogin";
// eslint-disable-next-line no-unused-vars
import style from "./ShowByCategory.module.css";
import { Card } from "../../../components/modules/Cards/Card";
import { useLocation } from "react-router";
import qs from 'query-string'
import { useDispatch, useSelector } from "react-redux";
import { searchProduct } from "../../../config/redux/actions/productAction";

export const SearchProduct = () => {
  const dispatch = useDispatch()
  const loc = useLocation()
  const {keyword} = qs.parse(loc.search)

  const { products } = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(searchProduct(keyword))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keyword]);

  return (
    <Fragment>
      <NavbarLogin />
      <div className="container mt-5">
        <span className="d-inline-block mb-5">
          <a href="/">Home</a> &#62; Search &#62; <b>{keyword}</b>
        </span>
        <h1 className="fw-bold">{}</h1>
        <div className="cards d-flex flex-wrap">
        {products ? products.map((item) => (
            <Card
              key={item.id_product}
              id={item.id_product}
              title={item.product_name}
              src={item.image}
              price={item.price}
              store={item.store_name}
            />
          )) : "products not found"}
        </div>
      </div>
    </Fragment>
  );
};
