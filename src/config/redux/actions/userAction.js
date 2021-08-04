import axios from "axios";
import swal from "sweetalert";

export const login = (data, history) => async (dispatch) => {
  try {
    const form = {
      email: data.email,
      password: data.password,
      roles: data.roles,
    };
    const result = await axios.post(
      "http://localhost:4000/v1/users/login",
      form
    );
    result.data.roles = data.roles
    const payload = result.data
    dispatch({ type: "login", payload });
    localStorage.setItem("token", payload.data.token);
    if (data.roles === "customer") {
      history.push("/");
    } else {
      history.push("/store");
    }
  } catch (error) {
    swal("Error!", error.response.data.error[0].msg, "error");
  }
};

export const register = (data, history) => async (dispatch) => {
  try {
    const form = {
      owner: data.owner,
      name: data.name,
      email: data.email,
      phoneNumber: data.phoneNumber,
      storeName: data.storeName,
      pass: data.pass,
    };
    if (data.roles === "customer") {
      await axios.post("http://localhost:4000/v1/users", form);
      history.push("/activateAccount");
    } else {
      await axios.post("http://localhost:4000/v1/store", form);
      history.push("/activateAccount");
    }
  } catch (error) {
    swal("Error!", error.response.data.error[0].msg, "error");
  }
};

export const activate = (role, token) => async (dispatch) => {
  try{
    axios.get(`http://localhost:4000/v1/${role}/activation/${token}`)
  }catch(err){
  }
};
