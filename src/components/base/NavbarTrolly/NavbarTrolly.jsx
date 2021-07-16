import React from 'react'
import style from './NavbarTrolly.module.css'

export const NavbarTrolly = (props) => {
    return (
        <div className={`${props.margin || "me-5"} ${style.trolly}`}>
            <a href={props.href}>
            <i className="fa fa-shopping-cart"></i>
            </a>
        </div>
    )
}