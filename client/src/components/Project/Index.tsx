import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavBar from "../NavBar";
import MainPage from "../Main";
import SkillsPage from "../Skills";
import BlogPage from "../Blog";
import BlogPost from "../BlogPost";

export default function Project() {
  return (
    <Router>
      <NavBar></NavBar>
      <Route render={({ location }) => (
        <Switch>
          <Route exact path='/'>
            <MainPage></MainPage>
            <SkillsPage></SkillsPage>
            <BlogPage></BlogPage>
          </Route>
          <Route path='/blog'>
              <BlogPost />
          </Route>
        </Switch>
      )}/>
    </Router>
  );
}
