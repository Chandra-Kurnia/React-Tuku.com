import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Login } from "../pages/Auth/login/Login";
import { SignUp } from "../pages/Auth/signUp/SignUp";
import { ForgotPassword } from "../pages/Auth/ForgotPassword/ForgotPassword";
import { ConfirmPassword } from "../pages/Auth/ConfirmPassword/ConfirmPassword";
import { Home } from "../pages/Home/Home";
import { MyBag } from "../pages/Invoice/MyBag/MyBag";
import { ShowByCategory } from "../pages/Products/ShowByCategory/ShowByCategory";
import { ShowProduct } from "../pages/Products/ShowProduct/ShowProduct";
import { MyAccount } from "../pages/Profile/MyAccount/MyAccount";
import { StoreProfile } from "../pages/Store/StoreProfile/StoreProfile";
import { MyProducts } from "../pages/Store/StoreProducts/MyProducts/MyProducts";
import { SellingProduct } from "../pages/Store/StoreProducts/SellingProduct/SellingProduct";
import { UpdateProduct } from "../pages/Store/StoreProducts/UpdateProduct/UpdateProduct";
import { SearchProduct } from "../pages/Products/SearchProduct/SearchProduct";
import { Activation } from "../pages/Auth/Activation/Activation";
import { ActivationSucess } from "../pages/Auth/ActivationSuccess/ActivationSuccess";

export class router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route>
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/activateAccount" component={Activation}/>
            <Route exact path="/activationSuccess" component={ActivationSucess}/>
            <Route exact path="/forgotPassword" component={ForgotPassword} />
            <Route exact path="/ConfirmPassword" component={ConfirmPassword} />
            <Route exact path="/" component={Home} />
            <Route
              exact
              path="/category/:category"
              component={ShowByCategory}
            />
            <Route exact path="/search/" component={SearchProduct} />
            <Route exact path="/MyBag" component={MyBag} />
            <Route exact path="/product/:id" component={ShowProduct} />
            <Route exact path="/profile" component={MyAccount} />
            <Route exact path="/store" component={StoreProfile} />
            <Route exact path="/Product" component={MyProducts} />
            <Route exact path="/Product/Update/:id" component={UpdateProduct} />
            <Route exact path="/Sell" component={SellingProduct} />
            {/* <Route component={NotFound}/> */}
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default router;
