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

export const deleteRecord = (dispatch, recordId) => {
    return fetch('http://localhost:8080/api/medicalrecord/' + recordId, {
        method: 'delete'
    })
        .then(() => {
            findAllPatients(dispatch);
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

export const adminUpdateFirstName = (dispatch, firstName) => (
    dispatch({
        type: constants.ADMIN_FIRST_NAME_CHANGED,
        firstName: firstName
    })
);

export const adminUpdateLastName = (dispatch, lastName) => (
    dispatch({
        type: constants.ADMIN_LAST_NAME_CHANGED,
        lastName: lastName
    })
);

export const adminUpdateUsername = (dispatch, username) => (
    dispatch({
        type: constants.ADMIN_USER_NAME_CHANGED,
        username: username
    })
);

export const adminUpdatePassword = (dispatch, password) => (
    dispatch({
        type: constants.ADMIN_PASSWORD_CHANGED,
        password: password
    })
);
export const adminUpdateRole = (dispatch, role) => (
    dispatch({
        type: constants.ADMIN_ROLE_CHANGED,
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
            window.location.reload();
            alert("Added successfully");
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
