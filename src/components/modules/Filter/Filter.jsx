import React from "react";
import style from "./Filter.module.css";
import icon from "../../../assets/icon/FilterButton.svg";

export const Filter = () => {
  return (
    <div className={`m-auto`}>
      <button
        className={`btn btn-outline-secondary ms-2 ${style.btnFilter}`}
        data-bs-toggle="modal"
        id="filter"
        data-bs-target="#exampleModal"
      >
        <img src={icon} alt="" />
      </button>
    </div>
  );
};
