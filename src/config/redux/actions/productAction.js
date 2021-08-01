import axios from "axios";

export const getProduct = () => async (dispatch) => {
  await axios
    .get(`http://localhost:4000/v1/product`)
    .then((res) => {
      // console.log(process.env.REACT_APP_SERVER_URL);
      dispatch({ type: "getAllProduct", payload: res.data.data });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const showProductByCategory = (category) => async (dispatch) => {
  await axios
    .get(`http://localhost:4000/v1/product/category/${category}`)
    .then((res) => {
      dispatch({ type: "showProductByCategory", payload: res.data.data });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const showProduct = (id) => async (dispatch) => {
  await axios.get(`http://localhost:4000/v1/product/show/${id}`)
  .then(res => {
    dispatch({type: 'showProduct', payload: res.data.data[0]})
  })
  .catch(err => {
    console.log(err);
  })
}
