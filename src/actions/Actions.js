import React from 'react'

/*export const alertActions = {
    success,
    error
};
function success(message, dispatch){
    return dispatch({type:'SUCCESS',message});
}

function error(message, dispatch){
    return dispatch({type:'ERROR',message});
}*/

export const findAllTrials = dispatch => {
    console.log("Entered Action.js");
    fetch('https://clinicaltrialsapi.cancer.gov/v1/clinical-trials')
        .then(response => response.json())
        .then(jsonObject => (dispatch({
            type: 'GET_ALL_TRIALS',
            trials: jsonObject.trials,
            init:false
        })))
};

export const onClickTrials = dispatch => {
    console.log("Trial Clicked");
    return dispatch({
        type: 'CLICKED',
        newMessage: 'New Message'
    })
}