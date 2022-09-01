import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch } from "react-router-dom";
import NavBarContainer from "./nav/navbar_container";
import '../assets/css/00-reset.css'

import ModalContainer from "../components/modal/modal";
import MainPage from "./main/main_page";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import MainDashboard from "./main-dashboard/main_dashboard";
import BookComposeContainer from "./books/book_compose_container";
import BookEditContainer from "./books/edit_book_container";
import WritingPageContainer from "./writing-page/writing-page-container";

const App = () => (
  <div>
     <NavBarContainer />
     <ModalContainer />
    <Switch>
      <AuthRoute exact path="/" component={MainPage} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <ProtectedRoute exact path="/profile" component={MainDashboard} />
      <ProtectedRoute exact path="/writing_page/:id" component={WritingPageContainer} />
      <ProtectedRoute
        exact
        path="/new_book"
        component={BookComposeContainer}
      />
      <ProtectedRoute
        exact
        path="/edit_book/:id"
        component={BookEditContainer}
      />
    </Switch>
  </div>
);

export default App;