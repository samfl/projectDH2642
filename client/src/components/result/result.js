import React, { Component } from "react";
import "./result.css";
import { connect } from 'react-redux';
//import { addToFavorites } from '?' //TODO

class Result extends Component{
    constructor(props){
        super(props);
    }

    componentDidMount() { }

    componentWillUnmount() { }

    render() {
        let teamList = null;
        switch (this.props.isLoading) {
            case true:
                teamList = (
                    <div className={"loader-wrapper"}>
                    <div className={"loader"}></div>
                </div>)
                break;
            case false:
                teamList = this.props.teams.map(team =>(
                    <div key={team.id}>
                        <img className={"result-img"} src={team.crestUrl}/>
                        {team.name}
                        <button value={JSON.stringify(team)} onClick={this.addClickedTeam}>Add to favorite</button>
                    </div>
                ));
                break;
            default:
                teamList = <b>Failed to load data, please try again</b>;
                break;
        }
        return  <div className={"Result"}>
                        {teamList}
                </div>;
    }

    addClickedTeam = e => {
        //TODO
    };
}

export default connect(store => {
    return {
        isLoading: store.api.search.isLoading
    };
})(Result)