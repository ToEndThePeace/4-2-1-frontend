import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import "./styles.css";

import AccountsList from "./components/AccountsList";
import Header from "./components/Header";
import AccountForm from "./components/AccountForm";
import AccountPage from "./components/AccountPage";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/accounts">
          <AccountsList />
        </Route>
        <Route path="/success">
          <h3>
            Operation successful. <Link to="/accounts">Click here</Link> to
            return to accounts list.
          </h3>
        </Route>
        <Route exact path="/accounts/failure">
          <h3>
            No account found with that ID. Try again or{" "}
            <Link to="/accounts">click here</Link> to return to accounts list.
          </h3>
        </Route>
        <Route path="/accounts/new">
          <AccountForm />
        </Route>
        <Route path="/accounts/:id">
          <AccountPage />
        </Route>
      </Switch>
    </div>
  );
}
