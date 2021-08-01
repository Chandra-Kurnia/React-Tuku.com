import React, { useEffect, useState } from "react";
import style from "./storeContent.module.css";
import { TableItem } from "../../base/TableItem/TableItem";
import axios from "axios";
import arrowOrder from "../../../assets/icon/arrowOrder.svg";
import { LoaderPage } from "../../base/LoaderPage/LoaderPage";
import swal from "sweetalert";

export const StoreProduct = () => {
  const [Loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [order, setOrder] = useState("ASC");
  const [limit, setlimit] = useState(5);
  const [orderBy, setorderBy] = useState("id_product");
  const [page, setPage] = useState("");
  const [totalData, setTotalData] = useState("");
  let totalPage = "";

  const handleOrder = (e) => {
    setOrder(e.target.value);
  };

  const handleOrderBy = (ord) => {
    setorderBy(ord);
  };

  let link = `http://localhost:4000/v1/product/?order=${order}&orderBy=${orderBy}&page=${page}`;

  if (limit !== "") {
    link += `&limit=${limit}`;
  }

  if (keyword !== "") {
    link += `&keyword=${keyword}`;
  }

  totalPage = Math.floor(totalData / limit);
  if (totalData % limit > 0) {
    totalPage += 1;
  }

  const iteration = [];
  for (let i = 1; i <= totalPage; i++) {
    iteration.push(i);
  }

  useEffect(() => {
    getAllData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keyword, order, orderBy, limit, page]);

  const getAllData = () => {
    console.log(link);
    axios
      .get(link)
      .then((response) => {
        setData(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });

    axios.get("http://localhost:4000/product").then((response) => {
      setTotalData(response.data.amount);
    });
  };

  const handleDelete = (e) => {
    const id_product = e;
    swal("Berhasil", "Product sukses dihapus", "success").then((value) => {
      if (value | (value === false)) {
        setLoading(true);
        axios.delete(`http://localhost:4000/v1/product/${id_product}`);
        setTimeout(() => {
          getAllData();
          setLoading(false);
        }, 500);
      }
    });
  };

  return (
    <div className={`container pt-3 pb-5 ${style.content}`}>
      {Loading && <LoaderPage />}
      <h2>My Products</h2>
      <div className="d-flex table-order fw-bold flex-wrap">
        <input
          type="radio"
          class="table-order-radio-all d-none"
          name="table-order-radio"
          id="table-order-all"
          defaultChecked
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
      {/* Search */}
      <div className={`mt-4 ${style.searchOrder}`}>
        <div className="input-group flex-nowrap">
          <span class="input-group-text" id="addon-wrapping">
            <i class="fa fa-search"></i>
          </span>
          <input
            type="text"
            class="form-control"
            placeholder="Search"
            aria-describedby="addon-wrapping"
            onChange={(e) => setKeyword(e.target.value)}
          ></input>
        </div>
      </div>
      <div className="table-order-product mt-5">
        {/* Table control */}
        <div className="d-flex flex-column flex-lg-row">
          {/* Order */}
          <div className={`${style.tableControl} ms-2 mt-2 mb-2`}>
            <span>Order : </span>
            <select
              className={`${style.InputTableControl} form-select`}
              aria-label="Default select example"
              onChange={(e) => handleOrder(e)}
            >
              <option value="ASC" selected>
                Ascending
              </option>
              <option value="DESC">Descending</option>
            </select>
          </div>
          {/* Amount of data */}
          <div className={`${style.tableControl} ms-2 mt-2 mb-2`}>
            <span>Amount of data : </span>
            <select
              className={`${style.InputTableControl} form-select`}
              aria-label="Default select example"
              onChange={(e) => setlimit(e.target.value)}
            >
              <option value="5">5 data / page</option>
              <option value="10">10 data / page</option>
              <option value="15">15 data / page</option>
            </select>
          </div>
          {/* Page */}
          <div className={`${style.tableControl} ms-2 mt-2 mb-2`}>
            <span>Page 1 of {totalPage} page</span>
            <select
              className={`${style.InputTableControl} form-select`}
              aria-label="Default select example"
              onChange={(e) => setPage(e.target.value)}
            >
              {iteration.map((numberPage) => (
                <option value={numberPage}>{numberPage}</option>
              ))}
            </select>
          </div>
        </div>
        {/* Table */}
        <table className={style.TableContent}>
          <thead>
            <tr>
              <th style={{ width: "40%", position: "relative" }}>
                Product name
                <button
                  className="btn"
                  style={{
                    "box-shadow": "none",
                    position: "absolute",
                    right: 0,
                    bottom: "20%",
                  }}
                  onClick={() => handleOrderBy("product_name")}
                >
                  <img src={arrowOrder} alt="" />
                </button>
              </th>
              <th style={{ width: "20%", position: "relative" }}>
                Price
                <button
                  className="btn"
                  style={{
                    "box-shadow": "none",
                    position: "absolute",
                    right: 0,
                    bottom: "20%",
                  }}
                  onClick={() => handleOrderBy("price")}
                >
                  <img src={arrowOrder} alt="" />
                </button>
              </th>
              <th style={{ width: "20%", position: "relative" }}>
                Stock
                <button
                  className="btn"
                  style={{
                    "box-shadow": "none",
                    position: "absolute",
                    right: 0,
                    bottom: "20%",
                  }}
                  onClick={() => handleOrderBy("quantity")}
                >
                  <img src={arrowOrder} alt="" />
                </button>
              </th>
              <th style={{ width: "20%" }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {data
              ? data.map((item) => (
                  <TableItem
                    key={item.id_product}
                    title={item.product_name}
                    price={item.price}
                    quantity={item.quantity}
                    idProduct={item.id_product}
                    click={(e) => handleDelete(e)}
                  />
                ))
              : "DATA NOT FOUND"}
          </tbody>
        </table>
      </div>
    </div>
  );
};
