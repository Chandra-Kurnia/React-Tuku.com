import React from "react";
import style from "./loginLogos.module.css";
import logo from "../../../assets/icon/logo.svg";

export const LoginLogos = () => {
  return (
    <div>
      <div className="logos pb-3">
        <img src={logo} alt="" className={style.logoLogin} />
        <span className={style.storeTittle}>Tuku</span>
      </div>
    </div>
  );
};
