import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import "./profile.css";
import NavBar from '../navBar/navBar';
import Sidebar from "../sidebar/sidebar";
import {connect} from "react-redux";
import { removeTeam } from '../../actions/authActions'
import noTeam from "../../images/noTeam.png";
import { imageExists } from "../../images/image";

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    componentDidMount() { }
    componentWillUnmount() { }

    handleDelete = (username) => {
        this.props.deleteUser(username);
    }   

    removeClickedTeam = e =>{
        const team = JSON.parse(e.target.value);
        this.props.dispatch(removeTeam(team, this.props.auth.user._id));
    };
    
    render() {
        const { user } = this.props.auth;
        let username = <div className={"sidebar-team"} onClick={this.changeFocusedTeam}> {user.username} </div>
        let teamList = (
            this.props.auth.user.favTeams.map(team => (
                <div key={team.id} className={"sidebar-team"} onClick={this.changeFocusedTeam}>
                    <img className={"result-img"} src={imageExists(team.crestUrl) ? team.crestUrl : noTeam}/>
                    {team.name}
                    <button value={JSON.stringify(team)} onClick={this.removeClickedTeam}>Remove</button>
                </div>
            )
        ));
        let leagueList = <div className={"sidebar-team"} onClick={this.changeFocusedTeam}> Leagues TODO </div>
        let playerList = <div className={"sidebar-team"} onClick={this.changeFocusedTeam}> Player TODO </div>

        return (
            <div>
                <NavBar/>
                <h2>Username:</h2>
                {username}
                <h2>Favorite teams:</h2>
                {teamList}
                <h2>Favorite league:</h2>
                {leagueList}
                <h2>Favorite players:</h2>
                {playerList}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth
  });
  
  export default connect(
    mapStateToProps,
    null
  )(Profile);