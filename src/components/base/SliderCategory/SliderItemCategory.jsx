import React from 'react'
import style from './SliderCategory.module.css'

export const SliderItemCategory = (props) => {
    return (
        <div className={`me-3 ${style.caroItem} ${props.color || "bg-secondary"}`}>
            <img src={props.src} alt="" />
            <span className={style.text}>{props.text || "No Tittle"}</span>
        </div>
    )
}
