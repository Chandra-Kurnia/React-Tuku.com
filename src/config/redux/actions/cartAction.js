import swal from 'sweetalert';

export const addCart = (product) => async (dispatch, getState) => {
  const {cart: newItemCart} = getState().cart;
  const {orders: updateOrder} = getState().orders;
  const itemOnCart = newItemCart.find((element) => {
    return element.id_product === product.id_product;
  });
  let duplicateStore = false;
  if(updateOrder.store_id === ''){
    updateOrder.store_id = product.store_id
  }else{
    duplicateStore = updateOrder.store_id !== product.store_id;
  }
  if (itemOnCart) {
    return swal('info', 'This product is already in your cart', 'info');
  } else if (duplicateStore) {
    return swal(
      'info',
      'You have selected an item from another store, please complete the payment before selecting this item. Or you can empty your cart.',
      'info'
    );
  }
  newItemCart.push(product);
  dispatch({type: 'updateOrder', payload: {
    totalPrice: (updateOrder.totalPrice += product.price),
    store_id: updateOrder.store_id
  }});
  dispatch({type: 'addCart', payload: newItemCart});
  swal('Success', 'Added to cart', 'success');
};

export const deleteItemOnCart = (product) => async (dispatch, getState) => {
  const {cart: updatedCart} = getState().cart;
  const {orders: updateOrder} = getState().orders;
  const productIndex = updatedCart.findIndex((element) => {
    return element.id_product === product.id_product;
  });
  if(updateOrder.totalPrice - product.price === 0){
    updateOrder.store_id = ''
  }
  swal({
    title: 'Remove product',
    text: 'Do you want to remove this product from your cart ?',
    icon: 'warning',
    buttons: true,
    dangerMode: true,
  }).then((willDelete) => {
    if (willDelete) {
      updatedCart.splice(productIndex, 1);
      dispatch({type: 'updateOrder', payload: {
        totalPrice: (updateOrder.totalPrice -= product.price),
        store_id: updateOrder.store_id
      }});
      dispatch({type: 'updateCart', payload: updatedCart});
    }
  });
};
