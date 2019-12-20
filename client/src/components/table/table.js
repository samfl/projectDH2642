import React, { Component } from "react";
import Standings from "../standings/standings";
import TopScorers from "../topScorers/topScorers";
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
                    <Sidebar model={this.props.model}/>
                    <Standings model={this.props.model}/>
                    <TopScorers model={this.props.model}/>
                </div>
            </div>)
    }
}
export default Table;