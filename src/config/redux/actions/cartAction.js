import swal from 'sweetalert';

export const addCart = (product) => async (dispatch, getState) => {
  const {cart: newItemCart} = getState().cart;
  const {orders: updateOrder} = getState().orders;
  const itemOnCart = newItemCart.find((element) => {
    return element.id_product === product.id_product;
  });
  if (itemOnCart) {
    swal('info', 'This product is already in your cart', 'info');
  } else {
    newItemCart.push(product);
    dispatch({type: 'updateOrder', payload: updateOrder.totalPrice += product.price})
    dispatch({type: 'addCart', payload: newItemCart});
    swal('Success', 'Added to cart', 'success');
  }
};

export const deleteItemOnCart = (product) => async (dispatch, getState) => {
  const {cart: updatedCart} = getState().cart;
  const {orders: updateOrder} = getState().orders;
  const productIndex = updatedCart.findIndex((element) => {
    return element.id_product === product.id_product
  })
  swal({
    title: "Remove product",
    text: "Do you want to remove this product from your cart ?",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
  .then((willDelete) => {
    if (willDelete) {
      updatedCart.splice(productIndex, 1)
      dispatch({type: 'updateOrder', payload: updateOrder.totalPrice -= product.price})
      dispatch({type: 'updateCart', payload: updatedCart})
    }
  });
};