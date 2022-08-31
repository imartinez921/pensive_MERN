import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch } from "react-router-dom";
import NavBarContainer from "./nav/navbar_container";
import '../assets/css/00-reset.css'

import MainPage from "./main/main_page";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import MainDashboard from "./main-dashboard/main_dashboard";
import BookComposeContainer from "./books/book_compose_container";
import CharacterComposeContainer from "./characters/character_compose_container";
import Char from "./characters/char";

const App = () => (
  <div>
     <NavBarContainer />
    <Switch>
      <AuthRoute exact path="/" component={MainPage} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <ProtectedRoute exact path="/profile" component={MainDashboard} />
      <ProtectedRoute
        exact
        path="/new_book"
        component={BookComposeContainer}
      />
      <ProtectedRoute
        exact
        path="/profile/:bookId"
        component={Char}
      />
    </Switch>
  </div>
);

export default App;