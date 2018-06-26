import * as constants from '../constants/AppConstants'

export const findAllDoctors = (dispatch) => {
    fetch('http://localhost:8080/api/doctors/')
        .then(response => (response.json()))
        .then(jsonObject => (dispatch({
            type: constants.FIND_DOCTORS,
            doctors: jsonObject

        })))

};

export const findAllPatients = (dispatch) => (
    fetch('http://localhost:8080/api/patients/')
        .then(response => (response.json()))
        .then(jsonObject => (dispatch({
            type: constants.FIND_PATIENTS,
            patients: jsonObject

        })))

);

export const findAllRecords = (dispatch) => (
    fetch('http://localhost:8080/api/medicalrecords/')
        .then(response => (response.json()))
        .then(jsonObject => (dispatch({
            type: constants.FIND_RECORDS,
            records: jsonObject

        })))

);

export const deleteDoctor = (dispatch, doctorId) => {
    return fetch('http://localhost:8080/api/doctor/' + doctorId, {
        method: 'delete'
    })
        .then(() => {
            findAllDoctors(dispatch);
        })

};

export const deletePatient = (dispatch, patientId) => {
    return fetch('http://localhost:8080/api/patient/' + patientId, {
        method: 'delete'
    })
        .then(() => {
            findAllPatients(dispatch);
        })

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

export const add = (dispatch, role, user) => {
    console.log('after clicking add from validateFields');
    if (role === "Doctor") {
        return fetch('http://localhost:8080/api/doctor', {
            method: 'post',
            body: JSON.stringify(user),
            headers: {
                'content-type': 'application/json'
            }
        }).then(() => {
            alert("Added successfully")
            findAllDoctors(dispatch);
        })
    }
    else {
        return fetch('http://localhost:8080/api/patient', {
            method: 'post',
            body: JSON.stringify(user),
            headers: {
                'content-type': 'application/json'
            }
        })

            .then(() => {
                alert("Added successfully")
                findAllPatients(dispatch);
            })
    }

};
