import React from 'react'
import style from './ShippingAdress.module.css'
import { Sidebar } from '../../../components/modules/Sidebar/Sidebar'
import { UserAddress } from '../../../components/modules/UserContent/UserAddress'

export const ShippingAdress = () => {
    return (
        <div className={`${style.wrapper}`}>
            <Sidebar>
                <UserAddress/>
            </Sidebar>
        </div>
    )
}