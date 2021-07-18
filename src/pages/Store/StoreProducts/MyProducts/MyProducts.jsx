import React from 'react'
import { NavbarStore } from '../../../../components/modules/NavbarStore/NavbarStore'
import { SidebarProduct } from '../../../../components/modules/SidebarStore/SidebarProduct'

export const MyProducts = () => {
    return (
        <div>
            <div className="bg-wrapper">
                <NavbarStore/>
                <SidebarProduct/>
            </div>
        </div>
    )
}
