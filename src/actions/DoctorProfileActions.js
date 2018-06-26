import * as constants from '../constants/AppConstants'

export const firstNameUpdateDoctor = (dispatch, firstName) => (
    dispatch({
        type: constants.PROFILE_FIRST_NAME_CHANGED_DOC,
        firstName: firstName
    })
);

export const lastNameUpdateDoctor = (dispatch, lastName) => (
    dispatch({
        type: constants.PROFILE_LAST_NAME_CHANGED_DOC,
        lastName: lastName
    })
);

export const passwordUpdateDoctor = (dispatch, password) => (
    dispatch({
        type: constants.PROFILE_PASSWORD_CHANGED_DOC,
        password: password
    })
);

export const emailUpdateDoctor = (dispatch, email) => (
    dispatch({
        type: constants.PROFILE_EMAIL_CHANGED_DOC,
        email: email
    })
);

export const phoneUpdateDoctor = (dispatch, phone) => (
    dispatch({
        type: constants.PROFILE_PHONE_CHANGED_DOC,
        phone: phone
    })
);

export const updateDoctor = (dispatch,docId) =>(
    dispatch({
        type: constants.UPDATE_DOC,
        docId: docId
    })
);

export const fetchUpdatedDoctor = (dispatch,docId) => {
    fetch('http://localhost:8080/api/doctor/' + docId)
       .then(response => (response.json()))
        .then(jsonObject => (dispatch({
            type: constants.FIND_UPDATED_USER_DOC,
            doctor:jsonObject
            
        })))
};

