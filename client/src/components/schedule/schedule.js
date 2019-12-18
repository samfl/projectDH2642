import React, { Component } from "react";
import "./schedule.css";

class Schedule extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: "LOADING"
        }
    }

    componentDidMount() {
        this.props.model.addObserver(this);
        this.props.model.getSchedule().then(matches => {
            this.setState({
                status: "LOADED",
                matches: matches
            })
        }).catch(() => {
            this.setState({
                status: "ERROR"
            });
        });
    }

    componentWillUnmount() {
        this.props.model.removeObserver(this);
    }
    render() {
        let matches = null;

        switch (this.state.status) {
            case "LOADING":
                matches = <em>Loading...</em>
                break;
            case "LOADED":
                matches = this.state.matches.map(match=> (
                    <tr className={"schedule-match"}>
                        <td>
                            {match.matchday}
                        </td>
                        <td>
                            {match.homeTeam.name}
                        </td>
                        <td>
                            {match.score.fullTime.homeTeam} - {match.score.fullTime.awayTeam}

                        </td>
                        <td>
                            {match.awayTeam.name}
                        </td>
                        <td>
                            {match.utcDate}
                        </td>
                    </tr>
                ));
                break;
            default:
                matches = <b>Failed to load data, please try again</b>;
                break;
        }
        return(
            <div className={"schedule"}>
                <table>
                    {matches}
                </table>
            </div>)
    }

    update(){
    }
}

export default Schedule;