import React, { Component } from "react";
import Standings from "./standings";
import TopScorers from "./topScorers";
import Sidebar from "../sidebar/sidebar";
import NavBar from "../navBar/navBar";
import "./table.css";

class Table extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className={"Table"}>
                <NavBar/>
                <div className={"table-body"}>
                    <Sidebar/>
                    <Standings/>
                    <TopScorers/>
                </div>
            </div>)
    }
}
export default Table;