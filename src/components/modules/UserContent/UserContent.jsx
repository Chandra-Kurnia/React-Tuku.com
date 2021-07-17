import React from "react";
import { AuthInput } from "../../base/AuthInput/AuthInput";
import style from "./UserContent.module.css";
import { ButtonNavbarAuth } from "../../../components/base/ButtonNavbarAuth/ButtonNavbarAuth";
import avatar from "../../../assets/images/profiles/avatar/avatar.jpg"

export const UserContent = () => {
  return (
    <div className={`container pt-3 ${style.content}`}>
      <h2>My Profile</h2>
      <span className="fw-bold">Manage Your Profile Information</span>
      <hr />
      <div className="row">
        <div className="col-8">
          <div className="row">
            <div className="col-3 d-flex justify-content-end align-items-center">
              <span>Name</span>
            </div>
            <div className="col-9">
              <AuthInput name="name" value="Johanes Mikael" />
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
          <div className="row mt-3 mb-4">
            <div className="col-3 d-flex justify-content-end align-items-center">
              <span>Gender</span>
            </div>
            <div className="col-9">
              <input
                className="me-2"
                type="radio"
                name="sex"
                id="male"
                value="male"
              />
              <label htmlFor="male">Laki - Laki</label>
              <input
                className="ms-5 me-2"
                type="radio"
                name="sex"
                id="female"
                value="female"
              />
              <label htmlFor="female">Perempuan</label>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-3 d-flex justify-content-end align-items-center">
              <span>Date Of Birth</span>
            </div>
            <div className="col-9">
              <div className="row">
                <div className="col">
                  <select name="" className="form-select" id="">
                    <option value="">1</option>
                    <option value="">2</option>
                    <option value="">3</option>
                    <option value="">4</option>
                    <option value="">5</option>
                  </select>
                </div>
                <div className="col">
                  <select name="" className="form-select" id="">
                    <option value="">1</option>
                    <option value="">2</option>
                    <option value="">3</option>
                    <option value="">4</option>
                    <option value="">5</option>
                  </select>
                </div>
                <div className="col">
                  <select name="" className="form-select" id="">
                    <option value="">1</option>
                    <option value="">2</option>
                    <option value="">3</option>
                    <option value="">4</option>
                    <option value="">5</option>
                  </select>
                </div>
              </div>
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
