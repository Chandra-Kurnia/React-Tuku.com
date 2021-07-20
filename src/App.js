import React, { Component } from 'react'
import Router from './Router/Router';
import './App.css';
import "./css/auth.css";
import './css/color-pack.css'
import './css/mobile.css'
import { Link } from 'react-router-dom';

export class App extends Component {
  render() {
    return (
      <Router/>
    )
  }
}


export default App;
