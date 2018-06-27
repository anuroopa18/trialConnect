import * as Constants from '../constants/AppConstants'

const reducerTrials = (state = {
    trials: [],
    init: true,
    searchText: '',
}, action) => {

    let modifiedState;
    switch (action.type) {

        case Constants.AppConstants.actions.GET_ALL_TRIALS: {
            if (state.init) {
                modifiedState = Object.assign({}, state);
                modifiedState.trials = action.trials;
                modifiedState.init = action.init;
                return modifiedState;
            }
            
        }
        case Constants.AppConstants.actions.NAVBAR_SEARCH: {
            console.log(action.text);
            modifiedState = Object.assign({}, state);
            modifiedState.searchText = action.text;
            return modifiedState;
        }
        case Constants.AppConstants.actions.SEARCH_TRIALS: {
            modifiedState = Object.assign({}, state);
            modifiedState.trials = action.trials;
            return modifiedState;
        }
        default:
            return state;
    }
};

export default reducerTrials;