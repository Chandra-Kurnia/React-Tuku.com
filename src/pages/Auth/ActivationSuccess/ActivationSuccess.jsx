import React, { Fragment, useEffect } from "react";
import { AccountHelper } from "../../../components/modules/AccountHelper/AccountHelper";
import email from "../../../assets/icon/emailSucess.png";
import qs from "query-string";
import { useLocation } from "react-router";
import { useDispatch } from "react-redux";
import { activate } from "../../../config/redux/actions/userAction";

export const ActivationSucess = () => {
  const dispatch = useDispatch()
  const loc = useLocation();
  const { role, token } = qs.parse(loc.search);

  useEffect(() => {
    dispatch(activate(role, token))
  })
  return (
    <Fragment>
      <AccountHelper
        title="Activation success !"
        msg="now you can login using your email and password"
        btnText="Login Now"
        img={email}
      />
    </Fragment>
  );
};
