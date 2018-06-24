import * as constants from '../constants/AppConstants'

export const updateFirstName = (dispatch, firstName) => (
    dispatch({
        type: constants.FIRST_NAME_CHANGED,
        firstName: firstName
    })
);

export const updateLastName = (dispatch, lastName) => (
    dispatch({
        type: constants.LAST_NAME_CHANGED,
        lastName: lastName
    })
);


export const updatePassword = (dispatch, password) => (
    dispatch({
        type: constants.PASSWORD_CHANGED,
        password: password
    })
);
export const updateRole = (dispatch, role) => (
    dispatch({
        type: constants.ROLE_CHANGED,
        role: role
    })
);

export const updateEmail = (dispatch, email) => (
    dispatch({
        type: constants.EMAIL_CHANGED,
        email: email
    })
);

export const updatePhone = (dispatch, phone) => (
    dispatch({
        type: constants.PHONE_CHANGED,
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
            patient:jsonObject,
            init:false
            
        })))
};
