import React, { Component } from "react";
import Matches from "./matches";
import Sidebar from "../sidebar/sidebar";
import NavBar from "../navBar/navBar";
import {connect} from "react-redux";
import "./schedule.css";
import NoTeamMsg from "./noTeamMsg";

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
                    {(this.props.user) ? 
                        [
                            (this.props.user.favTeams.length > 0) ?
                            <Matches/> :
                            <NoTeamMsg page={"Schedule"}/>
                        ] : 
                        <div className={"loader-wrapper"}>
                            <div className={"loader"}/>
                        </div>
                    }
                </div>
            </div>)
    }
}
const mapStateToProps = (state) =>({
    user: state.auth.user
});
export default connect(
    mapStateToProps,
    null
)(Schedule);
