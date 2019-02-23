import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Videos, Header } from "../components";

const navItems = [{ name: "Videos", url: "/videos" }];

const AppRouter = () => {
  return (
    <Router>
      <>
        <Header navItems={navItems} />
        <Switch>
          <Route path="/videos" component={Videos} />
        </Switch>
      </>
    </Router>
  );
};

export default AppRouter;
