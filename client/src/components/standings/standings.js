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
        this.props.model.getStandings().then()
    }

    render() {
        return (
            <div>
                hej
            </div>
        );
    }
}
export default Standings;