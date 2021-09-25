import swal from "sweetalert";
import axios from "axios";

export const createOrder = (dataOrder, history) => async(dispatch, getState) => {
    const token = localStorage.getItem('token')
    const {cart: cartUser} = getState().cart;
    const {orders: ordersUser} = getState().orders;
    dispatch({type: 'createorder', payload: {...ordersUser, payment: dataOrder.payment, address: dataOrder.address}})
    const dataOrderUser = {
        products: cartUser,
        ordersUser: {...ordersUser, payment: dataOrder.payment, address: dataOrder.address}
    }
    console.log(dataOrderUser);
    axios.post(`${process.env.REACT_APP_SERVER_URL}/order/createorder`, dataOrderUser, {headers: {
        Authorization: `Bearer ${token}`,
      }})
    .then(() => {
        dispatch({type: 'updateCart', payload: []});
        dispatch({type: 'removeorder', payload: {totalPrice: 0, payment: '', address: '', store_id: ''}});
        swal('Success', 'Order success', 'success')
        .then(() => {
            history.push('/order')
        })
    })
    .catch(err => {
        swal('Error', 'Order Failed, try again later', 'error')
    })
}