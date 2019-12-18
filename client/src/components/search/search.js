import React, { Component } from "react";
import "./search.css";

class Search extends Component{
    constructor(props){
        super(props);
        this.state = {
            status: "LOADING"
        };
    }

    componentDidMount() {
        this.props.model.addObserver(this);
        this.updateSearch();
    }
    componentWillUnmount() {
        this.props.model.removeObserver(this);
    }

    render() {
        let teamList = null;

        switch (this.state.status) {
            case "LOADING":
                teamList = <em>Loading...</em>
                break;
            case "LOADED":
                teamList = this.state.teams.map(team =>(
                    <div>
                        <img className={"search-img"} src={team.crestUrl}/>
                        {team.name}
                        <button value={JSON.stringify(team)} onClick={this.addClickedTeam}>Add to favorite</button>
                    </div>
                ));
                break;
            default:
                teamList = <b>Failed to load data, please try again</b>;
                break;
        }
        return  <div className={"Search"}>
                    <div id={"search-header"}>
                        <input type={"text"} placeholder={"Enter a key word"} id={"search-query"}/>
                        <select id={"search-select"} onChange={this.leagueSelected}>
                            <option value="">All</option>
                            <option value="/competitions/PD">La Liga</option>
                            <option value="/competitions/PL">Premier League</option>
                            <option value="/competitions/SA">Serie A</option>
                            <option value="/competitions/BL1">Bundesliga</option>
                        </select>
                        <button value={this.state.query}
                                onClick={this.onSearchChange}>search</button>
                    </div>
                    <div id={"search-body"}>
                        {teamList}
                    </div>
                </div>;
    }
    onSearchChange = e => {
        this.props.model.setQuery(e.target.parentElement.firstElementChild.value);
    };
    leagueSelected = e => {
        this.props.model.setSelectedLeague(e.target.value)
    };
    update() {
        this.updateSearch();
    }
    addClickedTeam = e => {
        this.props.model.addTeam(JSON.parse(e.target.value));
    };

    updateSearch(){
        this.props.model.searchTeams(this.props.model.getSelectedLeague(), this.props.model.getQuery()).then(teams => {
            this.setState({
                status: "LOADED",
                teams: teams
            })
        }).catch(() => {
            this.setState({
                status: "ERROR"
            });
        });
    }
}

export default Search;