import React from 'react'
import style from './MyOrder.module.css'
import { Sidebar } from '../../../components/modules/Sidebar/Sidebar'
import { UserOrder } from '../../../components/modules/UserContent/UserOrder'

export const MyOrder = () => {
    return (
        <div className={`${style.wrapper}`}>
            <Sidebar>
                <UserOrder/>
            </Sidebar>
        </div>
    )
}
