import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import "./logIn.css";
import { connect } from 'react-redux'; 
import { getUser, deleteUser } from '../../actions/userActions';
import PropTypes from 'prop-types'; 

class LogIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    componentDidMount() { 
        this.props.getUser();
    }

    componentWillUnmount() { }
    
    handleLogIn = (event) => {
        event.preventDefault(); 
        alert("Username: " + event.target.uname.value + " Password: " + event.target.passw.value);
    }

    render() {
        const { users } = this.props.user; 
        
        return (
            <div>
                <h3>Login</h3>
                <div>
                    <form onSubmit={this.handleLogIn}>
                        <label>User name</label>
                        <input name="uname" type="text" placeholder="Enter Username" required></input>
                        <label>Password</label>
                        <input name="passw" type="password" placeholder="Enter Password" required></input>
                        <button type="submit">Login</button>
                    </form>
                </div>
            </div>
        );
    }
}

LogIn.propTypes = {
    getUser: PropTypes.func.isRequired, 
    user: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    user: state.user
});

export default connect(mapStateToProps, { getUser, deleteUser }) (LogIn);