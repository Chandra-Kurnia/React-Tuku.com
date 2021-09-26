import React from "react";
import { NavbarLogos } from "../../base/NavbarLogos/NavbarLogos";
import style from "./NavbarStore.module.css";
import avatar from "../../../assets/images/profiles/avatar/avatar.png";

export const NavbarStore = () => {
  return (
    <nav className="shadow navbar navbar-expand-lg navbar-light bg-light pt-3 pb-3">
      <div className="container-nav container">
        <NavbarLogos path="/"/>
        <button
          className={`navbar-toggler ${style.btnTogler}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse position-relative"
          id="navbarNavDropdown"
        >
          {/* <NavbarNavigation/> */}
          <ul
            className={`navbar-nav d-flex justify-content-lg-end justify-content-around flex-row pt-lg-0 pt-3 ${style.navItemWrapper}`}
          >
            {/* <li className="nav-item d-inline-block ps-lg-5 ps-2">
              <a href="#/">
                <i className="fa fa-bell"></i>
              </a>
            </li>
            <li className="nav-item d-inline-block ps-lg-5 ps-2">
              <a href="#/">
                <i className="fa fa-envelope"></i>
              </a>
            </li> */}
            <li className="nav-item d-inline-block ps-lg-5 ps-2">
              <a href="#/">
                <label htmlFor="sidebar-toggle">
                  <img
                    src={avatar}
                    className={`rounded-circle ${style.imageAvatar}`}
                    alt=""
                  />
                </label>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
