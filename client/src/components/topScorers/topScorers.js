import React, { Component } from "react";
import "./topScorers.css";
import {connect} from "react-redux";
import {getTopScorers} from "../../actions/apiActions";

class topScorers extends Component{
    constructor(props){
        super(props);
        this.state = {
        }
    }

    componentDidMount() {
        this.props.dispatch(getTopScorers(this.props.focusedTeam.league, this.props.focusedTeam.season));
    }

    componentWillUnmount() { }

    render() {
        let scorers = null;

        switch(this.props.scorers.isLoading){
            case true:
                scorers = (
                    <div className={"loader-wrapper"}>
                        <div className={"loader"}></div>
                    </div>
                );
                break;
            case false:
                scorers = <table><tbody>
                <tr>
                    <th>Name</th>
                    <th>Team</th>
                    <th>Goals</th>
                </tr>
                {this.props.scorers.results.map(scorer => (
                    <tr key={scorer.id}>
                        <td>{scorer.player.name}</td>
                        <td>{scorer.team.name}</td>
                        <td>{scorer.numberOfGoals}</td>
                    </tr>
                ))}</tbody></table>
                break;
            default:
                scorers = <b>Failed to load data, please try again</b>;
                break;
        }
        return (
            <div className={"TopScorers"}>
                <h2>Top Scorers</h2>
                {scorers}
            </div>
        );
    }
}
export default connect(store => {
    return {
        scorers: store.api.scorers,
        focusedTeam: store.api.focusedTeam
    };
})(topScorers);