import Observable from "./observable";
import * as config from "../apiConfig/apiConfig";

class Model extends Observable{
    constructor(){
        super();
        this.favTeams = [];
        this.focusedTeam = null;
        this.query = '';
        this.selectedLeague = '';
    }

    /** MODEL METHODS **/
    getFocusedTeam() {
        return this.focusedTeam;
    }

    setFocusedTeam(focusedTeam) {
        this.focusedTeam = focusedTeam;
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
        const url = `${config.BASE_URL}${league}/teams`
        return fetch(url, config.httpOptions).then(this.processResponse).then(results =>{
            return results.teams.filter(teams => teams.name.toUpperCase().includes(team.toUpperCase()));
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