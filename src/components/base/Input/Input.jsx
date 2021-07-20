import React from "react";
import style from "./authInput.module.css";

export const Input = (props) => {
  return (
    <div className={`input-group mb-3 mt-1 auth-input-wrapper w-100`}>
      <input
        defaultValue={props.val}
        type={props.type || "text"}
        name={props.name}
        class="form-control input-auth"
        placeholder={props.placeholder}
        aria-label="name"
        aria-describedby="basic-addon1"
        onChange={(e) => props.value(e)}
      ></input>
    </div>
  );
};
