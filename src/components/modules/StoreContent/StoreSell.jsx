import React, { useEffect, useState } from "react";
import style from "./storeContent.module.css";
import { TableItem } from "../../base/TableItem/TableItem";
import axios from "axios";
import { AuthInput } from "../../base/AuthInput/AuthInput";

export const StoreSell = () => {

  const handleTitle = (e) => {
    console.log(e.target.value);
  }

  return (
    <div className={`container pt-3 pb-5 ${style.content}`}>
      <h2>My Products</h2>
      <hr />
      <span>Name Of Goods</span>
      <div className="w-50">
      <AuthInput name="titleProduct" value={e => handleTitle(e)}/>
      </div>
    </div>
  );
};
