import React from "react";
import { Link } from "react-router-dom";
import style from "./AccountHelper.module.css";
import logo from "../../../assets/icon/logo.svg";

export const AccountHelper = (props) => {
  return (
    <div className={style.wrapper}>
      <div className={`${style.reset} text-center`}>
        <div className="pt-5 pb-5">
          <img src={logo} alt="" className={style.logo} />
          <span class={style.textLogo}>Tuku</span>
        </div>
        <p className="fw-bold fs-4">{props.title}</p>
        <section>
          <img src={props.img} alt="" />
        </section>
        <br />
        <span>{props.msg}</span>
        <br />
        <Link to="/login" className={`btn rounded-pill mt-3 ${style.button}`}>{props.btnText}</Link>
        <div className={style.footer}>
        </div>
      </div>
    </div>
  );
};
