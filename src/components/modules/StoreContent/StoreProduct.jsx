import React, { useEffect, useState } from "react";
import style from "./storeContent.module.css";
import { TableItem } from "../../base/TableItem/TableItem";
import axios from "axios";
import { useHistory } from "react-router";

export const StoreProduct = () => {
  const history = useHistory();
  const [data, setData] = useState([]);
  const [keyword, setKeyword] = useState()
  const link = "http://localhost:4000/product/";

  const handleSearch = (e) => {
    setKeyword(e.target.value)
  }

  const handleDelete = (e) => {
    const id_product = e.target.value;
    axios.delete(`http://localhost:4000/product/${id_product}`)
    history.push('/product')
  }

  useEffect(() => {
    getAllData();
  }, []);

  const getAllData = () => {
    axios
      .get(link)
      .then((response) => {
        // setData(response.data)
        setData(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // if(keyword){
  //   getAllData( link += `?keyword=${keyword}`)
  // }else{
  //   getAllData(link)
  // }

  return (
    <div className={`container pt-3 pb-5 ${style.content}`}>
      <h2>My Products</h2>
      <div className="d-flex table-order fw-bold flex-wrap">
        <input
          type="radio"
          class="table-order-radio-all d-none"
          name="table-order-radio"
          id="table-order-all"
          // checked
        />
        <input
          type="radio"
          class="table-order-radio-sould-out d-none"
          name="table-order-radio"
          id="table-order-sould-out"
        />
        <input
          type="radio"
          class="table-order-radio-archived d-none"
          name="table-order-radio"
          id="table-order-archived"
        />

        <div class="table-order-all me-4 mb-3 mb-lg-0 me-lg-5">
          <label for="table-order-all">All Items</label>
        </div>
        <div class="table-order-sould-out me-4 mb-3 mb-lg-0 me-lg-5">
          <label for="table-order-sould-out">Sould out</label>
        </div>
        <div class="table-order-archived me-4 mb-3 mb-lg-0 me-lg-5">
          <label for="table-order-archived">Archived</label>
        </div>
      </div>
      <div className={`mt-4 w-25 ${style.searchOrder}`}>
        <div className="input-group flex-nowrap">
          <span class="input-group-text" id="addon-wrapping">
            <i class="fa fa-search"></i>
          </span>
          <input
            type="text"
            class="form-control"
            placeholder="Search"
            aria-describedby="addon-wrapping"
            onChange={e => handleSearch(e)}
          ></input>
        </div>
      </div>
      <div className="table-order-product mt-5">
        <table style={{ width: "100%" }}>
          <thead>
            <tr>
              <th style={{ width: "40%" }}>
                Product name
                <img src="" alt="" />
              </th>
              <th style={{ width: "20%" }}>
                Price
                <img src="" alt="" />
              </th>
              <th style={{ width: "20%" }}>
                Stock
                <img src="" alt="" />
              </th>
              <th style={{ width: "20%" }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <TableItem
                title={item.product_name}
                price={item.price}
                quantity={item.quantity}
                idProduct={item.id_product}
                click={(e) => handleDelete(e)}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
