import React, { Component } from "react";
import "./topScorers.css";

class topScorers extends Component{
    constructor(props){
        super(props);
        this.state = {
            status: "LOADING"
        }
    }

    componentDidMount() {
        this.props.model.getSeasonStats('scorers').then(players=> {
            this.setState({
                status: "LOADED",
                players: players
            })
        }).catch(() => {
            this.setState({
                status: "ERROR"
            });
        })
    }

    render() {
        let scorers = null;

        switch(this.state.status){
            case "LOADING":
                scorers = (
                    <div className={"loader-wrapper"}>
                        <div className={"loader"}></div>
                    </div>
                )
                break;
            case "LOADED":
                scorers = <table><tbody>
                <tr>
                    <th>Name</th>
                    <th>Team</th>
                    <th>Goals</th>
                </tr>
                {this.state.players.scorers.map(scorer => (
                    <tr>
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
            <div>
                <h2>Top Scorers</h2>
                {scorers}
            </div>
        );
    }
}
export default topScorers;