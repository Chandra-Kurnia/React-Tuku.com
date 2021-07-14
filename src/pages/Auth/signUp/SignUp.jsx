import React from 'react'
import '../../../css/auth.css'
import { LoginLogos } from '../../../components/base/LoginLogos/LoginLogos'
import { LoginSwitch } from '../../../components/base/LoginSwitch/LoginSwitch'
import { ButtonAuth } from '../../../components/base/ButtonAuth/ButtonAuth'
import { AuthInput } from '../../../components/base/AuthInput/AuthInput'

export const SignUp = (props) => {
    return (
        <div className="container mt-5 text-center container-auth">
      <LoginLogos />
      <span className="mt-5 fw-bold">Please Sign up with your account</span>
      <LoginSwitch />
      <AuthInput placeholder="Name" name="name"/>
      <AuthInput placeholder="Email" name="email"/>
      <AuthInput placeholder="Password" type="password" name="password" />
      <ButtonAuth text="LOGIN"/>
      <span className="d-block mt-4 link-regist">
        Dont have a Tuku Account ? <a href={"/register"}>Register</a>
      </span>
    </div>
    )
}
