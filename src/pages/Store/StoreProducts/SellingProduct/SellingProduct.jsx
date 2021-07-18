import React, { Fragment } from 'react'
import { NavbarStore } from '../../../../components/modules/NavbarStore/NavbarStore'
import { SidebarSell } from '../../../../components/modules/SidebarStore/SidebarSell'

export const SellingProduct = () => {
    return (
        <Fragment>
            <NavbarStore/>
            <SidebarSell/>
        </Fragment>
    )
}
