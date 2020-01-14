// import {BASE_URL, httpOptions} from "../apiConfig/apiConfig";
import axios from 'axios';
import {
    TEAMS_LOADED,
    STANDINGS_LOADED,
    SCORERS_LOADED,
    SCHEDULE_LOADED,
    TEAMS_LOADING,
    STANDINGS_LOADING,
    SCORERS_LOADING,
    SCHEDULE_LOADING,
    FOCUS_CHANGED
} from "../actions/types";

const BASE_URL = "https://api.football-data.org/v2";
const proxyURL = 'https://cors-anywhere.herokuapp.com/';

export const getTeams = (league, query) =>{
    return function(dispatch){
        dispatch({
            type: TEAMS_LOADING
        });
        axios
            .get('/configvars')
            .then(res => {
                const config = JSON.parse(res.data);
                console.log("response: " + res);
                console.log("response data: "+ res.data)
                console.log("config: " + config);
                const targetURL = `${BASE_URL}/competitions/${league}/teams`;
                fetch(proxyURL + targetURL, config)
                    .then(response => response.json())
                    .then(response =>{
                        dispatch({
                            type: TEAMS_LOADED,
                            payload: {
                                league: league,
                                query: query,
                                teams: response.teams.filter(teams => teams.name.toUpperCase().includes(query.toUpperCase())),
                                isLoading: false
                            }
                        });
                    })
                    .catch(err => {
                        console.log('ERROR', err);
                    });
            });
    }
};

export const getStandings = (league, season='2019') =>{
    return function(dispatch){
        dispatch({
            type: STANDINGS_LOADING
        });
        axios
            .get('/configvars')
            .then(res =>{
                const config = JSON.parse(res.data);
                const targetURL = `${BASE_URL}/competitions/${league}/standings?season=${season}`
                fetch(proxyURL + targetURL, config)
                    .then(response => response.json())
                    .then(response =>{
                        dispatch({
                            type: STANDINGS_LOADED,
                            payload: {
                                table: response.standings[0].table,
                                homeTable: response.standings[1].table,
                                awayTable: response.standings[2].table
                            }
                        })
                    })
                    .catch(err => {
                        console.log('ERROR', err);
                    });
            })
    }
};

export const getTopScorers = (league, season='2019') =>{
    return function(dispatch){
        dispatch({
            type: SCORERS_LOADING
        });
        axios
            .get('/configvars')
            .then(res =>{
                const config = JSON.parse(res.data);
                const targetURL = `${BASE_URL}/competitions/${league}/scorers?season=${season}`
                fetch(proxyURL + targetURL, config)
                    .then(response => response.json())
                    .then(response =>{
                        dispatch({
                            type: SCORERS_LOADED,
                            payload: response.scorers
                        })
                    })
                    .catch(err => {
                        console.log('ERROR', err);
                    });
            })
    }
};

export const getSchedule = (teamId, league, season='2019') =>{
    return function(dispatch){
        dispatch({
            type: SCHEDULE_LOADING
        });
        axios
            .get('/configvars')
            .then(res =>{
                const config = JSON.parse(res.data);
                const targetURL = `${BASE_URL}/competitions/${league}/matches?season=${season}`;
                fetch(proxyURL + targetURL, config)
                    .then(response => response.json())
                    .then(response => {
                        dispatch({
                            type: SCHEDULE_LOADED,
                            payload: response.matches.filter(matches =>
                                (matches.homeTeam.id == teamId) || (matches.awayTeam.id == teamId))
                        })
                    })
                    .catch(err => {
                        console.log('ERROR', err);
                    });
            })
    }
};

export const setFocusedTeam = (teamId, league) => {
    return function(dispatch) {
        dispatch(getSchedule(teamId, league));
        dispatch(getStandings(league));
        dispatch(getTopScorers(league));
        dispatch({
            type: FOCUS_CHANGED,
            payload: {
                id: teamId,
                league: league
            }
        })
    }
};