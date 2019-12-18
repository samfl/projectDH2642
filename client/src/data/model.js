import Observable from "./observable";
import * as config from "../apiConfig/apiConfig";

const leagues = {
    England: 'PL',
    Spain: 'PD',
    Germany: 'BL1',
    Italy: 'SA'
};

class Model extends Observable{
    constructor(){
        super();
        this.favTeams = [];
        this.focusedTeam = {
            country: 'Spain',
            teamName: 'FC Barcelona'
        };
        this.query = '';
        this.selectedLeague = '';
    }

    /** MODEL METHODS **/
    getFocusedTeam() {
        return this.focusedTeam;
    }

    setFocusedTeam(teamName, country) {
        this.focusedTeam = {
            country: country,
            teamName: teamName
        };
        this.notifyObservers();
    }

    getQuery(){
        return this.query;
    }

    setQuery(query){
        this.query = query;
        this.notifyObservers();
    }

    getSelectedLeague(){
        return this.selectedLeague;
    }

    setSelectedLeague(selectedLeague){
        this.selectedLeague = selectedLeague;
        this.notifyObservers();
    }

    getFavTeam(){
        return this.favTeams;
    }
    addTeam(newTeam){
        this.favTeams = this.favTeams.filter(team => team.id != newTeam.id);
        this.favTeams.push(newTeam);
        this.notifyObservers();
    }
    removeTeam(id){
        this.favTeams = this.favTeams.filter(team => id != team.id);
        this.notifyObservers();
    }

    /** API METHODS **/

    searchTeams(league = '', team = ''){
        const url = `${config.BASE_URL}${league}/teams`;
        return fetch(url, config.httpOptions).then(this.processResponse).then(results =>{
            return results.teams.filter(teams => teams.name.toUpperCase().includes(team.toUpperCase()));
        });
    }

    getSchedule(){
        const url = `${config.BASE_URL}/competitions/${leagues[this.getFocusedTeam().country]}/matches`;
        console.log(this.getFocusedTeam().teamName);
        return fetch(url, config.httpOptions).then(this.processResponse).then(results =>{
            return results.matches.filter(matches => matches.homeTeam.name.includes(this.getFocusedTeam().teamName) || matches.awayTeam.name.includes(this.getFocusedTeam().teamName));
        });
    }

    processResponse(response) {
        if (response.ok) {
            return response.json();
        }
        throw response;
    }
}
const modelInstance = new Model();
export default  modelInstance;