import React, { Component } from "react";
import { Route } from "react-router-dom";
import Home from "./Home/Home";
import "./App.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "BOOLU",
        };
    }

    render() {
        return (
            <div className="App">
                <Route exact path="/" component={Home} />
            </div>
        );
    }
}

export default App;
