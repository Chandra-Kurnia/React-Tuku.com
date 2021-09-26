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
  const formData = new FormData()
  formData.append('name', data.name)
  formData.append('email', data.email)
  formData.append('phone_number', data.phone_number)
  formData.append('sex', data.sex)
  formData.append('dateBirth', data.dateBirth)
  formData.append('monthBirth', data.monthBirth)
  formData.append('yearBirth', data.yearBirth)
  formData.append('avatar', data.avatar)
  // for (let [key, value] of formData.entries()) {
  //   console.log(`${key}: ${value}`);
  // }
  if (role === 'seller') {
    await axios
      .put(`${process.env.REACT_APP_SERVER_URL}/store/${id}`, formData)
      .then(() => {
        swal('Success', 'Succesfully updated data store', 'success');
      })
      .catch((err) => {
        swal('Failed', err.response.data.error[0].msg, 'error');
      });
  } else {
    await axios
      .put(`${process.env.REACT_APP_SERVER_URL}/users/${id}`, formData)
      .then((result) => {
        const newDataUser = result.data.data
        console.log(newDataUser);
        localStorage.setItem('token', newDataUser.token)
        delete newDataUser.token
        dispatch({type: 'getProfile', payload: result.data});
        swal('Success', 'Succesfully updated data store', 'success');
      })
      .catch((err) => {
        console.log(err);
        if(err?.response?.data?.error[0]?.msg){
          swal('Failed', err.response.data.error[0].msg, 'error');
        }else{
          swal('Failed', 'Update profile failed, please try again later', 'error');
        }
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
