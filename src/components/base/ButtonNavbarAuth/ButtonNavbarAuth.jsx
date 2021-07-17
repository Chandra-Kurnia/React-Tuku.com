import React from 'react'
import style from './ButtonNavbarAuth.module.css'

export const ButtonNavbarAuth = (props) => {
    return (
        <div>
            <a className={`btn btn-outline ${props.margin || "ms-3"} rounded-pill ${style.buttonAuth} ${style[props.css]}`} href={props.href}>{props.text}</a>
        </div>
    )
}
