import React, { Component } from "react";
import { Route } from "react-router-dom";
import Home from "./components/home/home";
import Login from "./components/logIn/logIn";
import Registration from "./components/signUp/signUp";
import SelectTeams from "./components/selectTeams/selectTeams";
import Table from "./components/table/table";
import Schedule from "./components/schedule/schedule";
import modelInstance from "./data/model";
import "./App.css";
import { Provider } from 'react-redux'; 
import store from'./store'; 

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "BỌỌLU",
        };
    }

    render() {
        return (
            <Provider store={store}>
            <div className="App">
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/registration" component={Registration} />
                <Route exact path="/search" render={() => <SelectTeams model={modelInstance} />}/>
                <Route exact path="/schedule" render={() => <Schedule model={modelInstance} />}/>
                <Route exact path="/table" render={() => <Table model={modelInstance} />}/>
            </div>
            </Provider>
        );
    }
}

export default App;