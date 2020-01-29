import React, { Component } from "react";
import "./matches.css";
import { connect } from 'react-redux';
import { addTeam } from '../../actions/authActions'
import Image from '../image'
import noTeam from '../../images/noTeam.png'
import { setFocusedTeam } from "../../actions/apiActions";
const popularTeams = [
    {
        "id": 57,
        "area": {
            "id": 2072,
            "name": "England"
        },
        "name": "Arsenal FC",
        "shortName": "Arsenal",
        "tla": "ARS",
        "crestUrl": "http://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg",
        "address": "75 Drayton Park London N5 1BU",
        "phone": "+44 (020) 76195003",
        "website": "http://www.arsenal.com",
        "email": "info@arsenal.co.uk",
        "founded": 1886,
        "clubColors": "Red / White",
        "venue": "Emirates Stadium",
        "lastUpdated": "2020-01-23T02:48:48Z",
        "league": "PL"
    },
    {
        "id": 64,
        "area": {
            "id": 2072,
            "name": "England"
        },
        "name": "Liverpool FC",
        "shortName": "Liverpool",
        "tla": "LIV",
        "crestUrl": "http://upload.wikimedia.org/wikipedia/de/0/0a/FC_Liverpool.svg",
        "address": "Anfield Road Liverpool L4 OTH",
        "phone": "+44 (0844) 4993000",
        "website": "http://www.liverpoolfc.tv",
        "email": "customercontact@liverpoolfc.tv",
        "founded": 1892,
        "clubColors": "Red / White",
        "venue": "Anfield",
        "lastUpdated": "2020-01-23T02:49:01Z",
        "league": "PL"
    },
    {
        "id": 78,
        "area": {
            "id": 2224,
            "name": "Spain"
        },
        "name": "Club Atlético de Madrid",
        "shortName": "Atleti",
        "tla": "ATM",
        "crestUrl": "http://upload.wikimedia.org/wikipedia/de/c/c1/Atletico_Madrid_logo.svg",
        "address": "Paseo Virgen del Puerto, 67 Madrid 28005",
        "phone": "+34 (913) 669048",
        "website": "http://www.clubatleticodemadrid.com",
        "email": "comunicacion@clubatleticodemadrid.com",
        "founded": 1903,
        "clubColors": "Red / White / Blue",
        "venue": "Estadio Wanda Metropolitano",
        "lastUpdated": "2020-01-23T03:18:59Z",
        "league": "PD"
    },
    {
        "id": 81,
        "area": {
            "id": 2224,
            "name": "Spain"
        },
        "name": "FC Barcelona",
        "shortName": "Barça",
        "tla": "FCB",
        "crestUrl": "http://upload.wikimedia.org/wikipedia/de/a/aa/Fc_barcelona.svg",
        "address": "Avenida Arístides Maillol s/n Barcelona 08028",
        "phone": "+34 (902) 189900",
        "website": "http://www.fcbarcelona.com",
        "email": "secretaria@fcbarcelona.com",
        "founded": 1899,
        "clubColors": "Red / Navy Blue / Orange",
        "venue": "Camp Nou",
        "lastUpdated": "2020-01-23T03:19:05Z",
        "league": "PD"
    },
    {
        "id": 108,
        "area": {
            "id": 2114,
            "name": "Italy"
        },
        "name": "FC Internazionale Milano",
        "shortName": "Inter",
        "tla": "INT",
        "crestUrl": "https://upload.wikimedia.org/wikipedia/de/4/48/Internazionale_Milano_2014.svg",
        "address": "Corso Vittorio Emanuele II 9 Milano 20122",
        "phone": "+39 (02) 77151",
        "website": "http://www.inter.it",
        "email": "segreteriaccic@inter.it",
        "founded": 1908,
        "clubColors": "Blue / Black",
        "venue": "Stadio Giuseppe Meazza",
        "lastUpdated": "2020-01-23T03:10:18Z",
        "league": "SA"
    },
    {
        "id": 109,
        "area": {
            "id": 2114,
            "name": "Italy"
        },
        "name": "Juventus FC",
        "shortName": "Juventus",
        "tla": "JUV",
        "crestUrl": "http://upload.wikimedia.org/wikipedia/de/d/d2/Juventus_Turin.svg",
        "address": "Corso Galileo Ferraris, 32 Torino 10128",
        "phone": "+39 (011) 65631",
        "website": "http://www.juventus.com",
        "email": "francesco.gianello@juventus.com",
        "founded": 1897,
        "clubColors": "White / Black",
        "venue": "Allianz Stadium",
        "lastUpdated": "2020-01-23T03:10:19Z",
        "league": "SA"
    },
    {
        "id": 5,
        "area": {
            "id": 2088,
            "name": "Germany"
        },
        "name": "FC Bayern München",
        "shortName": "Bayern M",
        "tla": "FCB",
        "crestUrl": "https://upload.wikimedia.org/wikipedia/commons/1/1b/FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg",
        "address": "Säbenerstr. 51 München 81547",
        "phone": "+49 (089) 699310",
        "website": "http://www.fcbayern.de",
        "email": "service-team@fcb.de",
        "founded": 1900,
        "clubColors": "Red / White / Blue",
        "venue": "Allianz Arena",
        "lastUpdated": "2020-01-23T02:14:21Z",
        "league": "BL1"
    },
    {
        "id": 4,
        "area": {
            "id": 2088,
            "name": "Germany"
        },
        "name": "BV Borussia 09 Dortmund",
        "shortName": "Dortmund",
        "tla": "BVB",
        "crestUrl": "http://upload.wikimedia.org/wikipedia/commons/6/67/Borussia_Dortmund_logo.svg",
        "address": "Rheinlanddamm 207-209 Dortmund 44137",
        "phone": "+49 (231) 90200",
        "website": "http://www.bvb.de",
        "email": "info@bvb.de",
        "founded": 1909,
        "clubColors": "Black / Yellow",
        "venue": "Signal Iduna Park",
        "lastUpdated": "2020-01-23T02:14:20Z",
        "league": "BL1"
    },
    {
        "id": 524,
        "area": {
            "id": 2081,
            "name": "France"
        },
        "name": "Paris Saint-Germain FC",
        "shortName": "PSG",
        "tla": "PSG",
        "crestUrl": "https://upload.wikimedia.org/wikipedia/en/a/a7/Paris_Saint-Germain_F.C..svg",
        "address": "24, rue de Commandant Guibaud Paris 7501",
        "phone": "+33 (0139) 733467",
        "website": "http://www.psg.fr",
        "email": "communaute@psg.fr",
        "founded": 1904,
        "clubColors": "Red / Blue / White",
        "venue": "Parc des Princes",
        "lastUpdated": "2020-01-23T03:31:06Z",
        "league": "FL1"
    },

]
class NoTeamMsg extends Component{
    render(){
        const teams = popularTeams.map(team =>(
            <div key={team.id} className={"result-team"}>
                <Image className={"result-img"} src={team.crestUrl} fallback={noTeam}/>
                <p>{team.name}</p>
                <button value={JSON.stringify(team)} onClick={this.addClickedTeam}>Add to favorite</button>
            </div>
        ));
        return (
            <div className={"matches-msg"}>
                <h2>Add a team to favorites to view {this.props.page}, use the Search feature</h2>
                <h2>or select one of the following popular teams:</h2>
                <div className={"popteams-wrapper"}>
                    {teams} 
                </div>
            </div>
        )
    }

    addClickedTeam = e => {
        const team = JSON.parse(e.target.value);
        this.props.dispatch(addTeam(team, this.props.user._id));
        this.props.dispatch(setFocusedTeam(team.id, team.league))
    };
}
const mapStateToProps = state =>({
    user: state.auth.user
});
export default connect(
    mapStateToProps,
    null
)(NoTeamMsg)