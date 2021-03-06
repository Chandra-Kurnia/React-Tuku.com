/* eslint-disable no-useless-concat */
import React, {Fragment, useEffect, useState, useRef} from 'react';
import style from './storeContent.module.css';
import {Input} from '../../base/Input/Input';
import {ColorPicker} from '../../base/ColorPicker/ColorPicker';
import axios from 'axios';
import {useHistory} from 'react-router';
import swal from 'sweetalert';
import {LoaderPage} from '../../base/LoaderPage/LoaderPage';
import {Editor} from '@tinymce/tinymce-react';

export const StoreUpdate = (props) => {
  const editorRef = useRef(null);
  const [Loading, setLoading] = useState(false);
  const move = useHistory();
  const {idProduct} = props;
  const token = localStorage.getItem('token');
  const getData = () => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/product/show/${idProduct}`)
      .then((response) => {
        // setresponse.data.data[0]);
        const {product_name, price, quantity, size, id_category, category, color, status, image, description} =
          response.data.data[0];
        setTitle(product_name);
        setprice(price);
        setstock(quantity);
        setSize(size);
        setidCategory(id_category);
        setCategory(category);
        setcolor(color);
        setcondition(status);
        setimage(image);
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

  const [title, setTitle] = useState('');
  const [price, setprice] = useState('');
  const [stock, setstock] = useState('');
  const [size, setSize] = useState('');
  const [idCategory, setidCategory] = useState('');
  const [ctg, setCategory] = useState('');
  const [color, setcolor] = useState('');
  const [condition, setcondition] = useState('');
  const [image, setimage] = useState('');
  const [desc, setdesc] = useState('');
  const [previewImage, setpreviewImage] = useState('')

  const dataProduct = {
    productName: title,
    store_id: 6,
    category: idCategory,
    color,
    size,
    price,
    quantity: stock,
    status: condition,
    image: image,
    description: desc,
  };

  const handleImage = (e) => {
    setimage(e.target.files[0]);
    setpreviewImage(URL.createObjectURL(e.target.files[0]))
  };

  const handleUpdate = () => {
    const formData = new FormData();
    formData.append('productName', dataProduct.productName);
    formData.append('store_id', dataProduct.store_id);
    formData.append('category', dataProduct.category);
    formData.append('color', dataProduct.color);
    formData.append('size', dataProduct.size);
    formData.append('price', dataProduct.price);
    formData.append('quantity', dataProduct.quantity);
    formData.append('status', dataProduct.status);
    formData.append('description', dataProduct.description);
    formData.append('image', dataProduct.image);
    axios
      .put(`${process.env.REACT_APP_SERVER_URL}/product/${idProduct}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        swal('Success', 'Data Successfully updated', 'success').then((value) => {
          if (value | (value === false)) {
            setLoading(true);
            setTimeout(() => {
              move.push('/product');
              setLoading(false);
            }, 300);
          }
        });
      })
      .catch((err) => {
        swal('Failed', err.response.data.error[0].msg, 'error');
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
          <Input name="titleProduct" value={(e) => setTitle(e.target.value)} val={title} useRef="title" />
        </div>
      </div>
      <div className={`container mt-3 pt-3 pb-5 ${style.content}`}>
        <h2>Items Detail</h2>
        <hr />
        <span>Unit Price</span>
        <div className="w-50">
          <Input name="price" value={(e) => setprice(e.target.value)} val={price} />
        </div>
        <span>Stock</span>
        <div className="w-50">
          <Input name="stock" value={(e) => setstock(e.target.value)} type="number" val={stock} />
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
              <ColorPicker type="radio" color="Black" value={(e) => setcolor(e.target.value)} />
            </div>
            <div className="w-25">
              <ColorPicker type="radio" color="DarkPrimary" value={(e) => setcolor(e.target.value)} />
            </div>
            <div className="w-25">
              <ColorPicker type="radio" color="darkBlue" value={(e) => setcolor(e.target.value)} />
            </div>
            <div className="w-25">
              <ColorPicker type="radio" color="lightGreen" value={(e) => setcolor(e.target.value)} />
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
        <div className="container p-4" style={{border: '3px dashed var(--customGrey)'}}>
          <img
            src={previewImage === '' ? `${process.env.REACT_APP_SERVER_IMAGE_URL}/${image}` : previewImage}
            alt=""
            style={{ width: "300px" }}
          />
          <hr />
          <div className="text-center">
            <input
              type="file"
              name=""
              id="inputFile"
              className="d-none"
              onChange={handleImage}
            />
            <label htmlFor="inputFile" className="btn btn-outline-secondary rounded-pill">
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
            // initialValue={desc}
            value={desc}
            init={{
              height: 500,
              menubar: false,
              plugins: [
                'advlist autolink lists link image charmap print preview anchor',
                'searchreplace visualblocks code fullscreen',
                'insertdatetime media table paste code help wordcount',
              ],
              toolbar: 'undo redo | ' + 'bold italic backcolor | ' + 'bullist numlist | ',
              content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
            }}
          />
        </div>
      </div>
      <div className="container d-flex flex-row-reverse mb-5">
        <button
          className="btn rounded-pill mt-2"
          style={{
            backgroundColor: 'var(--primary',
            width: '200px',
            color: 'white',
          }}
          onClick={() => handleUpdate()}
        >
          Update Data
        </button>
      </div>
    </Fragment>
  );
};
