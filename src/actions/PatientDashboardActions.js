import * as constants from '../constants/AppConstants'

export const findPatientByUsername = (dispatch, username) => {
    console.log(username);
    return fetch('http://localhost:8080/api/findPatient/' + username)
       .then(response => (response.json()))
        .then(jsonObject => { console.log(jsonObject);
            (dispatch({
            type: constants.FIND_PATIENT_BY_USERNAME,
            patient: jsonObject
        }))})

    
    };