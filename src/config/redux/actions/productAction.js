import axios from "axios";

export const getProduct = () => async (dispatch) => {
  await axios
    .get(`${process.env.REACT_APP_SERVER_URL}/product`)
    .then((res) => {
      console.log();
      dispatch({ type: "getAllProduct", payload: res.data.data });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const showProductByCategory = (category) => async (dispatch) => {
  await axios
    .get(`${process.env.REACT_APP_SERVER_URL}/product/category/${category}`)
    .then((res) => {
      dispatch({ type: "showProductByCategory", payload: res.data.data });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const showProduct = (id) => async (dispatch) => {
  await axios
    .get(`${process.env.REACT_APP_SERVER_URL}/product/show/${id}`)
    .then((res) => {
      dispatch({ type: "showProduct", payload: res.data.data[0] });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const searchProduct = (keyword) => async (dispatch) => {
  await axios
    .get(`http://localhost:4000/v1/product?keyword=${keyword}`)
    .then((res) => {
      dispatch({ type: "searchProduct", payload: res.data.data });
    })
    .catch((err) => {
      console.log(err);
    });
};
