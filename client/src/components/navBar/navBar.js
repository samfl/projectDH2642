import React, { Component } from "react";
import "./navBar.css";
import {Link} from "react-router-dom";

class NavBar extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render() {
        return (
            <div className={"navBar"}>
                <Link to={"/table"}>
                    <span>
                        <h2>Table</h2>
                    </span>
                </Link>
                <Link to={"/schedule"}>
                    <span>
                        <h2>Schedule</h2>
                    </span>
                </Link>
                <Link to={"/profile"}>
                    <span>
                        <h2>Profile</h2>
                    </span>
                </Link>
                <Link to={"/search"}>
                    <span>
                        <h2>Search</h2>
                    </span>
                </Link>
            </div>)
    }
}

export default NavBar;