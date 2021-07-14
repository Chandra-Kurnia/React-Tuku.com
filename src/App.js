import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import { Login } from './pages/Auth/login/Login';
import { SignUp } from './pages/Auth/signUp/SignUp';
import "./css/auth.css";
import './css/color-pack.css'
import { ForgotPassword } from './pages/Auth/ForgotPassword/ForgotPassword';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/signup" component={SignUp}/>
          <Route exact path="/forgotPassword" component={ForgotPassword}/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
