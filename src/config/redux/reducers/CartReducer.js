const initialState = {
    cart: []
  };
  
  const CartReducer = (state = initialState, action) => {
    switch (action.type) {
      case "addCart":
        return {
          ...state,
          cart: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default CartReducer;