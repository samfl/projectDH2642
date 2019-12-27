import React, { Component } from "react";
import { Route } from "react-router-dom";
import Home from "./components/home/home";
import LogIn from "./components/logIn/logIn";
import SignUp from "./components/signUp/signUp";
import Profile from "./components/profile/profile";
import Search from "./components/search/search";
import Table from "./components/table/table";
import Schedule from "./components/schedule/schedule";
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
                    <Route exact path="/login" component={LogIn} />
                    <Route exact path="/signup" component={SignUp} />
                    <Route exact path="/profile" component={Profile} />
                    <Route exact path="/search" component={Search}/>
                    <Route exact path="/schedule" component={Schedule}/>
                    <Route exact path="/table" component={Table}/>
                </div>
            </Provider>
        );
    }
}

export default App;