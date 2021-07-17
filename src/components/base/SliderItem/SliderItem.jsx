import React from 'react'
import style from './SliderItem.module.css'

export const SliderItem = (props) => {
    return (
        <div className={`me-3 ${style.caroItem}`}>
            <img src={props.src} alt="" />
            <span className={style.text}>{props.text || "No Tittle"}</span>
        </div>
    )
}
