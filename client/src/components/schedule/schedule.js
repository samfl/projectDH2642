import React, { Component } from "react";
import Matches from "../matches/matches";
import Sidebar from "../sidebar/sidebar";
import NavBar from "../navBar/navBar";
import "./schedule.css";

class Schedule extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className={"Schedule"}>
                <NavBar/>
                <Sidebar model={this.props.model}/>
                <Matches model={this.props.model}/>
            </div>)
    }
}
export default Schedule;