import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import "./profile.css";
import NavBar from '../navBar/navBar';
import Sidebar from "../sidebar/sidebar";
import {connect} from "react-redux";
import { removeTeam, changePassword } from '../../actions/authActions'
import noTeam from "../../images/noTeam.png";
import { imageExists } from "../../images/image";

class Profile extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        newPassword: '',
        loading: false
    };

    componentDidMount() { }
    componentWillUnmount() { }

    handleDelete = (username) => {
        this.props.deleteUser(username);
    }   

    removeClickedTeam = e => {
        const team = JSON.parse(e.target.value);
        this.props.dispatch(removeTeam(team, this.props.auth.user._id));
    };

    onChange = e => {
        this.setState({ newPassword: e.target.value });
        console.log(e.target.value);
    };

    changePassword = e => {
        e.preventDefault();
        e.target.reset();
        const {newPassword} = this.state; 
        const password = {
            "password": newPassword
        };
        this.props.dispatch(changePassword(password, this.props.auth.user._id));
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
                <h2>Change password:</h2>
                <form onSubmit={this.changePassword}>
                    <label>Password</label>
                    <input name="password" id="password" type="password" placeholder="Enter Password" onChange={this.onChange} required></input>
                    <button type="submit">confirm</button>
                </form>
                <h2>Favorite teams:</h2>
                {this.props.auth.user.favTeams[0] ? teamList : <p>No favorite teams yet</p>}
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