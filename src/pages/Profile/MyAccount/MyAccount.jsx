import React from 'react'
import { Sidebar } from '../../../components/modules/Sidebar/Sidebar'
import { UserContent } from '../../../components/modules/UserContent/UserContent'
import style from './MyAccount.module.css'

export const MyAccount = () => {
    return (
        <div className={`${style.wrapper}`}>
            <Sidebar>
                <UserContent/>
            </Sidebar>  
        </div>
    )
}
