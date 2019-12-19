import React, { Component } from "react";
import "./standings.css";

class Standings extends Component{
    constructor(props){
        super(props);
        this.state = {
            status: "LOADING"
        }
    }

    componentDidMount() {
        this.props.model.getSeasonStats('standings').then(standings=> {
            this.setState({
                status: "LOADED",
                standings: standings
            })
            }).catch(() => {
                this.setState({
                    status: "ERROR"
                });
            })
    }

    render() {
        let standings = null;

        switch(this.state.status){
            case "LOADING":
                standings = (
                    <div className={"loader-wrapper"}>
                        <div className={"loader"}></div>
                    </div>
                )
                break;
            case "LOADED":
                standings = <table><tbody>
                    <tr>
                        <th>#</th>
                        <th>Club</th>
                        <th>MP</th>
                        <th>W</th>
                        <th>D</th>
                        <th>L</th>
                        <th>GF</th>
                        <th>GA</th>
                        <th>GD</th>
                        <th>PTS</th>
                    </tr>
                    {this.state.standings.standings[0].table.map(table => (
                        <tr>
                            <td>{table.position}</td>
                            <td>{table.team.name}</td>
                            <td>{table.playedGames}</td>
                            <td>{table.won}</td>
                            <td>{table.draw}</td>
                            <td>{table.lost}</td>
                            <td>{table.goalsFor}</td>
                            <td>{table.goalsAgainst}</td>
                            <td>{table.goalDifference}</td>
                            <td>{table.points}</td>
                        </tr>
                ))}</tbody></table>
                break;
            default:
                standings = <b>Failed to load data, please try again</b>;
            break;
        }
        return (
            <div>
                {standings}
            </div>
        );
    }
}
export default Standings;