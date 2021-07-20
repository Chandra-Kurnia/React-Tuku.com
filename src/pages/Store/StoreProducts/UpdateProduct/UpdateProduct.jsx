import React, { Fragment } from 'react'
import { useParams } from "react-router";
import { NavbarStore } from '../../../../components/modules/NavbarStore/NavbarStore'
import { SidebarUpdate } from '../../../../components/modules/SidebarStore/SidebarUpdate';

export const UpdateProduct = () => {
    const { id } = useParams();
    return (
        <Fragment>
            <NavbarStore/>
            <SidebarUpdate idProduct={id}/>
        </Fragment>
    )
}
