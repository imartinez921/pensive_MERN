import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch } from "react-router-dom";
import '../assets/css/00-reset.css'

import ModalContainer from "../components/modal/modal";
import MainDashboard from "./main-dashboard/main_dashboard";
import BookComposeContainer from "./books/book_compose_container";
import DictionaryContainer from "./dictionary/dictionary_container";
import BookEditContainer from "./books/edit_book_container";
import WritingPageContainer from "./writing-page/writing-page-container";
import NavbarContainer from "./nav/navbar_container";
import ChaptersContainer from "./chapters/chapters_container";

const App = () => (
  <div>
     <ModalContainer />
    <Switch>
      <AuthRoute exact path="/" component={NavbarContainer} />
      <ProtectedRoute exact path="/profile" component={MainDashboard} />
      <ProtectedRoute exact path="/define" component={DictionaryContainer} />
      <ProtectedRoute exact path="/book/:id" component={ChaptersContainer} />
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