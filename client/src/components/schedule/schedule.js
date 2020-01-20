import React, { Component } from "react";
import Matches from "./matches";
import Sidebar from "../sidebar/sidebar";
import NavBar from "../navBar/navBar";
import "./schedule.css";

class Schedule extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className={"schedule"}>
                <NavBar/>
                <div className="schedule-wrapper">
                  <Sidebar/>
                  <Matches/>
                </div>
            </div>)
    }
}
export default Schedule;
