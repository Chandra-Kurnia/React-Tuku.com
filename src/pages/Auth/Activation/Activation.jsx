import React, { Fragment } from "react";
import { AccountHelper } from "../../../components/modules/AccountHelper/AccountHelper";
import email from "../../../assets/icon/email.png";

export const Activation = () => {
  return (
    <Fragment>
      <AccountHelper title="Thank you for registering" msg="We sent an activation link to your email, please activate your account before continuing" btnText="Login Now" img={email}/>
    </Fragment>
  );
};
