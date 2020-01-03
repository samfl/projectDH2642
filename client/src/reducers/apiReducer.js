import {
    TEAMS_LOADED,
    STANDINGS_LOADED,
    SCORERS_LOADED,
    SCHEDULE_LOADED,
    TEAMS_LOADING,
    STANDINGS_LOADING,
    SCORERS_LOADING,
    SCHEDULE_LOADING
} from "../actions/types";

const initialState = {
    search: {
        results: {
            query: '',
            league: 'PL',
            teams: [],
        },
        isLoading: false
    },
    standings: {
        results: {
            table: [],
            homeTable: [],
            awayTable: []
        },
        isLoading: false
    },
    scorers: {
        results: [],
        isLoading: false
    },
    schedule: {
        results: [],
        isLoading: false
    },

    //TODO
    /* should be in userReducer.js (?)
    * tells app what table/season/schedule to display. should
    * be changed when user clicks on a favorite team in the
    * sidebar.
    * Hardcoded to display arsenal 2019/20 season */
    focusedTeam: {
      league: 'PL',
      season: '2019',
        teamID: '57'
    }
};

export default function (state = initialState, action) {
    switch (action.type) {
        case TEAMS_LOADING:
            return { ...state,
                search: {
                    ...state.search,
                    isLoading: true,
                }
            };
        case TEAMS_LOADED:
            return { ...state,
                search: {
                    results: action.payload,
                    isLoading: false,
                }
            };
        case STANDINGS_LOADING:
            return { ...state,
                standings: {
                    ...state.standings,
                    isLoading: true
                }
            };
        case STANDINGS_LOADED:
            return{ ...state,
                standings: {
                    results: action.payload,
                    isLoading: false
                }
            };
        case SCORERS_LOADING:
            return { ...state,
                scorers: {
                    ...state.scorers,
                    isLoading: true
                }
            };
        case SCORERS_LOADED:
            return { ...state,
                scorers: {
                    results: action.payload,
                    isLoading: false
                }
            };
        case SCHEDULE_LOADING:
            return { ...state,
                schedule: {
                ...state.schedule,
                    isLoading: true
                }
            };
        case SCHEDULE_LOADED:
            return { ...state,
                schedule: {
                    results: action.payload,
                    isLoading: false
                }
            };
            default:
            return state;
    }
}