import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import "./profile.css";
import { connect } from 'react-redux'; 
import { getUser, deleteUser } from '../../actions/userActions';
import PropTypes from 'prop-types'; 

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    componentDidMount() { 
        this.props.getUser();
    }

    componentWillUnmount() { }

    handleDelete = (username) => {
        this.props.deleteUser(username);
    }   

    render() {
        const { users } = this.props.user; 
        const user = users.find(user => user.username == 'samflorin');
        return (
            <div>
                <h3>Profile</h3>
                <h4>Settings</h4>
                <div>
                    <button onClick={this.handleDelete.bind(this, user.username)}>Delete account</button>
                </div>
            </div>
        );
    }
}

Profile.propTypes = {
    getUser: PropTypes.func.isRequired, 
    user: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    user: state.user
});

export default connect(mapStateToProps, { getUser, deleteUser }) (Profile);