import React from "react";
import style from "./Sidebar.module.css";
import { UserContent } from "../UserContent/UserContent";
import avatar from "../../../assets/images/profiles/avatar/avatar.jpg";
import editProfile from "../../../assets/icon/edit-profile.svg"
import user from "../../../assets/icon/user.png"
import loc from "../../../assets/icon/loc.png"
import clipboard from "../../../assets/icon/clipboard.png"

export const Sidebar = () => {
  return (
    <div className="d-flex">
      <input
        className={`d-none ${style.sidebarToggle}`}
        type="checkbox"
        name=""
        id="sidebar-toggle"
      ></input>
      <div className={`${style.side}`}>
        <div className="d-flex flex-column">
          <div className="d-flex">
            <img className={style.avatar} src={avatar} alt="" />
            <div className="">
              <div className="fw-bold fs-6">Johanes mikael</div>
              <div className="edit ps-1">
                <img src={editProfile} alt="" />
                <span className="ps-2">Ubah Profile</span>
              </div>
            </div>
          </div>
          <div className={`pt-5 ${style.act}`}>
            <ul>
              <li>
                <a href="" className="d-flex">
                  <div className={`rounded-circle me-3 ${style.circleWrapper} ${style.circleProfile}`}>
                    <img className={style.imgSide} src={user} alt="" />
                  </div>
                  <div className={`d-flex align-items-center sidebarActive`}>My Account</div>
                </a>
              </li>
              <li>
                <a href="" className="d-flex">
                  <div className={`rounded-circle me-3 ${style.circleWrapper} ${style.loc}`}>
                    <img className={style.imgSide} src={loc} alt="" />
                  </div>
                  <div className="d-flex align-items-center">Shipping Address</div>
                </a>
              </li>
              <li>
                <a href="" className="d-flex">
                  <div className={`rounded-circle me-3 ${style.circleWrapper} ${style.clip}`}>
                    <img className={style.imgSide} src={clipboard} alt="" />
                  </div>
                  <div className="d-flex align-items-center">My Orders</div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={`ps-3 pt-5 pe-3 ${style.contentWrapper}`}>
        <UserContent />
      </div>
    </div>
  );
};