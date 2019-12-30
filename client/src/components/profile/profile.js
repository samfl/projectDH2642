import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import "./profile.css";

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
    
    render() {
        return (
            <div>
                <h1>Profile</h1>
            </div>
        );
    }
}

export default Profile;