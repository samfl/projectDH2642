import React, { Component } from "react";
import Standings from "./standings";
import TopScorers from "./topScorers";
import Sidebar from "../sidebar/sidebar";
import NavBar from "../navBar/navBar";
import {connect} from "react-redux";
import NoTeamMsg from "../schedule/noTeamMsg"
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
                    {(this.props.user) ? 
                        [
                            (this.props.user.favTeams.length > 0) ?
                            <div className={"table-wrapper"}>
                                <Standings/>
                                <TopScorers/>
                            </div> :
                            <NoTeamMsg page={"Table"}/>
                        ] : 
                        <div className={"loader-wrapper"}>
                            <div className={"loader"}/>
                        </div>
                    }
                </div>
            </div>)
    }
}const mapStateToProps = (state) =>({
    user: state.auth.user
});
export default connect(
    mapStateToProps,
    null
)(Table);