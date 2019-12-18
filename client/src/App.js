import React, { Component } from "react";
import { Route } from "react-router-dom";
import Home from "./components/home/home";
import Login from "./components/logIn/logIn";
import Registration from "./components/signUp/signUp";
import Schedule from "./components/schedule/schedule";
import SelectTeams from "./components/selectTeams/selectTeams";
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
                <Route exact path="/search" render={() => <SelectTeams model={modelInstance} />}/>
                <Route exact path="/schedule" render={() => <Schedule model={modelInstance} />}/>
            </div>
        );
    }
}

export default App;