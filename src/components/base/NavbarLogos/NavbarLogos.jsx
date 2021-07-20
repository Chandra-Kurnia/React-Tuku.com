import React from "react";
import logos from "../../../assets/icon/logo.svg";
import style from "./NavbarLogos.module.css";
import { Link } from "react-router-dom";

export const NavbarLogos = () => {
  return (
    <div className=" d-flex">
      <Link to="/">
        <img src={logos} alt="" className={style.logo} />
        <span className={style.textLogo}>Tuku.com</span>
      </Link>
    </div>
  );
};
