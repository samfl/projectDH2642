import React, { Component } from "react";
import { Route } from "react-router-dom";
import Home from "./components/home/home";
import LogIn from "./components/auth/logIn";
import SignUp from "./components/auth/signUp";
import Profile from "./components/profile/profile";
import Search from "./components/search/search";
import Table from "./components/table/table";
import Schedule from "./components/schedule/schedule";
import "./App.css";
import { Provider } from 'react-redux'; 
import store from'./store'; 
import { loadUser } from './actions/authActions';
import PrivateRoute from './components/privateRoute';

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
                    <PrivateRoute exact path="/profile" component={Profile} />
                    <PrivateRoute exact path="/search" component={Search}/>
                    <PrivateRoute exact path="/schedule" component={Schedule}/>
                    <PrivateRoute exact path="/table" component={Table}/>
                </div>
            </Provider>
        );
    }
}

export default App;