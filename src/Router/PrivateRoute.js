import React from 'react'
import {Route} from 'react-router-dom'
import { Navbar } from '../components/modules/Navbar/Navbar'
import { NavbarLogin } from '../components/modules/NavbarLogin/NavbarLogin'
import { Home } from '../pages/Home/Home'
// import { useSelector } from 'react-redux'

const PrivateRoute = ({ component: Component, ...rest}) => {
  // const { profile } = useSelector((state) => state.user);
  const isAuth = localStorage.getItem('token')
  return (
    <Route {...rest} render={(props)=>{
      return(
      isAuth ?
      (
      <>
      <NavbarLogin/>
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