import React from 'react';
import {Navbar} from '../components/modules/Navbar/Navbar';
import {NavbarLogin} from '../components/modules/NavbarLogin/NavbarLogin';
import {Route} from 'react-router-dom';
import { useSelector } from 'react-redux';

const GlobalRoute = ({component: Component, ...rest}) => {
  const { profile } = useSelector((state) => state.user);
  let isAuth = false;
  if(Object.keys(profile).length > 0){
    isAuth = true;
  }

  return (
    <Route
      {...rest}
      render={(props) => {
        if(isAuth){
          return (
            <>
            <NavbarLogin/>
            <Component {...props}/>
            </>
          )
        }else{
          return (
            <>
            <Navbar/>
            <Component {...props}/>
            </>
          )
        }
      }}
    />
  );
};

export default GlobalRoute;
