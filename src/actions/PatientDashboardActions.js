import * as constants from '../constants/AppConstants'

export const findPatientByUsername = (dispatch, username) => {
    console.log(username);
    return fetch('https://tconnect-webapp.herokuapp.com/api/findPatient/' + username)
        .then(response => (response.json()))
        .then(jsonObject => {
            return findMedicalRecordsForPatient(dispatch, jsonObject)
        })
};


export const findDoctorsForPatient = (dispatch, patientId) => {
    return fetch('https://tconnect-webapp.herokuapp.com/api/patient/' + patientId + '/doctors')
        .then(response => (response.json()))
        .then(doctors => {
            (dispatch({
                type: constants.FIND_MY_DOCTORS,
                doctors: doctors  
            }))
          

        })
};

export const findMedicalRecordsForPatient = (dispatch, patient) => {

    return fetch('https://tconnect-webapp.herokuapp.com/api/findPatient/mr/' + patient.id)
        .then(response => (response.json()))
        .then(jsonObject => {
            console.log(jsonObject);
            (dispatch({
                type: constants.FIND_ALL_MEDICAL_RECORDS,
                medicalRecords: jsonObject,
                patient: patient

            }))
        })
};