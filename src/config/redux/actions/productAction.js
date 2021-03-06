import axios from "axios";
import swal from "sweetalert";

export const getProduct = () => async (dispatch) => {
  const token = localStorage.getItem('token')
  await axios
    .get(`${process.env.REACT_APP_SERVER_URL}/product`, {headers: {
      Authorization: `Bearer ${token}`,
    }})
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
      console.log(err.response);
    });
};

export const showProduct = (id, history) => async (dispatch) => {
  await axios
    .get(`${process.env.REACT_APP_SERVER_URL}/product/show/${id}`)
    .then((res) => {
      if(!res.data.data){
        dispatch({ type: "showProduct", payload: {} });
        history.push('/')
      }else{
        dispatch({ type: "showProduct", payload: res.data.data[0] });
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

export const searchProduct = (keyword) => async (dispatch) => {
  await axios
    .get(`${process.env.REACT_APP_SERVER_URL}/product?keyword=${keyword}`)
    .then((res) => {
      dispatch({ type: "searchProduct", payload: res.data.data });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const createProduct =
  (dataProduct, history, token) => async (dispatch) => {
    const formData = new FormData();
    formData.append("productName", dataProduct.productName);
    formData.append("store_id", dataProduct.store_id);
    formData.append("category", dataProduct.category);
    formData.append("color", dataProduct.color);
    formData.append("size", dataProduct.size);
    formData.append("price", dataProduct.price);
    formData.append("quantity", dataProduct.quantity);
    formData.append("status", dataProduct.status);
    formData.append("description", dataProduct.description);
    formData.append("image", dataProduct.image);
    console.log(formData);
    await axios
      .post(`${process.env.REACT_APP_SERVER_URL}/product/`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      })
      .then(() => {
        swal("Success", "Product successfully inserted", "success").then(
          (value) => {
            if (value | (value === false)) {
              dispatch({ type: "loading", payload: true });
              setTimeout(() => {
                history.push("/product");
                dispatch({ type: "loading", payload: false });
              }, 200);
            }
          }
        );
      })
      .catch((err) => {
        swal("Failed", err.response.data.error[0].msg, "error");
        console.log(err.response);
      });
  };