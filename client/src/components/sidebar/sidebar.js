import React, { Component } from "react";
import "./sidebar.css";
import {connect} from "react-redux";
import { removeTeam } from '../../actions/authActions'
import noTeam from "../../images/noTeam.png";
import Image from "../image";

class Sidebar extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    componentWillUnmount() { }
    render() {
        let teamList = null;
        switch(this.props.auth.user == null) {
            case true:
                if(!this.props.auth.isAuthorized && !this.props.isLoading){
                    teamList = (
                        <div>Sign in to access this feature</div>
                    )
                }else {
                    teamList = (
                        <div className={"loader-wrapper"}>
                            <div className={"loader"}></div>
                        </div>)
                }
                break;
            case false:
                if (this.props.auth.user.favTeams) {
                    teamList = (
                        this.props.auth.user.favTeams.map(team => (
                            <div key={team.id} className={"sidebar-team"} onClick={this.changeFocusedTeam}>
                                <Image className={"result-img"} src={team.crestUrl} fallback={noTeam}/>
                                {team.name}
                                <button value={JSON.stringify(team)} onClick={this.removeClickedTeam}>Remove</button>
                            </div>)
                        ));
                } else {
                    teamList = <b>No teams added yet</b>;
                }

                break;
            default:
                teamList = <b>Failed to load data, please try again</b>;
                break;
        }
        return (
            <div className={"Sidebar"}>
                <h2>Favorite Teams</h2>
                {teamList}
            </div>)
    }
    removeClickedTeam = e =>{
        const team = JSON.parse(e.target.value);
        console.log(team);
        this.props.dispatch(removeTeam(team, this.props.auth.user._id));
    };

    changeFocusedTeam = e =>{
        //TODO
    };
}

export default connect(store => {
    return {
        auth: store.auth,
    };
})(Sidebar);