import React from "react";
import { NavbarLogos } from "../../base/NavbarLogos/NavbarLogos";
import { NavbarSearch } from "../../base/NavbarSearch/NavbarSearch";
// import { Filter } from "../Filter/Filter";
// eslint-disable-next-line no-unused-vars
import style from "./NavbarLogin.module.css";
import { NavbarTrolly } from "../../base/NavbarTrolly/NavbarTrolly";
import avatar from "../../../assets/images/profiles/avatar/avatar.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const NavbarLogin = () => {
  const {profile} = useSelector(state => state.user)
  return (
    <nav className="shadow navbar navbar-expand-lg navbar-light bg-light pt-3 pb-3">
      <div className="container-nav container">
        <Link to="/">
          <NavbarLogos />
        </Link>
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
        {/* <Filter /> */}
        <div
          className="collapse navbar-collapse position-relative"
          id="navbarNavDropdown"
        >
          {/* <NavbarNavigation/> */}
          <ul
            className={`navbar-nav d-flex justify-content-lg-end justify-content-around flex-row pt-lg-0 pt-3 ${style.navItemWrapper}`}
          >
            {profile.role === 'customer' && 
            <li className="nav-item d-inline-block ps-lg-5 ps-2">
              <Link to="/MyBag">
                <NavbarTrolly margin="me-0" href="/MyBag"/>
              </Link>
            </li>
            }
            {/* <li className="nav-item d-inline-block ps-lg-5 ps-2">
              <Link to="">
                <i className="fa fa-bell"></i>
              </Link>
            </li>
            <li className="nav-item d-inline-block ps-lg-5 ps-2">
              <Link to="#/">
                <i className="fa fa-envelope"></i>
              </Link>
            </li> */}
            <li className="nav-item d-inline-block ps-lg-5 ps-2">
              {profile.role === 'customer' ? 
              <Link to="/profile">
                <label htmlFor="sidebar-toggle">
                  <div className={style.avatarWrapper}>
                  <img
                    src={profile.avatar ? `${process.env.REACT_APP_API}${profile.avatar}` : avatar}
                    className={`rounded-circle ${style.imageAvatar}`}
                    alt=""
                  />
                  </div>
                </label>
              </Link>
            : 
              <Link to="/store">
                <label htmlFor="sidebar-toggle">
                  <div className={style.avatarWrapper}>
                  <img
                    src={profile.avatar ? `${process.env.REACT_APP_API}${profile.avatar}` : avatar}
                    className={`rounded-circle ${style.imageAvatar}`}
                    alt=""
                  />
                  </div>
                </label>
              </Link>
            }
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
