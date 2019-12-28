import React, { Component } from "react";
import "./sidebar.css";
import {connect} from "react-redux";

class Sidebar extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    componentWillUnmount() { }
    render() {
        const teamList = this.props.favTeams.map(team =>(
                <div key={team.id} className={"sidebar-team"} onClick={this.changeFocusedTeam}>
                    <img className={"search-img"} src={team.crestUrl}/>
                    {team.name}
                </div>
            ));
        return <div className={"Sidebar"}>{teamList}</div>
    }

    changeFocusedTeam = e =>{
        //TODO
    };
}

export default connect(store => {
    return {
        favTeams: store.api.favTeams,
        focusedTeam: store.api.focusedTeam
    };
})(Sidebar);