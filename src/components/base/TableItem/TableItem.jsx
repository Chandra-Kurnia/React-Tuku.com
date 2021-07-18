import React, { Fragment } from 'react'

export const TableItem = (props) => {
    const idProduct = props.idProduct;
    return (
        <Fragment>
            <tr>
              <td>{props.title}</td>
              <td>$ {props.price}</td>
              <td>{props.quantity}</td>
              <td><button className="btn btn-danger" value={idProduct} onClick={e => props.click(e)} >Delete</button> <button className="btn btn-success">Update</button></td>
            </tr>
            <br />
        </Fragment>
    )
}
