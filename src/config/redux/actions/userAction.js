import axios from 'axios';
import swal from 'sweetalert';

export const login = (data, history) => async (dispatch) => {
  try {
    const form = {
      email: data.email,
      password: data.password,
      roles: data.roles,
    };
    const result = await axios.post(`${process.env.REACT_APP_SERVER_URL}/users/login`, form);
    result.data.roles = data.roles;
    const payload = result.data;
    dispatch({type: 'login', payload});
    localStorage.setItem('token', payload.data.token);
    history.push('/');
  } catch (error) {
    console.log(error.response);
    swal('Error!', error.response.data.error[0].msg, 'error');
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
    if (data.roles === 'customer') {
      await axios.post(`${process.env.REACT_APP_SERVER_URL}/users`, form);
      history.push('/activateAccount');
    } else {
      await axios.post(`${process.env.REACT_APP_SERVER_URL}/store`, form);
      history.push('/activateAccount');
    }
  } catch (error) {
    swal('Error!', error.response.data.error[0].msg, 'error');
  }
};

export const activate = (role, token) => async (dispatch) => {
  try {
    axios.get(`${process.env.REACT_APP_SERVER_URL}/${role}/activation/${token}`);
  } catch (err) {}
};

export const update = (data, role, id) => async (dispatch) => {
  if (role === 'seller') {
    await axios
      .put(`${process.env.REACT_APP_SERVER_URL}/store/${id}`, data)
      .then(() => {
        swal('Success', 'Succesfully updated data store', 'success');
      })
      .catch((err) => {
        swal('Failed', err.response.data.error[0].msg, 'error');
      });
  } else {
    await axios
      .put(`${process.env.REACT_APP_SERVER_URL}/users/${id}`, data)
      .then(() => {
        swal('Success', 'Succesfully updated data store', 'success');
      })
      .catch((err) => {
        swal('Failed', err.response.data.error[0].msg, 'error');
      });
  }
};

export const logout = (history) => async (dispatch) => {
  dispatch({type: 'logout'});
  dispatch({type: 'updateCart', payload: []});
  dispatch({type: 'removeorder', payload: {totalPrice: 0, payment: '', address: '', store_id: ''}});
  localStorage.removeItem('token');
  swal('Success', 'Logout success', 'success').then(() => {
    history.push('/');
  });
};

export const getProfile = () => async (dispatch) => {
  try {
    const token = localStorage.getItem('token');
    const user = await axios.get(`${process.env.REACT_APP_SERVER_URL}/users/checktoken/usertoken`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch({type: 'getProfile', payload: user.data});
  } catch (error) {
    console.log(error.response);
  }
};
