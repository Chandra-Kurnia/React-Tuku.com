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
    const payload = result.data;
    dispatch({ type: "login", payload });
    localStorage.setItem("token", payload.data.token);
    history.push("/");
  } catch (error) {
    swal("Error!", "Wrong email or password", "error");
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
    swal("Error!", "Failed register", "error");
  }
};
