import React, { Fragment } from 'react'
import { useParams } from "react-router";
import { SidebarUpdate } from '../../../../components/modules/SidebarStore/SidebarUpdate';

export const UpdateProduct = () => {
    const { id } = useParams();
    return (
        <Fragment>
            <SidebarUpdate idProduct={id}/>
        </Fragment>
    )
}
