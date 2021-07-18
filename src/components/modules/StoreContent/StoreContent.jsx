import React from "react";
import { AuthInput } from "../../base/AuthInput/AuthInput";
import style from "./storeContent.module.css";
import { ButtonNavbarAuth } from "../../base/ButtonNavbarAuth/ButtonNavbarAuth";
import avatar from "../../../assets/images/profiles/avatar/avatar.jpg"

export const StoreContent = () => {
  return (
    <div className={`container pt-3 ${style.content}`}>
      <h2>My Profile store</h2>
      <span className="fw-bold">Manage Your Profile Information</span>
      <hr />
      <div className="row">
        <div className="col-8">
          <div className="row">
            <div className="col-3 d-flex justify-content-end align-items-center">
              <span>Store Name</span>
            </div>
            <div className="col-9">
              <AuthInput name="storeName" value="Johanes Mikael" />
            </div>
          </div>
          <div className="row">
            <div className="col-3 d-flex justify-content-end align-items-center">
              <span>Email</span>
            </div>
            <div className="col-9">
              <AuthInput name="email" value="Johanes@gmail.com" />
            </div>
          </div>
          <div className="row">
            <div className="col-3 d-flex justify-content-end align-items-center">
              <span>Phone Number</span>
            </div>
            <div className="col-9">
              <AuthInput name="phoneNumber" value="08901289012" />
            </div>
          </div>
          <div className="row">
            <div className="col-3 d-flex justify-content-end">
              <span>Store Description</span>
            </div>
            <div className="col-9">
              <textarea className={style.textarea} name="storeDesc" id="" cols="30" rows="10"></textarea>
            </div>
          </div>

          <div className="row">
            <div className="col-3 d-flex justify-content-end align-items-center">
            </div>
            <div className="col-9">
              <ButtonNavbarAuth css="login" text="Save" margin="ms-0"/>
            </div>
          </div>
        </div>
        <div className={`col-4 d-flex align-items-center flex-column ${style.profile}`}>
            <img className="rounded-circle" src={avatar} alt="" />
            <button className="btn btn-outline-secondary mt-3 rounded-pill">Select Image</button>
        </div>
      </div>
    </div>
  );
};
