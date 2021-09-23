import React, { Fragment, useState, useRef } from "react";
import style from "./storeContent.module.css";
import { Input } from "../../base/Input/Input";
import { ColorPicker } from "../../base/ColorPicker/ColorPicker";
import { useHistory } from "react-router";
import { LoaderPage } from "../../base/LoaderPage/LoaderPage";
import { Editor } from "@tinymce/tinymce-react";
import { useDispatch, useSelector } from "react-redux";
import { createProduct } from "../../../config/redux/actions/productAction";
// import { logout } from "../../../config/redux/actions/userAction";

export const StoreSell = () => {
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  const editorRef = useRef(null);
  const { Loading } = useSelector((state) => state.product);
  const { profile } = useSelector((state) => state.user);
  // const [Loading, setLoading] = useState(false);
  const history = useHistory();
  if (profile.role !== "seller") {
    // dispatch(logout(history));
    history.push('/')
  }
  const [title, setTitle] = useState("");
  const [price, setprice] = useState("");
  const [stock, setstock] = useState("");
  const [size, setSize] = useState("");
  const [category, setCategory] = useState("");
  const [color, setcolor] = useState("");
  const [condition, setcondition] = useState("");
  const [image, setimage] = useState();
  const [desc, setdesc] = useState("");
  const [previewImage, setpreviewImage] = useState()

  let dataProduct = {
    productName: title,
    store_id: 6,
    category,
    color,
    size,
    price,
    quantity: stock,
    status: condition,
    description: desc,
    image: image,
  };

  const handleImage = (e) => {
    setimage(e.target.files[0]);
    setpreviewImage(URL.createObjectURL(e.target.files[0]))
  };

  const handleSave = () => {
    dispatch(createProduct(dataProduct, history, token));
  };

  return (
    <Fragment>
      {Loading && <LoaderPage />}
      <div className={`container pt-3 pb-5 ${style.content}`}>
        <h2>My Products</h2>
        <hr />
        <span>Name Of Goods</span>
        <div className="w-50">
          <Input name="titleProduct" value={(e) => setTitle(e.target.value)} />
        </div>
      </div>
      <div className={`container mt-3 pt-3 pb-5 ${style.content}`}>
        <h2>Items Detail</h2>
        <hr />
        <span>Unit Price (Rp. )</span>
        <div className="w-50">
          <Input name="price" value={(e) => setprice(e.target.value)} />
        </div>
        <span>Stock</span>
        <div className="w-50">
          <Input
            name="stock"
            value={(e) => setstock(e.target.value)}
            type="number"
          />
        </div>
        <div className="w-50 mb-3">
          <div className="d-flex">
            <select
              class="form-select me-1 w-50"
              aria-label="Default select example"
              onChange={(e) => setSize(e.target.value)}
            >
              <option selected>Size</option>
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
              <option selected>Category</option>
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
          <img src={previewImage} alt="" style={{ width: "300px" }} />
          <hr />
          {/* <input
            type="text"
            className="form-control mb-3"
            onChange={(e) => setUrlImage(e.target.value)}
          /> */}
          <div className="text-center">
            <input
              type="file"
              name=""
              id="inputFile"
              className="d-none"
              onChange={handleImage}
              accept='image/png'
            />
            <label
              htmlFor="inputFile"
              className="btn btn-outline-secondary rounded-pill"
            >
              Upload Foto
            </label>
          </div>
        </div>
      </div>
      <div className={`container mt-3 pt-3 pb-5 ${style.content}`}>
        <h2>Description</h2>
        <hr />
        <div className="container">
          <Editor
            textareaName="description"
            onEditorChange={(e) => setdesc(e)}
            onInit={(evt, editor) => (editorRef.current = editor)}
            init={{
              height: 500,
              menubar: false,
              plugins: [
                "advlist autolink lists link image charmap print preview anchor",
                "searchreplace visualblocks code fullscreen",
                "insertdatetime media table paste code help wordcount",
              ],
              toolbar:
                "undo redo | " +
                "bold italic backcolor | " +
                "bullist numlist | ",
              content_style:
                "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
            }}
          />
        </div>
      </div>
      <div className="container d-flex flex-row-reverse mb-5">
        <button
          className="btn rounded-pill mt-2"
          style={{
            backgroundColor: "var(--primary)",
            width: "100px",
            color: "white",
          }}
          onClick={() => handleSave()}
        >
          Sell
        </button>
      </div>
    </Fragment>
  );
};
