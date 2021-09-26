import React from "react";
import style from "./Sidebar.module.css";
import avatar from "../../../assets/images/profiles/avatar/avatar.png";
import editProfile from "../../../assets/icon/edit-profile.svg"
import user from "../../../assets/icon/user.png"
import loc from "../../../assets/icon/loc.png"
import clipboard from "../../../assets/icon/clipboard.png"
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { UserOrder } from "../UserContent/UserOrder";

export const SidebarOrder = () => {
  const { profile } = useSelector((state) => state.user);
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
              <div className="fw-bold fs-6">{profile.name}</div>
              <div className="edit ps-1">
                <img src={editProfile} alt="" />
                <span className="ps-2">Ubah Profile</span>
              </div>
            </div>
          </div>
          <div className={`pt-5 ${style.act}`}>
            <ul>
              <li>
                <Link to="/profile" className="d-flex">
                  <div className={`rounded-circle me-3 ${style.circleWrapper} ${style.circleProfile}`}>
                    <img className={style.imgSide} src={user} alt="" />
                  </div>
                  <div className={`d-flex align-items-center`}>My Account</div>
                </Link>
              </li>
              <li>
                <Link to="/myAddress" className="d-flex">
                  <div className={`rounded-circle me-3 ${style.circleWrapper} ${style.loc}`}>
                    <img className={style.imgSide} src={loc} alt="" />
                  </div>
                  <div className="d-flex align-items-center">Shipping Address</div>
                </Link>
              </li>
              <li>
                <Link to="/order" className="d-flex">
                  <div className={`rounded-circle me-3 ${style.circleWrapper} ${style.clip}`}>
                    <img className={style.imgSide} src={clipboard} alt="" />
                  </div>
                  <div className="d-flex align-items-center sidebarActive">My Orders</div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={`ps-3 pt-5 pe-3 ${style.contentWrapper}`}>
        <UserOrder/>
      </div>
    </div>
  );
};
