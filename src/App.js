import { Route, Switch } from "react-router-dom";
import React from "react";

import CoursesPage from "./components/courses/CoursesPage";
import AboutPage from "./components/about/AboutPage";
import HomePage from "./components/home/HomePage";
import Header from "./components/shared/Header";
import PageNotFound from "./PageNotFound";

import "./App.css";

function App() {
  return (
    <div className="app container-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/courses" component={CoursesPage} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
