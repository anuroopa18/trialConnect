import * as constants from '../constants/AppConstants'

export const firstNameUpdateAdmin = (dispatch, firstName) => (
    dispatch({
        type: constants.ADMIN_FIRST_NAME_CHANGED_DOC,
        firstName: firstName
    })
);

export const lastNameUpdateAdmin = (dispatch, lastName) => (
    dispatch({
        type: constants.ADMIN_LAST_NAME_CHANGED_DOC,
        lastName: lastName
    })
);

export const passwordUpdateAdmin = (dispatch, password) => (
    dispatch({
        type: constants.ADMIN_PASSWORD_CHANGED_DOC,
        password: password
    })
);

export const emailUpdateAdmin = (dispatch, email) => (
    dispatch({
        type: constants.ADMIN_EMAIL_CHANGED_DOC,
        email: email
    })
);

export const phoneUpdateAdmin = (dispatch, phone) => (
    dispatch({
        type: constants.ADMIN_PHONE_CHANGED_DOC,
        phone: phone
    })
);

export const specUpdateAdmin = (dispatch, specialization) => (
    dispatch({
        type: constants.ADMIN_SPEC_CHANGED_DOC,
        specialization: specialization
    })
);

export const updateDoctorAdmin = (dispatch,userId) =>(
    dispatch({
        type: constants.ADMIN_UPDATE_DOC,
        userId: userId
    })
);

export const fetchDoctorDetails = (dispatch,docId) => {
    fetch('https://tconnect-webapp.herokuapp.com/api/doctor/' + docId)
       .then(response => (response.json()))
        .then(jsonObject => (dispatch({
            type: constants.ADMIN_FIND_DOC,
            doctor:jsonObject
            
        })))
};

