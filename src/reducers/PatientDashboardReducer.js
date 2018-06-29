import * as constants from '../constants/AppConstants'

const reducerPatientDashBoard = (state = {
    username:'',
    patient:{},
    medicalRecords:[],
    bmi:'',
    doctors:[]

}, action) => {
    let modifiedState;
    switch (action.type) {

        case constants.FIND_PATIENT_BY_USERNAME:
        {
            modifiedState = Object.assign({}, state);
            modifiedState.patient = action.patient;
            console.log(modifiedState);
            console.log(action);
            return modifiedState;
        }
        case constants.FIND_ALL_MEDICAL_RECORDS:
        {
            modifiedState = Object.assign({}, state);
            modifiedState.medicalRecords = action.medicalRecords;
            modifiedState.medicalRecords.map((r,i) => {
                if(r.bmi !== undefined && r.bmi !== '' ){
                    modifiedState.bmi = r.bmi
                }
            })
            console.log(modifiedState);
            console.log(action);
            return modifiedState;
        }

        case constants.FIND_MY_DOCTORS :
        {
            modifiedState = Object.assign({}, state);
            modifiedState.doctors = action.doctors;
            console.log(modifiedState);
            console.log(action);
            return modifiedState;   
        }
        
        default:
            return state;
    }

};

export default reducerPatientDashBoard;