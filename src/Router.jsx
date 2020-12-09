import React from "react";
import { Route, Switch } from "react-router";
import { useSelector } from "react-redux";
import { Home, SignIn, SignUp } from "./pages";

const Router = () => {
  const selector = useSelector((state) => state);
  console.log("selector", selector.router);
  return (
    <Switch>
      <Route exact path="(/)" component={Home} />
      <Route exact path="/signin" component={SignIn} />
      <Route exact path="/signup" component={SignUp} />
    </Switch>
  );
};

export default Router;
