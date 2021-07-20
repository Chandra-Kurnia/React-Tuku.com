import React, {useState} from "react";
import { LoginLogos } from "../../../components/base/LoginLogos/LoginLogos";
import { LoginSwitch } from "../../../components/base/LoginSwitch/LoginSwitch";
import { AuthInput } from "../../../components/base/AuthInput/AuthInput";
import { ButtonAuth } from "../../../components/base/ButtonAuth/ButtonAuth";
import { Link } from "react-router-dom";

export const Login = () => {
  const [Priv, setPriv] = useState([]);
  const changePriv = (e) => {
    setPriv(e.target.value);
    console.log(Priv);
  };
  return (
    <div className="container mt-5 text-center container-auth">
      <LoginLogos />
      <span className="mt-5 fw-bold">Please Login with your account</span>
      <LoginSwitch switch={e => changePriv(e)}/>
      <AuthInput placeholder="Email" name="email"/>
      <AuthInput placeholder="Password" type="password" name="password" />
      <span className="forgot-pw d-block pe-3">
        <a href={"/login"}>Forgot Password ?</a>
      </span>
      <ButtonAuth text="LOGIN"/>
      <span className="d-block mt-4 link-regist">
        Dont have a Tuku Account ? <Link to={"./signup"}>Register</Link>
      </span>
    </div>
  );
};