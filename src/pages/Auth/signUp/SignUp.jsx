import React from "react";
import "../../../css/auth.css";
import { LoginLogos } from "../../../components/base/LoginLogos/LoginLogos";
import { LoginSwitch } from "../../../components/base/LoginSwitch/LoginSwitch";
import { ButtonAuth } from "../../../components/base/ButtonAuth/ButtonAuth";
import { AuthInput } from "../../../components/base/AuthInput/AuthInput";
import { useState } from "react";

export const SignUp = () => {
  const [radioValue, setradioValue] = useState([]);
  const changeValueRadio = (e) => {
    setradioValue(e.target.value);
  };
  if (radioValue === "seller") {
    return (
      <div className="container mt-5 text-center container-auth">
        <LoginLogos />
        <span className="mt-5 fw-bold">Please Sign up with your account</span>
        <LoginSwitch switch={(e) => changeValueRadio(e)} />
        <AuthInput placeholder="Name" name="name" />
        <AuthInput placeholder="Email" name="email" />
        <AuthInput placeholder="Phone Number" name="phoneNumber" />
        <AuthInput placeholder="Store Name" name="storeName" />
        <AuthInput placeholder="Password" type="password" name="password" />
        <ButtonAuth text="LOGIN" />
        <span className="d-block mt-4 link-regist">
          Already have a Tuku.com account ? <a href={"./login"}>Login</a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="container mt-5 text-center container-auth">
        <LoginLogos />
        <span className="mt-5 fw-bold">Please Sign up with your account</span>
        <LoginSwitch switch={(e) => changeValueRadio(e)} />
        <AuthInput placeholder="Name" name="name" />
        <AuthInput placeholder="Email" name="email" />
        <AuthInput placeholder="Password" type="password" name="password" />
        <ButtonAuth text="LOGIN" />
        <span className="d-block mt-4 link-regist">
          Already have a Tuku.com account ? <a href={"./login"}>Login</a>
        </span>
      </div>
    );
  }
};
