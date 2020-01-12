import React, { Component } from "react";
import { connect } from 'react-redux';
import "./search.css"
import searchIcon from "../../images/searchIcon.png"
import {getTeams} from "../../actions/apiActions";
import { Redirect } from "react-router-dom";

class SearchBar extends Component{
    constructor(props) {
        super(props);
        this.state = {
            query: "",
            league: "",
            searchMade: false
        }
    }
    componentDidMount() {
        this.setState({
            query: "",
            league: "",
            searchMade: false
        });
    }
    componentWillUnmount() {}

    onSubmit = e => {
        this.setState({
            searchMade: true
        });
        this.props.getTeams(this.state.league, this.state.query);

    };
    onInvalid = e =>{
        if(e.target.value == ""){
            e.target.setCustomValidity("Please select a league!");
        }else{
            e.target.setCustomValidity("");
        }
    };
    onChange = e =>{
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    render(){
        if(this.state.searchMade){
            this.setState({
                searchMade: false
            });
            return (
                <Redirect push to="/search" />
            )
        }
        return (
            <form className={"searchBox"} onSubmit={this.onSubmit}>
                <input className={"searchInput"} type={"text"} placeholder={"Search for teams"} name={"query"} onChange={this.onChange}/>
                <select required className={"searchSelect"} name="league" onChange={this.onChange} onInvalid={this.onInvalid}>
                    <option value="" disable selected hidden>Select a league</option>
                    <option value="PL">Premier League</option>
                    <option value="ELC">Championship</option>
                    <option value="PD">La Liga</option>
                    <option value="SA">Serie A</option>
                    <option value="BL1">1. Bundesliga</option>
                    <option value="FL1">Ligue 1</option>
                    <option value="DED">Eredivisie</option>
                    <option value="PPL">Primeira Liga</option>
                </select>
                <button className={"searchButton"}>
                    <img src={searchIcon} className={"searchIcon"}/>
                </button>
            </form>
        )
    }
}
export default connect(
    null,
    {getTeams}
)(SearchBar);