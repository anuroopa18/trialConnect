import * as constants from '../constants/AppConstants'

export const profileUpdateFirstName = (dispatch, firstName) => (
    dispatch({
        type: constants.PROFILE_FIRST_NAME_CHANGED,
        firstName: firstName
    })
);

export const profileUpdateLastName = (dispatch, lastName) => (
    dispatch({
        type: constants.PROFILE_LAST_NAME_CHANGED,
        lastName: lastName
    })
);


export const profileUpdatePassword = (dispatch, password) => (
    dispatch({
        type: constants.PROFILE_PASSWORD_CHANGED,
        password: password
    })
);


export const profileUpdateEmail = (dispatch, email) => (
    dispatch({
        type: constants.PROFILE_EMAIL_CHANGED,
        email: email
    })
);

export const profileUpdatePhone = (dispatch, phone) => (
    dispatch({
        type: constants.PROFILE_PHONE_CHANGED,
        phone: phone
    })
);

export const update = (dispatch) => {
    const {patientId} = JSON.parse(localStorage.getItem('modifiedState.loginUser'));
    console.log(patientId);
    dispatch({
        type: constants.UPDATE,
        patientId:patientId})
}

export const fetchUserDetails = (dispatch,patientId) => {
    fetch('http://localhost:8080/api/patient/' + patientId)
       .then(response => (response.json()))
        .then(jsonObject => (dispatch({
            type: constants.FIND_UPDATED_USER,
            patient:jsonObject
            
        })))
};
