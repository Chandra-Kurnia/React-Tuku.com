import React, {Component} from 'react';
import Router from './Router/Router';
import './App.css';
import './css/auth.css';
import './css/color-pack.css';
import './css/mobile.css';
import GetUserProfile from './components/getProfile';

export class App extends Component {
  render() {
    return (
      <>
        <GetUserProfile>
          <Router />
        </GetUserProfile>
      </>
    );
  }
}

export default App;
