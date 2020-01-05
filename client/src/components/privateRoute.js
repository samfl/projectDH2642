import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({component: Component, ...rest}, {isAuthorized} = this.props.auth,) => {
    
    return (
        <Route {...rest} render={props => (isAuthorized ? <Component {...props} /> : <Redirect to="/" /> )} />
    );
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, null)(PrivateRoute);