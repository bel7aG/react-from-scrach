import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Header, Videos, Songs } from "../components";

const navItems = [
  { name: "Videos", url: "/videos" },
  { name: "Songs", url: "/songs" }
];

const AppRouter = () => {
  return (
    <Router>
      <>
        <Header navItems={navItems} />
        <Switch>
          <Route exact path="/videos" component={Videos} />
          <Route path="/songs" component={Songs} />
        </Switch>
      </>
    </Router>
  );
};

export default AppRouter;
