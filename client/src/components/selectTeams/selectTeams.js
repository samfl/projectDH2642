import React, { Component } from "react";
import Search from "../search/search";
import NavBar from "../navBar/navBar";
import "./selectTeams.css";
import Sidebar from "../sidebar/sidebar";

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
                <div>
                    <Sidebar model={this.props.model}/>
                    <Search model={this.props.model}/>
                </div>
            </div>)
    }
}

export default SelectTeams;