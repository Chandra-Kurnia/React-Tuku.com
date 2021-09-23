import React from 'react'
import { Sidebar } from '../../../components/modules/Sidebar/Sidebar'
import style from './MyAccount.module.css'

export const MyAccount = () => {
    return (
        <div className={`${style.wrapper}`}>
            <Sidebar content="UserContent"/>
        </div>
    )
}
