import React from 'react'
import { NavbarLogin } from '../../../components/modules/NavbarLogin/NavbarLogin'
import { Sidebar } from '../../../components/modules/Sidebar/Sidebar'
import style from './MyAccount.module.css'

export const MyAccount = () => {
    return (
        <div className={`${style.wrapper}`}>
            <NavbarLogin/>
            <Sidebar content="UserContent"/>
        </div>
    )
}
