import React, { Fragment } from 'react'
// import { SidebarSell } from '../../../../components/modules/SidebarStore/SidebarSell'
import { SidebarStore } from '../../../../components/modules/SidebarStore/SidebarStore'
import { StoreSell } from '../../../../components/modules/StoreContent/StoreSell'

export const SellingProduct = () => {
    return (
        <Fragment>
            <SidebarStore>
                <StoreSell/>
            </SidebarStore>
        </Fragment>
    )
}
