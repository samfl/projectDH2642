import React, { Component } from "react";
import { Route } from "react-router-dom";
import Home from "./components/home/home";
import Login from "./components/logIn/logIn";
import Registration from "./components/signUp/signUp";

import "./App.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "BỌỌLU",
        };
    }

    render() {
        return (
            <div className="App">
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/registration" component={Registration} />
            </div>
        );
    }
}

export default App;