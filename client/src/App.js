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
<<<<<<< HEAD
                    <Route exact path="/search" render={() => <SelectTeams model={modelInstance} />}/>
                    <Route exact path="/schedule" render={() => <Schedule model={modelInstance} />}/>
                    <Route exact path="/table" render={() => <Table model={modelInstance} />}/>
=======
                    <Route exact path="/search" component={Search}/>
                    <Route exact path="/schedule" component={Schedule}/>
                    <Route exact path="/table" component={Table}/>
>>>>>>> e08c985e38c9ebe499866ab0ce5183e77a71faff
                </div>
            </Provider>
        );
    }
}

export default App;