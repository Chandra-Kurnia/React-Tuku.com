import React from 'react'
import style from './ButtonNavbarAuth.module.css'
import { Link } from 'react-router-dom'

export const ButtonNavbarAuth = (props) => {
    return (
        <div>
            <Link className={`btn btn-outline ${props.margin || "ms-3"} rounded-pill ${style.buttonAuth} ${style[props.css]}`} to={props.href}>{props.text}</Link>
        </div>
    )
}
