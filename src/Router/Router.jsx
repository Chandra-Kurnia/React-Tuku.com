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
import GlobalRoute from "./GlobalRoute";
import { storeOrder } from "../pages/Store/StoreOrders/StoreOrders";
import { Checkout } from "../pages/Invoice/Checkout/Checkout";

export class router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route>
            {/* Auth */}
            <PublicRoute exact path="/login" component={Login} />
            <PublicRoute exact path="/signup" component={SignUp} />
            <PublicRoute exact path="/activateAccount" component={Activation} />
            <PublicRoute
              exact
              path="/activationSuccess"
              component={ActivationSucess}
            />
            <PublicRoute exact path="/forgotPassword" component={ForgotPassword} />
            <PublicRoute exact path="/ConfirmPassword" component={ConfirmPassword} />
            {/* Main customer*/}
            <GlobalRoute exact path="/" component={Home}/>
            <GlobalRoute
              exact
              path="/category/:category"
              component={ShowByCategory}
            />
            <GlobalRoute exact path="/search/" component={SearchProduct} />
            <GlobalRoute exact path="/product/:id" component={ShowProduct} />
            {/* Customer */}
            <PrivateRoute exact path="/MyBag" component={MyBag} />
            <PrivateRoute exact path="/profile" component={MyAccount} />
            <PrivateRoute exact path="/myAddress" component={ShippingAdress} />
            <PrivateRoute exact path="/order" component={MyOrder} />
            <PrivateRoute exact path="/checkout" component={Checkout}/>
            {/* Seller */}
            <PrivateRoute role='seller' exact path="/store" component={StoreProfile} />
            <PrivateRoute role='seller' exact path="/Product" component={MyProducts} />
            <PrivateRoute role='seller' exact path="/Product/Update/:id" component={UpdateProduct} />
            <PrivateRoute role='seller' exact path="/Sell" component={SellingProduct} />
            <PrivateRoute role='seller' exact path="/storeorder" component={storeOrder} />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default router;
