import React, { Component } from "react";
import "./matches.css";

class Matches extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: "LOADING",
        }
    }

    loadMatches(){
        this.props.model.getSchedule(this.props.model.getSelectedSeason()).then(matches => {
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

    componentDidMount() {
        this.props.model.addObserver(this);
        this.loadMatches();
    }

    componentWillUnmount() {
        this.props.model.removeObserver(this);
    }
    render() {
        let matches = null;

        switch (this.state.status) {
            case "LOADING":
                matches =
                    (<div className={"loader-wrapper"}>
                        <div className={"loader"}></div>
                    </div>)
                break;
            case "LOADED":
                matches = <table><tbody>{this.state.matches.map(match=> (
                        <tr className={"matches-match"} key={match.id}>
                            <td>{match.matchday}</td>
                            <td>{match.homeTeam.name}</td>
                            <td>{match.score.fullTime.homeTeam} - {match.score.fullTime.awayTeam}</td>
                            <td>{match.awayTeam.name}</td>
                            <td>{match.utcDate}</td>
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
        this.setState({
            status: "LOADING"
        });
        this.props.model.setSelectedSeason(e.target.value);
    };

    update(){
        this.loadMatches();
    }
}

export default Matches;