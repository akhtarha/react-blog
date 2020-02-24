import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
import Footer from "./components/Footer";
import CreateArticle from "./components/CreateArticle";
import SingleArticle from "./components/SingleArticle";
import Login from "./components/Login";
import Signup from "./components/Signup";

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Navbar />
      <Route exact path="/" component={Welcome} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/article/:slug" component={SingleArticle} />
      <Route path="/articles/create" component={CreateArticle} />
      <Footer />
    </div>
  </BrowserRouter>,
  document.getElementById("root")
);

serviceWorker.unregister();
