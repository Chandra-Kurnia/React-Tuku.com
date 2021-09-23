import React, { useState } from "react";
import { AuthInput } from "../../base/AuthInput/AuthInput";
import style from "./UserContent.module.css";
import { ButtonNavbarAuth } from "../../../components/base/ButtonNavbarAuth/ButtonNavbarAuth";
import avatar from "../../../assets/images/profiles/avatar/avatar.jpg";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { logout, update } from "../../../config/redux/actions/userAction";

export const UserContent = () => {
  const { profile } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const history = useHistory();
  if(profile.role !== "customer"){
    history.push('/')
  }
  const [form, setform] = useState({
    name: profile.name,
    email: profile.email,
    phone_number: profile.phone_number,
    sex: profile.sex,
    dateBirth: 1,
    monthBirth: 6,
    yearBirth: 1999
  });
  const handleForm = (e) => {
    setform({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleLogout = () => {
    dispatch(logout(history));
  };
  const handleSave = () => {
    dispatch(update(form, "customer", profile.id_user));
  };
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
              <AuthInput name="name" value={profile.name} event={handleForm} />
            </div>
          </div>
          <div className="row">
            <div className="col-3 d-flex justify-content-end align-items-center">
              <span>Email</span>
            </div>
            <div className="col-9">
              <AuthInput
                name="email"
                value={profile.email}
                event={handleForm}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-3 d-flex justify-content-end align-items-center">
              <span>Phone Number</span>
            </div>
            <div className="col-9">
              <AuthInput
                name="phoneNumber"
                value={profile.phone_number}
                event={handleForm}
              />
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
                onChange={handleForm}
                defaultChecked
              />
              <label htmlFor="male">Laki - Laki</label>
              <input
                className="ms-5 me-2"
                type="radio"
                name="sex"
                id="female"
                value="female"
                onChange={handleForm}
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
                  <select name="dateBirth" className="form-select" id="" onChange={handleForm}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                    <option value="25">25</option>
                    <option value="26">26</option>
                    <option value="27">27</option>
                    <option value="28">28</option>
                    <option value="29">29</option>
                    <option value="30">30</option>
                    <option value="31">31</option>
                  </select>
                </div>
                <div className="col">
                  <select name="monthBirth" className="form-select" id="" onChange={handleForm}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                  </select>
                </div>
                <div className="col">
                  <select name="yearBirth" className="form-select" id="" onChange={handleForm}>
                    <option value="1991">1991</option>
                    <option value="1992">1992</option>
                    <option value="1993">1993</option>
                    <option value="1994">1994</option>
                    <option value="1995">1995</option>
                    <option value="1996">1996</option>
                    <option value="1997">1997</option>
                    <option value="1998">1998</option>
                    <option value="1999">1999</option>
                    <option value="2000">2000</option>
                    <option value="2001">2001</option>
                    <option value="2002">2002</option>
                    <option value="2003">2003</option>
                    <option value="2004">2004</option>
                    <option value="2005">2005</option>
                    <option value="2006">2006</option>
                    <option value="2007">2007</option>
                    <option value="2008">2008</option>
                    <option value="2009">2009</option>
                    <option value="2010">2010</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-3 d-flex justify-content-end align-items-center"></div>
            <div className="col-9">
              <ButtonNavbarAuth
                css="login"
                text="Save"
                margin="ms-0"
                event={handleSave}
              />
            </div>
          </div>
        </div>
        <div
          className={`col-4 d-flex align-items-center flex-column ${style.profile}`}
        >
          <img className="rounded-circle" src={avatar} alt="" />
          <button className="btn btn-outline-secondary mt-3 rounded-pill">
            Select Image
          </button>
          <button
            className="btn btn-outline-danger mt-3 rounded-pill"
            onClick={() => handleLogout()}
          >
            log out now!
          </button>
        </div>
      </div>
    </div>
  );
};
