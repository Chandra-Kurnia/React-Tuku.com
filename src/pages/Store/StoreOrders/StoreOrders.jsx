import React, { Fragment } from 'react'
import { SidebarStore } from '../../../components/modules/SidebarStore/SidebarStore'
import { StoreOrder } from '../../../components/modules/StoreContent/StoreOrder'

export const storeOrder = () => {
    return (
        <Fragment>
            <SidebarStore>
                <StoreOrder/>
            </SidebarStore>
        </Fragment>
    )
}
