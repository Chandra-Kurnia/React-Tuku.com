import React from 'react'
import {Route} from 'react-router-dom'
import { Navbar } from '../components/modules/Navbar/Navbar'
import { NavbarLogin } from '../components/modules/NavbarLogin/NavbarLogin'
import { Home } from '../pages/Home/Home'
import { useSelector } from 'react-redux'
import { NavbarStore } from '../components/modules/NavbarStore/NavbarStore'

const PrivateRoute = ({ component: Component, role, ...rest}) => {
  const { profile } = useSelector((state) => state.user);
  // const isAuth = localStorage.getItem('token')
  let isAuth = false;
  if(Object.keys(profile).length > 0){
    isAuth = true;
  }
  return (
    <Route {...rest} render={(props)=>{
      return(
      isAuth ?
      (
      <>
      {role === 'seller' ?  
      <NavbarStore/> : <NavbarLogin/>
    }
      <Component {...props}/> 
      </>
      ):
      (
        <>
        <Navbar/>
        <Home/>
        </>
      )
      )
    }}/>
  )
}

export default PrivateRoute