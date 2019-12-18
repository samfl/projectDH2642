import React, { Component } from "react";
import Search from "../search/search";
import NavBar from "../navBar/navBar";
import "./selectTeams.css";

class SelectTeams extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }
    render() {
        return (
            <div className={"selectTeams"}>
                <NavBar/>
                <Search model={this.props.model}/>
            </div>)
    }
}

export default SelectTeams;