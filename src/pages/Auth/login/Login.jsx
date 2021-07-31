import React, { useState } from "react";
import { LoginLogos } from "../../../components/base/LoginLogos/LoginLogos";
import { LoginSwitch } from "../../../components/base/LoginSwitch/LoginSwitch";
import { ButtonAuth } from "../../../components/base/ButtonAuth/ButtonAuth";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {login} from "../../../config/redux/actions/userAction";

export const Login = () => {
  const dispatch = useDispatch()
  const [form, setForm] = useState({
    email: "",
    password: "",
    roles: "customer",
  });

  const handleForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleLogin = async () => {
    dispatch(login(form))
  }

  return (
    <div className="container mt-5 text-center container-auth">
      <LoginLogos />
      <span className="mt-5 fw-bold">Please Login with your account</span>
      <LoginSwitch switch={handleForm} />
      <div className={`input-group mb-3 mt-1 auth-input-wrapper w-100`}>
        <input
          type="email"
          name="email"
          className="form-control input-auth"
          placeholder="Email"
          aria-label="name"
          aria-describedby="basic-addon1"
          onChange={handleForm}
          required
        ></input>
      </div>
      <div className={`input-group mb-3 mt-1 auth-input-wrapper w-100`}>
        <input
          type="password"
          name="password"
          className="form-control input-auth"
          placeholder="password"
          aria-label="name"
          aria-describedby="basic-addon1"
          onChange={handleForm}
          required
        ></input>
      </div>
      <span className="forgot-pw d-block pe-3">
        <Link to={"/login"}>Forgot Password ?</Link>
      </span>
      <ButtonAuth text="LOGIN" event={handleLogin}/>
      <span className="d-block mt-4 link-regist">
        Dont have a Tuku Account ? <Link to={"./signup"}>Register</Link>
      </span>
    </div>
  );
};
