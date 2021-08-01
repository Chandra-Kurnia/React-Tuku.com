import React, { Fragment, useState, useEffect } from "react";
import { NavbarLogin } from "../../../components/modules/NavbarLogin/NavbarLogin";
// eslint-disable-next-line no-unused-vars
import style from "./ShowByCategory.module.css";
import { Card } from "../../../components/modules/Cards/Card";
import axios from "axios";
import { useLocation } from "react-router";
import qs from 'query-string'

export const SearchProduct = () => {
  const loc = useLocation()
  const {keyword} = qs.parse(loc.search)
  const [data, setData] = useState([]);

  const getAllData = () => {
    axios
      .get(`http://localhost:4000/product?keyword=${keyword}`)
      .then((response) => {
        setData(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAllData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keyword]);

  console.log(data);

  return (
    <Fragment>
      <NavbarLogin />
      <div className="container mt-5">
        <span className="d-inline-block mb-5">
          <a href="/">Home</a> &#62; Search &#62; <b>{keyword}</b>
        </span>
        <h1 className="fw-bold">{}</h1>
        <div className="cards d-flex flex-wrap">
        {data ? data.map((item) => (
            <Card
              key={item.id_product}
              id={item.id_product}
              title={item.product_name}
              src={item.image}
              price={item.price}
              store={item.store_name}
            />
          )) : "Data not found"}
        </div>
      </div>
    </Fragment>
  );
};
