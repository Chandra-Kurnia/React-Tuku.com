import React, { Fragment, useEffect, useState } from "react";
import style from "./storeContent.module.css";
import { Input } from "../../base/Input/Input";
import { ColorPicker } from "../../base/ColorPicker/ColorPicker";
import axios from "axios";
import { useHistory } from "react-router";
import swal from "sweetalert";
import { LoaderPage } from "../../base/LoaderPage/LoaderPage";

export const StoreUpdate = (props) => {
  const [Loading, setLoading] = useState(false);
  const move = useHistory();
  const { idProduct } = props;
  const getData = () => {
    axios
      .get(`http://localhost:4000/v1/product/show/${idProduct}`)
      .then((response) => {
        // setresponse.data.data[0]);
        const {
          product_name,
          price,
          quantity,
          size,
          id_category,
          category,
          color,
          status,
          image,
          description,
        } = response.data.data[0];
        setTitle(product_name);
        setprice(price);
        setstock(quantity);
        setSize(size);
        setidCategory(id_category);
        setCategory(category);
        setcolor(color);
        setcondition(status);
        setUrlImage(image);
        setdesc(description);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [title, setTitle] = useState("");
  const [price, setprice] = useState("");
  const [stock, setstock] = useState("");
  const [size, setSize] = useState("");
  const [idCategory, setidCategory] = useState("");
  const [ctg, setCategory] = useState("");
  const [color, setcolor] = useState("");
  const [condition, setcondition] = useState("");
  const [urlImage, setUrlImage] = useState("");
  const [desc, setdesc] = useState("");

  const handleUpdate = () => {
    const dataProduct = {
      productName: title,
      store_id: 6,
      category: idCategory,
      color,
      size,
      price,
      quantity: stock,
      status: condition,
      image: urlImage,
      description: desc,
    };
    axios
      .put(`http://localhost:4000/product/${idProduct}`, dataProduct)
      .then(() => {
        swal("Berhasil", "Data berhasil di update", "success").then((value) => {
          if (value | (value === false)) {
            setLoading(true);
            setTimeout(() => {
              move.push("/product");
              setLoading(false);
            }, 300);
          }
        });
      })
      .catch(() => {
        swal("Gagal", "Data gagal diupdate");
      });
  };

  return (
    <Fragment>
      {Loading && <LoaderPage />}
      <div className={`container pt-3 pb-5 ${style.content}`}>
        <h2>My Products</h2>
        <hr />
        <span>Name Of Goods</span>
        <div className="w-50">
          <Input
            name="titleProduct"
            value={(e) => setTitle(e.target.value)}
            val={title}
            useRef="title"
          />
        </div>
      </div>
      <div className={`container mt-3 pt-3 pb-5 ${style.content}`}>
        <h2>Items Detail</h2>
        <hr />
        <span>Unit Price</span>
        <div className="w-50">
          <Input
            name="price"
            value={(e) => setprice(e.target.value)}
            val={price}
          />
        </div>
        <span>Stock</span>
        <div className="w-50">
          <Input
            name="stock"
            value={(e) => setstock(e.target.value)}
            type="number"
            val={stock}
          />
        </div>
        <div className="w-50 mb-3">
          <div className="d-flex">
            <select
              class="form-select me-1 w-50"
              aria-label="Default select example"
              onChange={(e) => setSize(e.target.value)}
            >
              <option selected value={size}>
                {size}
              </option>
              <option value="XS">XS</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
            </select>
            <select
              class="form-select me-1 w-50"
              aria-label="Default select example"
              onChange={(e) => setCategory(e.target.value)}
            >
              <option selected defaultValue={idCategory}>
                {ctg}
              </option>
              <option value="2">T-Shirt</option>
              <option value="5">Shorts</option>
              <option value="1">Jacket</option>
              <option value="6">Pants</option>
              <option value="7">Shoes</option>
              <option value="8">High Heels</option>
              <option value="9">Wriswatch</option>
              <option value="10">HandBag</option>
              <option value="11">BagBack</option>
              <option value="12">Socks</option>
              <option value="13">Glasses</option>
              <option value="14">Cap</option>
              <option value="15">Tie</option>
              <option value="16">Dress</option>
              <option value="17">Formal Suit</option>
              <option value="18">Accessories</option>
            </select>
          </div>
          <div className="d-flex w-50 align-items-center text-center mt-5">
            <div className="w-25">
              <ColorPicker
                type="radio"
                color="Black"
                value={(e) => setcolor(e.target.value)}
              />
            </div>
            <div className="w-25">
              <ColorPicker
                type="radio"
                color="DarkPrimary"
                value={(e) => setcolor(e.target.value)}
              />
            </div>
            <div className="w-25">
              <ColorPicker
                type="radio"
                color="darkBlue"
                value={(e) => setcolor(e.target.value)}
              />
            </div>
            <div className="w-25">
              <ColorPicker
                type="radio"
                color="lightGreen"
                value={(e) => setcolor(e.target.value)}
              />
            </div>
          </div>
        </div>
        <span>Condition</span>
        <br />
        <input
          className="me-2"
          type="radio"
          name="condition"
          id="new"
          value="NEW"
          onClick={(e) => setcondition(e.target.value)}
          checked
        />
        <label className="me-5" htmlFor="new">
          Baru
        </label>
        <input
          className="me-2"
          type="radio"
          name="condition"
          id="former"
          value="FORMER"
          onClick={(e) => setcondition(e.target.value)}
        />
        <label htmlFor="former">Bekas</label>
      </div>
      <div className={`container mt-3 pt-3 pb-5 ${style.content}`}>
        <h2>Photo of goods</h2>
        <hr />
        <div
          className="container p-4"
          style={{ border: "3px dashed var(--customGrey)" }}
        >
          <img src={urlImage} alt="" style={{ width: "300px" }} />
          <hr />
          <input
            type="text"
            className="form-control mb-3"
            defaultValue={urlImage}
            onFocus={(e) => setUrlImage(e.target.value)}
          />
          <div className="text-center">
            <button className="btn btn-outline-secondary rounded-pill">
              Upload Foto
            </button>
          </div>
        </div>
      </div>
      <div className={`container mt-3 pt-3 pb-5 ${style.content}`}>
        <h2>Description</h2>
        <hr />
        <div className="container">
          <textarea
            name=""
            id="product-desc"
            cols="115"
            rows="10"
            defaultValue={desc}
            onFocus={(e) => setdesc(e.target.value)}
          ></textarea>
        </div>
      </div>
      <div className="container d-flex flex-row-reverse mb-5">
        <button
          className="btn rounded-pill mt-2"
          style={{
            backgroundColor: "var(--primary",
            width: "200px",
            color: "white",
          }}
          onClick={() => handleUpdate()}
        >
          Update Data
        </button>
      </div>
    </Fragment>
  );
};
