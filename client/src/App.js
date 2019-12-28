import React, { Component } from "react";
import { Route } from "react-router-dom";
import Home from "./components/home/home";
import LogIn from "./components/logIn/logIn";
import SignUp from "./components/signUp/signUp";
import Profile from "./components/profile/profile";
import SelectTeams from "./components/selectTeams/selectTeams";
import Table from "./components/table/table";
import Schedule from "./components/schedule/schedule";
import modelInstance from "./data/model";
import "./App.css";
import { Provider } from 'react-redux'; 
import store from'./store'; 
import { loadUser } from './actions/authActions';


class App extends Component {

    componentDidMount() {
        store.dispatch(loadUser()); 
    }

    render() {
        return (
            <Provider store={store}>
                <div className="App">
                    <Route exact path="/" component={Home} />
                    <Route exact path="/login" component={LogIn} />
                    <Route exact path="/signup" component={SignUp} />
                    <Route exact path="/profile" component={Profile} />
                    <Route exact path="/search" render={() => <SelectTeams model={modelInstance} />}/>
                    <Route exact path="/schedule" render={() => <Schedule model={modelInstance} />}/>
                    <Route exact path="/table" render={() => <Table model={modelInstance} />}/>
                </div>
            </Provider>
        );
    }
}

export default App;