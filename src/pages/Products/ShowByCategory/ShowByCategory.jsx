import React, { Fragment } from "react";
import { NavbarLogin } from "../../../components/modules/NavbarLogin/NavbarLogin";
import { useParams } from "react-router";
// eslint-disable-next-line no-unused-vars
import style from "./ShowByCategory.module.css";
import { Card } from "../../../components/modules/Cards/Card";

export const ShowByCategory = () => {
  const { category } = useParams();
  return (
    <Fragment>
      <NavbarLogin />
      <div className="container mt-5">
        <span className="d-inline-block mb-5">
          <a href="/">Home</a> &#62; Category &#62; <b>{category}</b>
        </span>
        <h1 className="fw-bold">{category}</h1>
        <div className="cards d-flex flex-wrap">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </Fragment>
  );
};
