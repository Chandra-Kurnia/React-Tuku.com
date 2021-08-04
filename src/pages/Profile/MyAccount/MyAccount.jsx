import React from 'react'
import { Sidebar } from '../../../components/modules/Sidebar/Sidebar'
import style from './MyAccount.module.css'
import { NavbarLogin } from '../../../components/modules/NavbarLogin/NavbarLogin'

export const MyAccount = () => {
    return (
        <div className={`${style.wrapper}`}>
            <NavbarLogin/>
            <Sidebar content="UserContent"/>
        </div>
    )
}
