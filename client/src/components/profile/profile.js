import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import "./profile.css";
import NavBar from '../navBar/navBar';
import Sidebar from "../sidebar/sidebar";
import {connect} from "react-redux";
import { removeTeam, changePassword } from '../../actions/authActions'
import noTeam from "../../images/noTeam.png";
import Image from "../image";

class Profile extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        newPassword: '',
        repeatPassword: '',
        loading: false,
        status: ''
    };

    componentDidMount() { }
    componentWillUnmount() { }

    removeClickedTeam = e => {
        const team = JSON.parse(e.target.value);
        this.props.dispatch(removeTeam(team, this.props.auth.user._id));
    };

    pwOnChange = e => {
        this.setState({ newPassword: e.target.value });
    };

    newPwOnChange = e => {
        this.setState({ repeatPassword: e.target.value });
    };

    changePassword = e => {
        e.preventDefault();
        e.target.reset();
        const {newPassword, repeatPassword } = this.state;
        if(newPassword == repeatPassword) {
            const password = {
                "password": newPassword
            };
            this.props.dispatch(changePassword(password, this.props.auth.user._id));
            this.setState({
                status: 1
            });
        } else {
            this.setState({
                status: 0
            });
        }
    };

    render() {
        let { user } = <p>Unable to find user</p>;
        const { status } = this.state;
        let teamList = <p>No favorite teams yet</p>;
        switch(this.props.auth.user == null) {
          case false:
          user = this.props.auth.user.username;
            if(this.props.auth.user.favTeams) {
              teamList = (
                  this.props.auth.user.favTeams.map(team => (
                      <div key={team.id} className={"sidebar-team"} onClick={this.changeFocusedTeam}>
                          <Image className={"result-img"} src={team.crestUrl} fallback={noTeam}/>
                          {team.name}
                          <button value={JSON.stringify(team)} onClick={this.removeClickedTeam}>Remove</button>
                      </div>
                  )
              ));
          }
        }
        let changePwMsg = null;

        if(status === 1) {
            changePwMsg = <p className="greenAlert">Password was changed!</p>
        }

        if(status === 0) {
            changePwMsg = <p className="redAlert">Passwords does not match</p>
        }

        return (
            <div>
                <NavBar/>
                <div id="profileWrapper">
                    <div className="centerText">
                        <div className="formatText">
                            <h2>{"Username: "}</h2>
                            <h2> {user} </h2>
                        </div>
                            <h2>Favorite teams:</h2>
                            {teamList}
                        <h2>Change password:</h2>
                        <form onSubmit={this.changePassword}>
                            <div className="formatText">
                                <label>Password</label>
                                <input name="password" id="password" type="password" placeholder="New Password" onChange={this.pwOnChange} required></input>
                            </div>
                            <div className="formatText">
                                <label>Password</label>
                                <input name="password2" id="password2" type="password" placeholder="Repeat Password" onChange={this.newPwOnChange} required></input>
                            </div>
                            <button type="submit" id="changePwBtn">Confirm</button>
                        </form>
                        {changePwMsg}
                    </div>
                </div>
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
