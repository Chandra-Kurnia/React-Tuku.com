import React from 'react'
import { NavbarLogin } from '../../../components/modules/NavbarLogin/NavbarLogin'
import style from './ShippingAdress.module.css'
import { SidebarAddress } from '../../../components/modules/Sidebar/SidebarAddress'

export const ShippingAdress = () => {
    return (
        <div className={`${style.wrapper}`}>
            <NavbarLogin/>
            <SidebarAddress/>
        </div>
    )
}