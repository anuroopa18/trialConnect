import * as constants from '../constants/AppConstants'

export const firstNameUpdateAdminPat = (dispatch, firstName) => (
    dispatch({
        type: constants.ADMIN_FIRST_NAME_CHANGED_PAT,
        firstName: firstName
    })
);

export const lastNameUpdateAdminPat = (dispatch, lastName) => (
    dispatch({
        type: constants.ADMIN_LAST_NAME_CHANGED_PAT,
        lastName: lastName
    })
);

export const passwordUpdateAdminPat = (dispatch, password) => (
    dispatch({
        type: constants.ADMIN_PASSWORD_CHANGED_PAT,
        password: password
    })
);

export const emailUpdateAdminPat = (dispatch, email) => (
    dispatch({
        type: constants.ADMIN_EMAIL_CHANGED_PAT,
        email: email
    })
);

export const phoneUpdateAdminPat = (dispatch, phone) => (
    dispatch({
        type: constants.ADMIN_PHONE_CHANGED_PAT,
        phone: phone
    })
);
export const ageUpdateAdminPat = (dispatch, age) => (
    dispatch({
        type: constants.ADMIN_AGE_CHANGED_PAT,
        age: age
    })
);

export const updatePatientAdmin = (dispatch,patId) =>(
    dispatch({
        type: constants.ADMIN_UPDATE_PAT,
        patId: patId
    })
);

export const fetchPatientDetails = (dispatch,patId) => {
    fetch('http://localhost:8080/api/patient/' + patId)
       .then(response => (response.json()))
        .then(jsonObject => (dispatch({
            type: constants.ADMIN_FIND_PAT,
            patient:jsonObject
            
        })))
};

