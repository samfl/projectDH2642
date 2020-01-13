import React, { Component } from "react";
import "./search.css";
import { connect } from 'react-redux';
import { addTeam } from '../../actions/authActions'
import Image from '../image'
import noTeam from '../../images/noTeam.png'

class Result extends Component{
    constructor(props){
        super(props);
    }

    componentDidMount() { }

    componentWillUnmount() { }

    render() {
        let teamList = null;
        switch (this.props.search.isLoading) {
            case true:
                teamList = (
                    <div className={"loader-wrapper"}>
                        <div className={"loader"}></div>
                    </div>)
                break;
            case false:
                if(this.props.search.teams.length==0){
                    teamList = (
                        <h2>No teams found</h2>
                    )
                }else{
                    teamList = this.props.search.teams.map(team =>(
                        <div key={team.id} className={"result-team"}>
                            <Image className={"result-img"} src={team.crestUrl} fallback={noTeam}/>
                            <p>{team.name}</p>
                            <button value={JSON.stringify(Object.assign(team, {league: this.props.search.league}))} onClick={this.addClickedTeam}>Add to favorite</button>
                        </div>
                    ));
                }
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
        const team = JSON.parse(e.target.value);
        this.props.dispatch(addTeam(team, this.props.user._id));
    };
}

const mapStateToProps = state =>({
    search: state.api.search,
    user: state.auth.user
});

export default connect(
    mapStateToProps,
    null
)(Result)
