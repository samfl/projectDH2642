import Observable from "./observable";
import * as config from "../config";

class Model extends Observable{
    constructor(){
        super();
        this.favTeams = [];
        this.currentTeam = null;
        this.query = '';
        this.selectedLeague = '';
    }

    /** MODEL METHODS **/
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
        console.log();
        const url = `${config.BASE_URL}${league}/teams`
        return fetch(url, config.httpOptions).then(this.processResponse);
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