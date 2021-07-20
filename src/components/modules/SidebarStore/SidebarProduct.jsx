import React from "react";
import style from "./Sidebar.module.css";
import avatar from "../../../assets/images/profiles/avatar/avatar.jpg";
import editProfile from "../../../assets/icon/edit-profile.svg";
import home from "../../../assets/icon/home.svg"
import packageIcon from "../../../assets/icon/package.svg"
import shoppingCart from "../../../assets/icon/shopping-cart.svg"
import { StoreProduct } from "../StoreContent/StoreProduct";
import { Link } from "react-router-dom";

export const SidebarProduct = () => {
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
              <li className="position-relative">
                <input className="toggleStore d-none" type="checkbox" name="" id="toggle-store" />
                <div className="d-flex align-items-center submenuStoreWrapper">
                  <div className={`${style.circleWrapper} ${style.home} me-2 rounded-circle`}>
                    <img className={style.imgSide} src={home} alt="" />
                  </div>
                  <label htmlFor="toggle-store">Store</label>
                  <i className={`fa fa-chevron-down arrowStore`}></i>
                </div>
                <ul className="submenuStore">
                  <li className="ms-4 ps-3">
                    <Link to="/store">Store Profile</Link>
                  </li>
                </ul>
              </li>
              <li className="position-relative">
                <input className="toggleProduct d-none" type="checkbox" name="" id="toggle-product" checked/>
                <div className="d-flex align-items-center submenuProductWrapper">
                  <div className={`${style.circleWrapper} ${style.package} me-2 rounded-circle`}>
                    <img className={style.imgSide} src={packageIcon} alt="" />
                  </div>
                  <label htmlFor="toggle-product">Product</label>
                  <i className={`fa fa-chevron-down arrowStore`}></i>
                </div>
                <ul className="submenuProduct">
                  <li className="ms-4 ps-3">
                    <Link to="/Product">My Product</Link>
                  </li>
                  <li className="ms-4 ps-3">
                    <Link to="/Sell">Selling Product</Link>
                  </li>
                </ul>
              </li>
              <li className="position-relative">
                <input className="toggleOrder d-none" type="checkbox" name="" id="toggle-Order" />
                <div className="d-flex align-items-center submenuOrderWrapper">
                  <div className={`${style.circleWrapper} ${style.trolly} me-2 rounded-circle`}>
                    <img className={style.imgSide} src={shoppingCart} alt="" />
                  </div>
                  <label htmlFor="toggle-Order">Order</label>
                  <i className={`fa fa-chevron-down arrowStore`}></i>
                </div>
                <ul className="submenuOrder">
                  <li className="ms-4 ps-3">
                    <a href="">My Order</a>
                  </li>
                  <li className="ms-4 ps-3">
                    <a href="">Order Cancel</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={`ps-3 pt-5 pe-3 ${style.contentWrapper}`}>
        <StoreProduct/>
      </div>
    </div>
  );
};
