import React from 'react'
import style from './MyOrder.module.css'
import { SidebarOrder } from '../../../components/modules/Sidebar/SidebarOrder'

export const MyOrder = () => {
    return (
        <div className={`${style.wrapper}`}>
            <SidebarOrder/>
        </div>
    )
}
