import React from "react";
import "../../../css/auth.css";
import { LoginLogos } from "../../../components/base/LoginLogos/LoginLogos";
import { ButtonAuth } from "../../../components/base/ButtonAuth/ButtonAuth";
import { AuthInput } from "../../../components/base/AuthInput/AuthInput";

export const ConfirmPassword = () => {
  return (
    <div className="container mt-5 text-center container-auth">
      <LoginLogos />
      <span className="mt-5 fw-bold">Reset Password</span>
      <br />
      <span className="mt-5 small text-danger">You need to change your password to activate your account</span>
      <section className="mt-3"></section>
      <AuthInput placeholder="Password" name="password" type="password" />
      <AuthInput placeholder="Confirmation New Password" name="confirmPassword" type="password" />
      <section className="mt-2"></section>
      <span className="forgot-pw d-block pe-3 mb-5">
        <a href={"/login"}>Forgot Password ?</a>
      </span>
      <ButtonAuth text="RESET PASSWORD" />
    </div>
  );
};
