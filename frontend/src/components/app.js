import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch } from "react-router-dom";
import NavBarContainer from "./nav/navbar_container";
import '../assets/css/00-reset.css'

import MainPage from "./main/main_page";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
// import BooksContainer from "./books/books_container";
// import ProfileContainer from "./profile/profile_container";
// import BookComposeContainer from "./books/book_compose_container";

import MainDashboard from "./main-dashboard/main_dashboard";

const App = () => (
  <div>
    <NavBarContainer />
    <Switch>
      <AuthRoute exact path="/" component={MainPage} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />

      <ProtectedRoute exact path="/books" component={MainDashboard} />
    </Switch>
  </div>
);

export default App;