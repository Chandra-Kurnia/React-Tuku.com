import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";

export const TableItem = (props) => {
  const idProduct = props.idProduct;
  function confirmDelete() {
    swal({
      title: "Are you sure?",
      text: "This data will deleted from your store !",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        props.click(idProduct)
      }
    });
  }
  return (
    <Fragment>
      <tr style={{height: "60px"}}>
        <td>{props.title}</td>
        <td>Rp. {props.price}</td>
        <td>{props.quantity}</td>
        <td>
          <button
            className="btn btn-danger me-2 mb-lg-0 mb-1"
            value={idProduct}
            onClick={() => confirmDelete()}
            style={{width: "80px"}}
          >
            Delete
          </button>
          <Link to={`/Product/update/${idProduct}`} className="btn btn-success" style={{width: "80px"}}>Edit</Link>
        </td>
      </tr>
    </Fragment>
  );
};
