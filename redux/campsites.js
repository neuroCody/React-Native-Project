import * as ActionTypes from './ActionTypes';

export const campsites = (
    state = { 
        isLading: true,
        errMess: null,
        campsites: []}, action) => {
            switch (action.type) {
                case ActionTypes.ADD_CAMPSITES:
                    return{...state, isLoaing: false, errMess: null, campsites: action.payload};
                
                case ActionTypes.CAMPSITES_LOADING:
                    return{...state, isLoading: true, errMess: null, campsites: []};

                case ActionTypes.CAMPSITES_FAILED:
                    return{...state, isLoading: false, errMess: action.payload};

                default:
                    return state;
            }
        }