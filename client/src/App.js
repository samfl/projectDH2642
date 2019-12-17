import React, { Component } from "react";
import { Route } from "react-router-dom";
import Home from "./components/home/home";
import Search from "./components/search/search";
import Login from "./components/logIn/logIn";
import Registration from "./components/signUp/signUp";
import modelInstance from "./data/model";
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
                <Route exact path="/search" render={() => <Search model={modelInstance} />}/>
            </div>
        );
    }
}

export default App;