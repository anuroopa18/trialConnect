import {AppConstants as Constants} from "../constants/AppConstants";


export const changeSearchText = (text, dispatch) => {
    console.log(text);
    return dispatch({
        type: Constants.actions.NAVBAR_SEARCH,
        text: encodeURIComponent(text)
    })
};

export const searchTrials = (searchText, dispatch) => {
    let key = '_fulltext=';
    return fetch('https://clinicaltrialsapi.cancer.gov/v1/clinical-trials?size=5&' + key + searchText)
        .then(response => (response.json()))
        .then(jsonObject => {
                console.log(jsonObject);
                return dispatch({
                    type: Constants.actions.SEARCH_TRIALS,
                    trials: jsonObject.trials
                })
            }
        )
};