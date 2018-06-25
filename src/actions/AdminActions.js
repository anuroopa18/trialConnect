import * as constants from '../constants/AppConstants'

export const findAllDoctors = (dispatch) => {
    fetch('http://localhost:8080/api/doctors/')
       .then(response => (response.json()))
        .then(jsonObject => (dispatch({
            type: constants.FIND_DOCTORS,
            doctors:jsonObject
            
        })))
       
};

export const findAllPatients = (dispatch) => {
    fetch('http://localhost:8080/api/patients/')
       .then(response => (response.json()))
        .then(jsonObject => (dispatch({
            type: constants.FIND_PATIENTS,
            patients:jsonObject
            
        })))
       
};

 export const deleteDoctor = (dispatch,doctorId) => {
    dispatch({
        type: constants.DELETE_DOCTOR,
        doctorId:doctorId})
       
}; 

export const deletePatient = (dispatch,patientId) => {
    dispatch({
        type: constants.DELETE_PATIENT,
        patientId:patientId})
       
}; 

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

export const updateUsername = (dispatch, username) => (
    dispatch({
        type: constants.USER_NAME_CHANGED,
        username: username
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

export const add = (dispatch) => (
    dispatch({type: constants.REGISTER})
);
