import React from 'react'
import logos from '../../../assets/icon/logo.svg'
import style from './NavbarLogos.module.css'

export const NavbarLogos = () => {
    return (
        <div className=" d-flex">
            <img src={logos} alt="" className={style.logo}/>
            <span className={style.textLogo}>Tuku.com</span>
        </div>
    )
}
