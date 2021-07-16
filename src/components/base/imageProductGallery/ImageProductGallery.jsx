import React, { Fragment } from "react";
import style from './imageProductGallery.module.css'

export const ImageProductGallery = (props) => {
  return (
    <Fragment>
      <div className={`pt-2 rounded ${style.itemGallery}`}>
        <img src={props.srcImage} alt="" />
      </div>
    </Fragment>
  );
};
