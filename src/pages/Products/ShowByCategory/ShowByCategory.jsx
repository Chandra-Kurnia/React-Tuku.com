import React, { Fragment, useState, useEffect } from "react";
import { NavbarLogin } from "../../../components/modules/NavbarLogin/NavbarLogin";
import { useParams } from "react-router";
// eslint-disable-next-line no-unused-vars
import style from "./ShowByCategory.module.css";
import { Card } from "../../../components/modules/Cards/Card";
import axios from "axios";

export const ShowByCategory = () => {
  const { category } = useParams();
  const [data, setData] = useState([]);
  const getAllData = () => {
    axios
      .get(`http://localhost:4000/product/category/${category}`)
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

  console.log(data);

  return (
    <Fragment>
      <NavbarLogin />
      <div className="container mt-5">
        <span className="d-inline-block mb-5">
          <a href="/">Home</a> &#62; Category &#62; <b>{category}</b>
        </span>
        <h1 className="fw-bold">{category}</h1>
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
          )) : "Data Not Found"}
        </div>
      </div>
    </Fragment>
  );
};
