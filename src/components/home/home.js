import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./home.css";

class Home extends Component {
    render() {
        return (
            <div className="Home">
                <h3>Home</h3>
                <Link to="/login">Login</Link>
            </div>
        );
    }
}

export default Home;