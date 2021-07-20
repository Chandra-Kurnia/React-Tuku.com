import React, { Fragment } from "react";
import style from "./SliderCategory.module.css";
import { Link } from "react-router-dom";

export const SliderItemCategory = (props) => {
  return (
    <Fragment>
      <Link to={`/category/${props.category}`}>
        <div
          className={`me-3 ${style.caroItem} ${props.color || "bg-secondary"}`}
        >
          <img src={props.src} alt="" />
          <span className={style.text}>{props.text || "No Tittle"}</span>
        </div>
      </Link>
    </Fragment>
  );
};
