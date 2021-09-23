import React from "react";
import { Fragment } from "react";
import { BoxItem } from "../../../components/base/BoxItem/BoxItem";
// import { CheckBox } from "../../../components/base/CheckBox/CheckBox";
import styleBox from "../../../components/base/BoxItem/BoxItem.module.css";
import style from "./MyBag.module.css";
import { useSelector } from "react-redux";
import { deleteItemOnCart } from "../../../config/redux/actions/cartAction";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

export const MyBag = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const { cart } = useSelector((state) => state.cart);
  const {orders} = useSelector(state => state.orders)
  const handleDeleteCartItem = (product) => {
    dispatch(deleteItemOnCart(product))
  }
  return (
    <Fragment>
      <div className="container mt-5">
        <h2>My Bag</h2>
      </div>
      <div className="container d-flex justify-content-around flex-wrap">
        <div className={`p-3 ${style.item}`}>
          {/* <div
            className={`d-flex align-items-center mb-3 position-relative ${styleBox.BoxItem}`}
          >
            <CheckBox />
            <span
              className={`fw-bold d-inline-block ps-3 pe-2 ${style.blackText}`}
            >
              Select all items
            </span>
            <span className={styleBox.ProductShop}>(2 item selected)</span>
            <button className={style.btnDelete}>Delete</button>
          </div> */}
          {cart.length > 0 ?
            cart.map((product) => (
              <BoxItem productId={product.id_product} image={product.image} title={product.product_name} shop={product.store_name} price={product.price} quantity={product.quantity} handleDelete={() => handleDeleteCartItem(product)}/>
            )) : <h5>You dont have product on cart</h5>}
        </div>
        <div className={`${style.sideItem}`}>
          <div className={`align-items-center mb-3 ${styleBox.BoxItem}`}>
            <span
              className={`fw-bold d-inline-block pe-2 mb-2 ${style.blackText}`}
            >
              Shopping summary
            </span>
            <div className="d-flex justify-content-between">
              <span className={styleBox.ProductShop}>Total Price</span>
              <span className={style.blackText}>Rp. {orders.totalPrice}</span>
            </div>
            {cart.length > 0 ?
            <button
            onClick={() => history.push('/checkout')}
              className={`btn text-center w-100 mt-3 rounded-pill ${style.btnBuy}`}
            >
              Buy
            </button>
          : 
            <button
            disabled
              className={`btn text-center w-100 mt-3 rounded-pill ${style.btnBuy}`}
            >
              Buy
            </button>
          
          }
          </div>
        </div>
      </div>
    </Fragment>
  );
};
