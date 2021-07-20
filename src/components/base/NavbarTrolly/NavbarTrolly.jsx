import React from "react";
import { Link } from "react-router-dom";
import style from "./NavbarTrolly.module.css";

export const NavbarTrolly = (props) => {
  return (
    <div className={`${props.margin || "me-5"} ${style.trolly}`}>
      <Link to={props.href}>
        <i className="fa fa-shopping-cart"></i>
      </Link>
    </div>
  );
};
