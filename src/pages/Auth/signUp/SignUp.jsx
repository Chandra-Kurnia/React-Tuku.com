import React from "react";
import "../../../css/auth.css";
import { LoginLogos } from "../../../components/base/LoginLogos/LoginLogos";
import { LoginSwitch } from "../../../components/base/LoginSwitch/LoginSwitch";
import { ButtonAuth } from "../../../components/base/ButtonAuth/ButtonAuth";
import { AuthInput } from "../../../components/base/AuthInput/AuthInput";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../../config/redux/actions/userAction";

export const SignUp = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    owner: '',
    name: '',
    email: '',
    phoneNumber: '',
    storeName:'',
    pass:'',
    roles: 'customer'
  })
  
  const handleForm = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }
  console.log(form)

  const [radioValue, setradioValue] = useState([]);
  const changeValueRadio = (e) => {
    setradioValue(e.target.value);
    setForm({
      ...form,
      roles: e.target.value
    })
  };

  const handleSignUp = () => {
    // alert(`owner ${form.owner}, name ${form.name}, email ${form.email}, Phone ${form.phoneNumber}, storename ${form.storeName}, pass ${form.pass}`)
    dispatch(register(form))
  }

  if (radioValue === "seller") {
    return (
      <div className="container mt-5 text-center container-auth">
        <LoginLogos />
        <span className="mt-5 fw-bold">Please Sign up with your account</span>
        <LoginSwitch switch={(e) => changeValueRadio(e)} />
        <AuthInput placeholder="Owner" name="owner" event={handleForm}/>
        <AuthInput placeholder="Email" name="email" event={handleForm}/>
        <AuthInput placeholder="Phone Number" name="phoneNumber" event={handleForm}/>
        <AuthInput placeholder="Store Name" name="storeName" event={handleForm}/>
        <AuthInput placeholder="Password" type="password" name="pass" event={handleForm}/>
        <ButtonAuth text="REGISTER" event={handleSignUp}/>
        <span className="d-block mt-4 link-regist">
          Already have a Tuku.com account ? <Link to={"./login"}>Login</Link>
        </span>
      </div>
    );
  } else {
    return (
      <div className="container mt-5 text-center container-auth">
        <LoginLogos />
        <span className="mt-5 fw-bold">Please Sign up with your account</span>
        <LoginSwitch switch={(e) => changeValueRadio(e)} />
        <AuthInput placeholder="Name" name="name" event={handleForm}/>
        <AuthInput placeholder="Email" name="email" event={handleForm}/>
        <AuthInput placeholder="Password" type="password" name="pass" event={handleForm}/>
        <ButtonAuth text="REGISTER" event={handleSignUp} />
        <span className="d-block mt-4 link-regist">
          Already have a Tuku.com account ? <Link to={"./login"}>Login</Link>
        </span>
      </div>
    );
  }
};
