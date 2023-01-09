import NavBar from "./components/navBar";
import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Main from "./components/layouts/main";
import Login from "./components/layouts/login";
import Users from "./components/users";
import UserPage from "./components/userPage";
import NotFound from "./components/not-found";

function App() {
    return (
        <div>
            <NavBar />

            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/login" component={Login} />
                <Route path="/users/" exact component={Users} />
                <Route path="/users/:userId?" component={UserPage} />
                <Route path="/404" component={NotFound} />
                <Redirect to="/404" />
            </Switch>
        </div>
    );
}

export default App;
