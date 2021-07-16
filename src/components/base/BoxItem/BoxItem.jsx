import React, { Fragment, useState } from "react";
import style from "./BoxItem.module.css";
import { CheckBox } from "../CheckBox/CheckBox";
import productImage from "../../../assets/images/products/jas.png";
import { ButtonCount } from "../ButtonCount/ButtonCount";

export const BoxItem = () => {
  const [count, setCount] = useState(1);
  let [price, setPrice] = useState(20);
  const defaultPrice = 20;
  let totalPrice = 0;
  const handlePlusCount = () =>{
      setCount(count + 1)
      setPrice(price += defaultPrice)
  }
  const handleMinusCount = () =>{
      if(count < 2){
        setCount(1)
      }else{
          setCount(count - 1)
          setPrice(price -= defaultPrice)
      }
  }
  return (
    <Fragment>
      <div className={`d-flex align-items-center mb-3 flex-wrap ${style.BoxItem}`}>
        <CheckBox />
        <img src={productImage} className="ps-3" alt="" />
        <div className="tittleProduct ps-5">
          <div className={`row ${style.tittleProduct}`}>
            Men's formal suit - Black
          </div>
          <div className={`row ${style.ProductShop}`}>Zalora Cloth</div>
        </div>
        <ButtonCount count={count} plus={() => handlePlusCount()} minus={() => handleMinusCount()}/>
        <span className={style.price}>${price}</span>
      </div>
    </Fragment>
  );
};
