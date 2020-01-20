import React, { Component } from "react";
import "./matches.css";
import {connect} from "react-redux";
import {getSchedule} from "../../actions/apiActions";

class Matches extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {
    }

    componentWillUnmount() { }
    render() {
        let matches = null;

        switch (this.props.schedule.isLoading) {
            case true:
                matches =
                    (<div className={"loader-wrapper"}>
                        <div className={"loader"}></div>
                    </div>)
                break;
            case false:
                matches = <table><tbody>
                <tr>
                    <th>Round</th>
                    <th>Home Team</th>
                    <th>Result</th>
                    <th>Away Team</th>
                    <th>Date</th>
                </tr>
                {this.props.schedule.results.map(match=> (
                        <tr className={"matches-match"} key={match.id}>
                            <td>{match.matchday}</td>
                            <td className={(match.homeTeam.id == this.props.focusedTeam.id) ? 'match-focusedteam' : null}>{match.homeTeam.name}</td>
                            <td>{match.score.fullTime.homeTeam} - {match.score.fullTime.awayTeam}</td>
                            <td className={(match.awayTeam.id == this.props.focusedTeam.id) ? 'match-focusedteam' : null}>{match.awayTeam.name}</td>
                            <td>{(new Date(match.utcDate)).toUTCString()}</td>
                        </tr>
                ))}</tbody></table>
                break;
            default:
                matches = <b>Failed to load data, please try again</b>;
                break;
        }
        return(
              <div className={"matches"}>
                <select onChange={this.setScheduleSeason}>
                    <option value={'2019'}>
                        2019/20
                    </option>
                    <option value={'2018'}>
                        2018/19
                    </option>
                    <option value={'2017'}>
                        2017/18
                    </option>
                </select>
                {matches}
            </div>)
    }
    setScheduleSeason = e =>{
        this.props.dispatch(getSchedule('57', 'PL',e.target.value));
    };
}

export default connect(store => {
    return {
        schedule: store.api.schedule,
        focusedTeam: store.api.focusedTeam
    };
})(Matches)
