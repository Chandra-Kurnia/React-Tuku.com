import React from "react";
import "../../../css/auth.css";
import { LoginLogos } from "../../../components/base/LoginLogos/LoginLogos";
import { ButtonAuth } from "../../../components/base/ButtonAuth/ButtonAuth";
import { AuthInput } from "../../../components/base/AuthInput/AuthInput";

export const ForgotPassword = () => {
  return (
    <div className="container mt-5 text-center container-auth">
      <LoginLogos />
      <span className="mt-5 fw-bold">Reset Password</span>
      <section className="mt-5"></section>
      <AuthInput placeholder="Email" name="email" />
      <section className="mt-2"></section>
      <span className="forgot-pw d-block pe-3 mb-5">
        <a href={"/login"}>Forgot Password ?</a>
      </span>
      <ButtonAuth text="SEND" />
      <span className="d-block mt-4 link-regist">
        Dont have a Tuku Account ? <a href={"./signup"}>Register</a>
      </span>
    </div>
  );
};
