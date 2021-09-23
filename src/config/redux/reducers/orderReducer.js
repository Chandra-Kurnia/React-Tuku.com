const initialState = {
    orders: {
      totalPrice: 0,
      payment: '',
      address: ''
    }
  };
  
  const Orderreducer = (state = initialState, action) => {
    switch (action.type) {
      case "updateOrder":
        return{
          ...state,
          orders: {
            totalPrice: action.payload
          }
        }
      case "createorder" :
        return{
          orders: action.payload
        }
      case "removeorder":
        return{
          ...state,
          orders: action.payload
        }
      default:
        return state;
    }
  };
  
  export default Orderreducer;