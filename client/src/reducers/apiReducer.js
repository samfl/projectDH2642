import {
    TEAMS_LOADED,
    STANDINGS_LOADED,
    SCORERS_LOADED,
    SCHEDULE_LOADED,
    TEAMS_LOADING,
    STANDINGS_LOADING,
    SCORERS_LOADING,
    SCHEDULE_LOADING, FOCUS_CHANGED
} from "../actions/types";

const initialState = {
    search: {
        query: '',
        league: 'PL',
        teams: [],
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
    focusedTeam: null
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
                search: action.payload
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
        case FOCUS_CHANGED:
            return {
                ...state,
                focusedTeam: action.payload
            };
            default:
            return state;
    }
}