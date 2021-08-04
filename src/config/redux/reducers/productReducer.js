const initialState = {
  products: [],
  product: [],
  loading: false
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "getAllProduct":
      return {
        ...state,
        products: action.payload,
      };
    case "showProductByCategory":
      return {
        ...state,
        products: action.payload,
      };
    case "showProduct":
      return {
        ...state,
        product: action.payload,
      };
    case "searchProduct":
      return {
        ...state,
        products: action.payload,
      };
    case "loading":
      return{
        ...state,
        loading: action.payload,
      }
    default:
      return state;
  }
};

export default productReducer;
