import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";

export const TableItem = (props) => {
  const idProduct = props.idProduct;
  function confirmDelete() {
    // const confirmdel = window.confirm("apakah anda yakin ingin menghapus data ini ? ?");
    // if(confirmdel){
    //     props.click(idProduct)
    // }
    swal({
      title: "Apakah anda yakin?",
      text: "Data ini akan dihapus dari store anda !",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        props.click(idProduct)
      } else {
        swal("Delete Dibatalkan!");
      }
    });
  }
  return (
    <Fragment>
      <tr style={{height: "60px"}}>
        <td>{props.title}</td>
        <td>$ {props.price}</td>
        <td>{props.quantity}</td>
        <td>
          <button
            className="btn btn-danger me-2"
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
