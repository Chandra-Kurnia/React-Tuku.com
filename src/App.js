import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import "./css/auth.css";
import './css/color-pack.css'
import './css/mobile.css'
import { Login } from './pages/Auth/login/Login';
import { SignUp } from './pages/Auth/signUp/SignUp';
import { ForgotPassword } from './pages/Auth/ForgotPassword/ForgotPassword';
import { ConfirmPassword } from './pages/Auth/ConfirmPassword/ConfirmPassword';
import { Home } from './pages/Home/Home';
import { MyBag } from './pages/Invoice/MyBag/MyBag';
import { ShowByCategory } from './pages/Products/ShowByCategory/ShowByCategory'
import { ShowProduct } from './pages/Products/ShowProduct/ShowProduct';
import { MyAccount } from './pages/Profile/MyAccount/MyAccount';
import { NotFound } from './pages/Auth/NotFound/NotFound';
import { StoreProfile } from './pages/Store/StoreProfile/StoreProfile';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/signup" component={SignUp}/>
          <Route exact path="/forgotPassword" component={ForgotPassword}/>
          <Route exact path="/ConfirmPassword" component={ConfirmPassword}/>
          <Route exact path="/" component={Home}/>
          <Route exact path="/category/:category" component={ShowByCategory}/>
          <Route exact path="/MyBag" component={MyBag}/>
          <Route exact path="/product/:id" component={ShowProduct}/>
          <Route exact path="/profile" component={MyAccount}/>
          <Route exact path="/store" component={StoreProfile}/>
          {/* <Route component={NotFound}/> */}
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
