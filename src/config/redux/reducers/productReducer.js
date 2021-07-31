const initialState = {
  products: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "getAllProduct":
      return {
        ...state,
        products: action.payload,
      }
    default:
        return state
  }
};

export default productReducer