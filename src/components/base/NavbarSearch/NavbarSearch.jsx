import React from "react";
import style from "./NavbarSearch.module.css";

export const NavbarSearch = () => {
  return (
    <div className={`ps-lg-5 mt-lg-0 mt-2 m-auto input-group ${style.searchInputWrapper}`}>
      <input
        type="text"
        class={`form-control ps-4 ${style.searchInput}`}
        placeholder="Search"
        aria-label="Search"
        aria-describedby="basic-addon1"
        name="search"
      ></input>
      <button class={`btn rounded-start rounded-pill pt-1 ${style.btnSearch}`}>
        <i class="fa fa-search"></i>
      </button>
    </div>
  );
};
