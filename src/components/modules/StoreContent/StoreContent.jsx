import React, {useState} from "react";
import { AuthInput } from "../../base/AuthInput/AuthInput";
import style from "./storeContent.module.css";
import { ButtonNavbarAuth } from "../../base/ButtonNavbarAuth/ButtonNavbarAuth";
import avatar from "../../../assets/images/profiles/avatar/avatar.jpg"
import { useDispatch, useSelector } from "react-redux";
import { update } from "../../../config/redux/actions/userAction";
import { useHistory } from "react-router";

export const StoreContent = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const { profile } = useSelector((state) => state.user);
  const [form, setform] = useState({
    storeName: profile.store_name,
    email: profile.email,
    phoneNumber: profile.phone_number,
    storeDesc: profile.store_desc,
  })

  const handleForm = (e) => {
    setform({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const handleSave = (e) => {
    dispatch(update(form, "seller", history, profile.store_id))
  }
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
              <AuthInput name="storeName" value={profile.store_name} event={handleForm}/>
            </div>
          </div>
          <div className="row">
            <div className="col-3 d-flex justify-content-end align-items-center">
              <span>Email</span>
            </div>
            <div className="col-9">
              <AuthInput name="email" value={profile.email} event={handleForm}/>
            </div>
          </div>
          <div className="row">
            <div className="col-3 d-flex justify-content-end align-items-center">
              <span>Phone Number</span>
            </div>
            <div className="col-9">
              <AuthInput name="phoneNumber" value={profile.phone_number} event={handleForm}/>
            </div>
          </div>
          <div className="row">
            <div className="col-3 d-flex justify-content-end">
              <span>Store Description</span>
            </div>
            <div className="col-9">
              <textarea devaultValue={profile.store_desc} className={style.textarea} name="storeDesc" id="" cols="30" rows="10" onChange={handleForm}></textarea>
            </div>
          </div>

          <div className="row">
            <div className="col-3 d-flex justify-content-end align-items-center">
            </div>
            <div className="col-9">
              <ButtonNavbarAuth event={(e) => handleSave(e)} css="login" text="Save" margin="ms-0"/>
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
