import React, { Component } from "react";
import Result from "./result";
import NavBar from "../navBar/navBar";
import "./search.css";
import Sidebar from "../sidebar/sidebar";
import {connect} from "react-redux";
import {getTeams} from "../../actions/apiActions";

class Search extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() { }

    componentWillUnmount() { }

    render() {
        return (
            <div className={"Search"}>
                <NavBar/>
                <div className={"search-body"}>
                    <Sidebar model={this.props.model}/>
                    <div className={"search-body-result"}>
                        <Result/>
                    </div>
                </div>
            </div>)
    }
    onSearch = e =>{
        this.props.dispatch(getTeams(this.props.search.league, e.target.parentElement.firstElementChild.nextElementSibling.value))
    };
    onLeagueSelect = e => {
        this.props.dispatch(getTeams(e.target.value, this.props.search.query))
    };
}

export default connect(store => {
    return {
        search: store.api.search.results
    };
})(Search)
