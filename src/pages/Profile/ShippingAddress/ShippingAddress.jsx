import React from 'react'
import style from './ShippingAdress.module.css'
import { SidebarAddress } from '../../../components/modules/Sidebar/SidebarAddress'

export const ShippingAdress = () => {
    return (
        <div className={`${style.wrapper}`}>
            <SidebarAddress/>
        </div>
    )
}