import * as constants from '../constants/AppConstants'

const reducerTrials = (state = {
    trials: [],
    message: '',
    init: true,
    user: {firstName: '', lastName: '', username: '', password: ''},
    role: ''
}, action) => {

    let modifiedState;
    switch (action.type) {

        case 'GET_ALL_TRIALS': {
            if (state.init) {
                modifiedState = Object.assign({}, state);
                modifiedState.trials = action.trials;
                modifiedState.init = action.init;
                return modifiedState;
            }
            break;
        }
        default:
            return state;
    }
};

export default reducerTrials;