import React, { Component } from "react";
import "./sidebar.css";

class Sidebar extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.model.addObserver(this);
    }

    componentWillUnmount() {
        this.props.model.removeObserver(this);
    }
    render() {
        const teamList = this.props.model.getFavTeam().map(team =>(
                <div key={team.id} className={"sidebar-team"} onClick={this.changeFocusedTeam}>
                    <img className={"search-img"} src={team.crestUrl}/>
                    {team.name}
                </div>
            ));
        return <div>{teamList}</div>
    }

    update(){
    }
    changeFocusedTeam = e =>{
        //this.props.model.setFocusedTeam(e.target.className);
    };
}

export default Sidebar;