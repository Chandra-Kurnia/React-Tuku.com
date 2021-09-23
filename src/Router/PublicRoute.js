import React from 'react'
import { useSelector } from 'react-redux'

import { Route, Redirect } from 'react-router-dom'
const PublicRoute = ({ component: Component, ...rest }) => {
  const {profile} = useSelector(state => state.user)
  let isAuth = false;
  if(Object.keys(profile).length > 0){
    isAuth = true;
  }
  return (
    <Route {...rest} render={(props) => {
      return (
        isAuth ? <Redirect to="/" />:<Component {...props} />
      )
    }} />
  )
}

export default PublicRoute