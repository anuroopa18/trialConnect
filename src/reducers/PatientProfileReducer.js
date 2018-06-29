import * as constants from "../constants/AppConstants";
import {AppConstants as CONST, AppConstants} from "../constants/AppConstants";

const reducerProfile = (state = {
    user: {},
    init: true,
    firstName: '',
    lastName: '',
    phone: '',
    password: '',
    email: '',
    username: '',
    trials: [],
    role: '',
    age: '',
    gender: '',
    height: '',
    weight: '',
    medicalRecords: [],
    bmi: '',
    patient: {}
}, action) => {
    let modifiedState;
    switch (action.type) {
        case AppConstants.actions.SET_USER: {
            modifiedState = Object.assign({}, state);
            modifiedState.user = action.user;
            modifiedState.firstName = action.user.firstName;
            modifiedState.lastName = action.user.lastName;
            modifiedState.email = action.user.email;
            modifiedState.phone = action.user.phone;
            modifiedState.password = action.user.password;
            modifiedState.username = action.user.username;
            modifiedState.age = action.user.age;
            modifiedState.gender = action.user.gender;
            modifiedState.height = action.user.height;
            modifiedState.weight = action.user.weight;
            modifiedState.init = false;
            console.log(modifiedState);
            return modifiedState;

        }
        case AppConstants.actions.PROFILE_FIRSTNAME: {
            modifiedState = Object.assign({}, state);
            modifiedState.firstName = action.firstName;
            console.log(modifiedState);
            return modifiedState;
        }
        case AppConstants.actions.PROFILE_LASTNAME: {
            modifiedState = Object.assign({}, state);
            modifiedState.lastName = action.lastName;
            return modifiedState
        }

        case AppConstants.actions.PROFILE_PW: {
            modifiedState = Object.assign({}, state);
            modifiedState.password = action.password;
            return modifiedState
        }


        case AppConstants.actions.PROFILE_PHONE: {
            modifiedState = Object.assign({}, state);
            modifiedState.phone = action.phone;
            return modifiedState
        }

        case AppConstants.actions.PROFILE_AGE: {
            modifiedState = Object.assign({}, state);
            modifiedState.age = action.age;
            return modifiedState
        }

        case AppConstants.actions.PROFILE_GENDER: {
            modifiedState = Object.assign({}, state);
            modifiedState.gender = action.gender;
            return modifiedState
        }
        case AppConstants.actions.PROFILE_HEIGHT: {
            modifiedState = Object.assign({}, state);
            modifiedState.height = action.height;
            return modifiedState
        }
        case AppConstants.actions.PROFILE_WEIGHT: {
            modifiedState = Object.assign({}, state);
            modifiedState.weight = action.weight;
            return modifiedState
        }

        case AppConstants.actions.PROFILE_EMAIL: {
            modifiedState = Object.assign({}, state);
            modifiedState.email = action.email;
            return modifiedState
        }
        case AppConstants.actions.PROFILE_UPDATE: {
            console.log(state.user);
            modifiedState = Object.assign({}, state);
            modifiedState.user = action.user;
            return modifiedState;
        }
        case AppConstants.actions.FIND_PATIENT_BY_ID: {
            modifiedState = Object.assign({}, state);
            modifiedState.patient = action.patient;
            console.log(action.patient)
            modifiedState.init = false;
            return modifiedState;
        }
        case CONST.actions.RECOMMEND_TRIAL : {
            modifiedState = Object.assign({}, state);
            let trial = [];
            let trials = modifiedState.trials;
            if (trials.length > 0) {
                trial = trials.filter(trial => (
                    trial.nct_id === action.trialId
                ));
                console.log(trial);
                if (trial.length === 1) {
                    console.log(modifiedState.patient.id);
                    let singleTrial = trial[0];
                    fetch('https://tconnect-webapp.herokuapp.com/api/patient/' + modifiedState.patient.id + '/trial', {
                        method: 'POST',
                        body: JSON.stringify({
                            nctId: singleTrial.nct_id,
                            title: singleTrial.brief_title,
                            briefDescription: singleTrial.brief_summary,
                            detailedDescription: singleTrial.detail_description
                        }),
                        headers: {
                            'content-type': 'application/json'
                        }
                    })
                        .then((response) => response.json())
                        .then(trial => {
                            if (trial !== {} && trial !== undefined) {
                                alert('succesfully recommended');
                            } else {
                                alert('something is wrong. Try later may be.')
                            }
                        })
                }
            }
            return modifiedState;
        }
        case CONST.actions.GET_ALL_TRIALS_DOCTOR: {
            modifiedState = Object.assign({}, state);
            modifiedState.trials = action.trials;
            console.log(action.trials);
            modifiedState.role = localStorage.getItem('role');
            return modifiedState;
        }
        case CONST.actions.RECOMMENDED_TRIALS: {
            modifiedState = Object.assign({}, state);
            modifiedState.trials = action.trials;
            modifiedState.role = localStorage.getItem('role');
            console.log(modifiedState.trials);
            return modifiedState;
        }
        case constants.FIND_PATIENT_BY_USERNAME: {
            modifiedState = Object.assign({}, state);
            modifiedState.patient = action.patient;
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
        
        case constants.FIND_ALL_MEDICAL_RECORDS: {
            modifiedState = Object.assign({}, state);
            modifiedState.medicalRecords = action.medicalRecords;
            modifiedState.patient = action.patient;
            console.log('medical records');
            console.log(modifiedState.medicalRecords);
            let medicalRecords = [];
            medicalRecords = modifiedState.medicalRecords;
            medicalRecords.map((r, i) => {
                if (r.bmi !== undefined && r.bmi !== '') {
                    modifiedState.bmi = r.bmi
                }
            });
            console.log(modifiedState);
            console.log(action);
            return modifiedState;
        }
        default:
            return state;
    }
};

export default reducerProfile;