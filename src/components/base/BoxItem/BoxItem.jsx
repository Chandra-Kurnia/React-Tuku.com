import React, { Fragment, useState } from "react";
import style from "./BoxItem.module.css";
import { CheckBox } from "../CheckBox/CheckBox";
import { ButtonCount } from "../ButtonCount/ButtonCount";

export const BoxItem = (props) => {
  const [count, setCount] = useState(1);
  let [price, setPrice] = useState(props.price);
  const defaultPrice = props.price;
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
        <img src={`${process.env.REACT_APP_SERVER_IMAGE_URL}/${props.image}`} className="ps-3" alt="" width="100px"/>
        <div className="tittleProduct ps-5">
          <div className={`row ${style.tittleProduct}`}>
            {props.title}
          </div>
          <div className={`row ${style.ProductShop}`}>{props.shop}</div>
        </div>
        <ButtonCount count={count} plus={() => handlePlusCount()} minus={() => handleMinusCount()}/>
        <span className={style.price}>Rp. {price}</span>
      </div>
    </Fragment>
  );
};
