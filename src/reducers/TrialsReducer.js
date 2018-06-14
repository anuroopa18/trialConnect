import React from 'react'

export const trials = (state = {trials: [], message: '', init: true}, action) => {

    let modifiedState;
    switch (action.type) {

        case 'GET_ALL_TRIALS': {
            if (state.init) {
                modifiedState = Object.assign({}, state);
                modifiedState.trials = action.trials;
                modifiedState.init = action.init
                return modifiedState;
            }
        }
        case 'CLICKED': {
            modifiedState = Object.assign({}, state);
            modifiedState.message = action.newMessage
            return modifiedState
        }
        default:
            return state;
    }
};