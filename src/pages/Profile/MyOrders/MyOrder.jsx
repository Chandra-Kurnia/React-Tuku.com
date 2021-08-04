import React from 'react'
import style from './MyOrder.module.css'
import { NavbarLogin } from '../../../components/modules/NavbarLogin/NavbarLogin'
import { SidebarOrder } from '../../../components/modules/Sidebar/SidebarOrder'

export const MyOrder = () => {
    return (
        <div className={`${style.wrapper}`}>
            <NavbarLogin/>
            <SidebarOrder/>
        </div>
    )
}
