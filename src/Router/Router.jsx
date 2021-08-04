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
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import { ShippingAdress } from "../pages/Profile/ShippingAddress/ShippingAddress";
import { MyOrder } from "../pages/Profile/MyOrders/MyOrder";

export class router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route>
            {/* Auth */}
            <PublicRoute exact path="/login" component={Login} />
            <PublicRoute exact path="/signup" component={SignUp} />
            <Route exact path="/activateAccount" component={Activation} />
            <Route
              exact
              path="/activationSuccess"
              component={ActivationSucess}
            />
            <Route exact path="/forgotPassword" component={ForgotPassword} />
            <Route exact path="/ConfirmPassword" component={ConfirmPassword} />
            {/* Main customer*/}
            <PrivateRoute exact path="/" component={Home} />
            <PrivateRoute
              exact
              path="/category/:category"
              component={ShowByCategory}
            />
            <PrivateRoute exact path="/search/" component={SearchProduct} />
            <PrivateRoute exact path="/product/:id" component={ShowProduct} />
            {/* Customer */}
            <PrivateRoute exact path="/MyBag" component={MyBag} />
            <Route exact path="/profile" component={MyAccount} />
            <Route exact path="/myAddress" component={ShippingAdress} />
            <Route exact path="/order" component={MyOrder} />
            {/* Seller */}
            <Route exact path="/store" component={StoreProfile} />
            <Route exact path="/Product" component={MyProducts} />
            <Route exact path="/Product/Update/:id" component={UpdateProduct} />
            <Route exact path="/Sell" component={SellingProduct} />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default router;
