const initialState = {
  profile: {},
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "login":
      return {
        ...state,
        profile: action.payload.data,
      }
    case "logout":
      return{
        ...state,
        profile: {}
      }
    case "getProfile":
      return{
        ...state,
        profile: action.payload.data
      }
    default:
      return state;
  }
};

export default userReducer;
