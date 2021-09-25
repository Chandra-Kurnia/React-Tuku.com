import React, {useState} from 'react';
import '../../../css/auth.css';
import {LoginLogos} from '../../../components/base/LoginLogos/LoginLogos';
import {LoginSwitch} from '../../../components/base/LoginSwitch/LoginSwitch';
import {ButtonAuth} from '../../../components/base/ButtonAuth/ButtonAuth';
import {AuthInput} from '../../../components/base/AuthInput/AuthInput';
import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {register} from '../../../config/redux/actions/userAction';
import {useHistory} from 'react-router';

export const SignUp = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    owner: '',
    name: '',
    email: '',
    phoneNumber: '',
    storeName: '',
    pass: '',
    roles: 'customer',
  });

  const handleForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const [radioValue, setradioValue] = useState([]);
  const changeValueRadio = (e) => {
    setradioValue(e.target.value);
    setForm({
      roles: e.target.value,
    });
    if(document.getElementById('owner')){
      document.getElementById('owner').value = ''
    }
    if(document.getElementById('name')){
      document.getElementById('name').value = ''
    }

    if(document.getElementById('phone')){
      document.getElementById('phone').value = ''
    }
    
    document.getElementById('email').value = ''
    document.getElementById('password').value = ''

  };

  const handleSignUp = () => {
    dispatch(register(form, history));
  };

  if (radioValue === 'seller') {
    return (
      <div className="container mt-5 text-center container-auth">
        <LoginLogos />
        <span className="mt-5 fw-bold">Please Sign up with your account</span>
        <LoginSwitch switch={(e) => changeValueRadio(e)} />
        <AuthInput id='owner' placeholder="Owner" name="owner" event={handleForm} />
        <AuthInput id='email' placeholder="Email" name="email" event={handleForm} />
        <AuthInput id='phone' placeholder="Phone Number" name="phoneNumber" event={handleForm} />
        <AuthInput placeholder="Store Name" name="storeName" event={handleForm} />
        <AuthInput id='password' placeholder="Password" type="password" name="pass" event={handleForm} />
        <ButtonAuth text="REGISTER" event={handleSignUp} />
        <span className="d-block mt-4 link-regist">
          Already have a Tuku.com account ? <Link to={'./login'}>Login</Link>
        </span>
      </div>
    );
  } else {
    return (
      <div className="container mt-5 text-center container-auth">
        <LoginLogos />
        <span className="mt-5 fw-bold">Please Sign up with your account</span>
        <LoginSwitch switch={(e) => changeValueRadio(e)} />
        <AuthInput id='name' placeholder="Name" name="name" event={handleForm} />
        <AuthInput id='email' placeholder="Email" name="email" event={handleForm} />
        <AuthInput id='password' placeholder="Password" type="password" name="pass" event={handleForm} />
        <ButtonAuth text="REGISTER" event={handleSignUp} />
        <span className="d-block mt-4 link-regist">
          Already have a Tuku.com account ? <Link to={'./login'}>Login</Link>
        </span>
      </div>
    );
  }
};
