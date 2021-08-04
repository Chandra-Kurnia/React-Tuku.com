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
    default:
      return state;
  }
};

export default userReducer;
