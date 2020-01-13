import React, { Component } from "react";
import "./sidebar.css";
import {connect} from "react-redux";
import {removeTeam, setFocusedTeam} from '../../actions/authActions'
import noTeam from "../../images/noTeam.png";
import Image from "../image";
import {getSchedule, getStandings, getTopScorers} from "../../actions/apiActions";

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            focusedTeam: null
        }
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
                if (this.props.auth.user.favTeams.length > 0) {
                    const focusedTeam = (this.props.auth.focusedTeam) ? this.props.auth.focusedTeam.id : this.props.auth.user.favTeams[0].id;
                    teamList = (
                        this.props.auth.user.favTeams.map(team => {
                            if(team.id == focusedTeam){
                                console.log(focusedTeam)
                                return (
                                    <div id={team.id} key={team.id} className={"sidebar-team active"}>
                                        <Image className={"result-img"} src={team.crestUrl} fallback={noTeam}/>
                                        {team.name}
                                        <button value={JSON.stringify(team)} onClick={this.removeClickedTeam}>Remove</button>
                                    </div>
                                )
                            }else{
                                return (
                                    <div id={JSON.stringify(team)} key={team.id} className={"sidebar-team"} onClick={this.changeFocusedTeam}>
                                        <Image className={"result-img"} src={team.crestUrl} fallback={noTeam}/>
                                        {team.name}
                                        <button value={JSON.stringify(team)} onClick={this.removeClickedTeam}>Remove</button>
                                    </div>
                                )
                            }
                        })
                    )
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
        this.props.dispatch(removeTeam(team, this.props.auth.user._id));
    };

    changeFocusedTeam = e =>{
        const team = JSON.parse(e.target.id);
        this.props.dispatch(setFocusedTeam(team.id, team.league))
        this.props.dispatch(getSchedule(team.id, team.league, '2019'));
        this.props.dispatch(getStandings(team.league, '2019'));
        this.props.dispatch(getTopScorers(team.league, '2019'));
    };
}
const mapStateToProps = (state) =>({
    auth: state.auth
});
export default connect(
    mapStateToProps,
    null
)(Sidebar);