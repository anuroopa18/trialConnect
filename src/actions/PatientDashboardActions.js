import * as constants from '../constants/AppConstants'

export const findPatientByUsername = (dispatch, username) => {
    
    return fetch('http://localhost:8080/api/findPatient/' + username)
       .then(response => (response.json()))
        .then(jsonObject => { console.log(jsonObject);
            (dispatch({
            type: constants.FIND_PATIENT_BY_USERNAME,
            patient: jsonObject,
            
        }))})
    };

    
    
    export const findDoctorsForPatient = (dispatch,patientId) => {
        return fetch('http://localhost:8080/api/patient/'+ patientId +'/doctors')
           .then(response => (response.json()))
            .then(doctors => { "doctors "+console.log(doctors);
               
        })};

    export const findMedicalRecordsForPatient = (dispatch,patientId) => {
      
        return fetch('http://localhost:8080/api/findPatient/mr/' + patientId )
           .then(response => (response.json()))
            .then(jsonObject => { console.log(jsonObject);
                (dispatch({
                type: constants.FIND_ALL_MEDICAL_RECORDS,
                medicalRecords: jsonObject,
                
            }))})
        };