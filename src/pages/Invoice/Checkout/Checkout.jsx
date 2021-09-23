import React from 'react';
import {Fragment, useState} from 'react';
import {BoxItem} from '../../../components/base/BoxItem/BoxItem';
// import { CheckBox } from "../../../components/base/CheckBox/CheckBox";
import styleBox from '../../../components/base/BoxItem/BoxItem.module.css';
import style from './Checkout.module.css';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router';
import { createOrder } from '../../../config/redux/actions/orderActions';

export const Checkout = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const {cart} = useSelector((state) => state.cart);
  const {orders} = useSelector((state) => state.orders);
  const [dataOrder, setdataOrder] = useState({
    payment: '',
    address: ''
  })

  if (cart.length < 1) {
    history.push('/MyBag');
  }

  const handlePaymentMethod = (e) => {
    document.getElementById('payment-opt') && document.getElementById('payment-opt').remove();
    setdataOrder({
      ...dataOrder,
      payment: e.target.value
    })
  };

  const handleAddress = (e) => {
    setdataOrder({
      ...dataOrder,
      address: e.target.value
    })
  }

  const handleOrder = () => {
    dispatch(createOrder(dataOrder))
  }

  return (
    <Fragment>
      <div className="container mt-5">
        <h2>My Bag</h2>
      </div>
      <div className="container d-flex justify-content-around flex-wrap">
        <div className={`p-3 ${style.item}`}>
        <textarea name='address' className={style.address} placeholder='Type your address here' onChange={(e) => handleAddress(e)}></textarea>
          {cart.length > 0 ? (
            cart.map((product) => (
              <BoxItem
                productId={product.id_product}
                image={product.image}
                title={product.product_name}
                shop={product.store_name}
                price={product.price}
                quantity={product.quantity}
              />
            ))
          ) : (
            <h5>You dont have product on cart</h5>
          )}
        </div>
        <div className={`${style.sideItem}`}>
          <div className={`align-items-center mb-3 ${styleBox.BoxItem}`}>
            <span className={`fw-bold d-inline-block pe-2 mb-2 ${style.blackText}`}>Shopping summary</span>
            <div className="d-flex justify-content-between">
              <span className={styleBox.ProductShop}>Total Price</span>
              <span className={style.blackText}>Rp. {orders.totalPrice}</span>
            </div>
            <select className={style.payment} name="" id="" onChange={(e) => handlePaymentMethod(e)}>
              <option value="" id="payment-opt">
                Select payment method
              </option>
              <option value="bank">Bank Transfer</option>
              <option value="dana">Dana</option>
              <option value="paypal">Paypal</option>
              <option value="gopay">Go Pay</option>
              <option value="linkaja">Link Aja</option>
              <option value="cod">Cash on delivery</option>
              <option value="cc">Credit card</option>
            </select>
            {dataOrder.address !== '' && dataOrder.payment !== '' ? (
              <button className={`btn text-center w-100 mt-3 rounded-pill ${style.btnBuy}`} onClick={handleOrder}>Pay now</button>
            ) : (
              <button className={`btn text-center w-100 mt-3 rounded-pill ${style.btnBuy}`} disabled>
                Pay now
              </button>
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
};
