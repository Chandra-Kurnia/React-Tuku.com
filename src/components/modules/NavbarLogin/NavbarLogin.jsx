import React from "react";
import { NavbarLogos } from "../../base/NavbarLogos/NavbarLogos";
import { NavbarSearch } from "../../base/NavbarSearch/NavbarSearch";
import { Filter } from "../Filter/Filter";
// eslint-disable-next-line no-unused-vars
import style from "./NavbarLogin.module.css";
import { NavbarTrolly } from "../../base/NavbarTrolly/NavbarTrolly";
import avatar from '../../../assets/images/profiles/avatar/avatar.jpg'

export const NavbarLogin = () => {
  return (
    <nav className="shadow navbar navbar-expand-lg navbar-light bg-light pt-3 pb-3">
      <div className="container-nav container">
        <NavbarLogos />
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
        <NavbarSearch />
        <Filter />
        <div
          className="collapse navbar-collapse position-relative"
          id="navbarNavDropdown"
        >
          {/* <NavbarNavigation/> */}
          <ul className={`navbar-nav d-flex justify-content-lg-end justify-content-around flex-row pt-lg-0 pt-3 ${style.navItemWrapper}`}>
            <li className="nav-item d-inline-block ps-lg-5 ps-2">
              <a href="#/">
                <NavbarTrolly margin="me-0"/>
              </a>
            </li>
            <li className="nav-item d-inline-block ps-lg-5 ps-2">
              <a href="#/">
                <i className="fa fa-bell"></i>
              </a>
            </li>
            <li className="nav-item d-inline-block ps-lg-5 ps-2">
              <a href="#/">
                <i className="fa fa-envelope"></i>
              </a>
            </li>
            <li className="nav-item d-inline-block ps-lg-5 ps-2">
              <a href="#/">
                <img src={avatar} className={`rounded-circle ${style.imageAvatar}`} alt="" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
