import React from 'react'
import { SidebarStore } from '../../../../components/modules/SidebarStore/SidebarStore'
import { StoreProduct } from '../../../../components/modules/StoreContent/StoreProduct'

export const MyProducts = () => {
    return (
        <div>
            <div className="bg-wrapper">
                <SidebarStore>
                    <StoreProduct/>
                </SidebarStore>
            </div>
        </div>
    )
}
