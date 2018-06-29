import { AppConstants as CONST } from "../constants/AppConstants";

function onlyUnique(value, index, self) {
    console.log(value);
    return self.indexOf(value) === index;
}

const reducerRecordViewer = (state = {
    allergyName: '',
    allergyTreatment: '',
    allergyCause: '',
    bloodPressure: '',
    bodyTemperature: '',
    pulseRate: '',
    bmi: '',
    medicine: '',
    medicalCondition: '',
    curPatient: {},
    doctor: {},
    medicalRecord: {},
    init: true,
    patients: [],
    myPatients: []
}, action) => {
    let modifiedState;
    switch (action.type) {

        case CONST.actions.CHANGE_ALLERGY_NAME: {
            modifiedState = Object.assign({}, state);
            modifiedState.allergyName = action.allergyName;
            return modifiedState
        }

        case CONST.actions.CHANGE_ALLERGEN: {
            modifiedState = Object.assign({}, state);
            modifiedState.allergyCause = action.allergyCause;
            return modifiedState
        }

        case CONST.actions.CHANGE_TREATMENT: {
            modifiedState = Object.assign({}, state);
            modifiedState.allergyTreatment = action.allergyTreatment;
            return modifiedState
        }
        case CONST.actions.CHANGE_CONDITION_NAME: {
            modifiedState = Object.assign({}, state);
            modifiedState.medicalCondition = action.medicalCondition;
            return modifiedState;
        }
        case CONST.actions.CHANGE_MEDICATION: {
            modifiedState = Object.assign({}, state);
            modifiedState.medicine = action.medicine;
            return modifiedState;
        }

        case CONST.actions.CREATE_M_RECORD: {
            modifiedState = Object.assign({}, state);
            let pid = modifiedState.curPatient.id;
            let docId = modifiedState.doctor.id;
            const { allergyName } = modifiedState;
            const { allergyCause } = modifiedState;
            const { allergyTreatment } = modifiedState;
            const { bloodPressure } = modifiedState;
            const { bodyTemperature } = modifiedState;
            const { medicine } = modifiedState;
            const { pulseRate } = modifiedState;
            const { bmi } = modifiedState;
            const { medicalCondition } = modifiedState;

            if (allergyName !== '' && allergyCause !== '' && allergyTreatment !== '' && bloodPressure !== ''
                && bodyTemperature !== '' && medicine !== '' && medicalCondition !== '' && bmi !== '' && pulseRate !== '') {
                fetch('https://tconnect-webapp.herokuapp.com/api/medicalrecord/' + pid + '/doc/' + docId, {
                    method: 'post',
                    body: JSON.stringify({
                        allergyName: modifiedState.allergyName,
                        allergyCause: modifiedState.allergyCause,
                        allergyTreatment: modifiedState.allergyTreatment,
                        bloodPressure: modifiedState.bloodPressure,
                        bodyTemperature: modifiedState.bodyTemperature,
                        medicine: modifiedState.medicine,
                        pulseRate: modifiedState.pulseRate,
                        bmi: modifiedState.bmi,
                        medicalCondition: modifiedState.medicalCondition
                    }),
                    headers: {
                        'content-type': 'application/json'
                    }
                })
                    .then(response => response.json())
                    .then(mr => {
                        modifiedState.medicalRecord = mr;
                        if (mr !== undefined && mr !== {}) {
                            alert('Record created successfully');
                            window.location.href = '/home/' + modifiedState.curPatient.username + '/dashboard';
                        } else {
                            alert('Something went wrong. Please try again after some time.');
                        }
                    });
            }else{
                alert('Please fill all the fields.');
            }
            return modifiedState;
        }

        case CONST.actions.UPDATE_M_RECORD: {
            return modifiedState
        }
        case CONST.actions.DELETE_M_RECORD: {
            return modifiedState
        }

        case CONST.actions.CHANGE_PR: {
            modifiedState = Object.assign({}, state);
            modifiedState.pulseRate = action.pulseRate;
            return modifiedState;
        }
        case CONST.actions.CHANGE_BT: {
            modifiedState = Object.assign({}, state);
            modifiedState.bodyTemperature = action.bodyTemperature;
            return modifiedState;
        }
        case CONST.actions.CHANGE_BP: {
            modifiedState = Object.assign({}, state);
            modifiedState.bloodPressure = action.bloodPressure;
            return modifiedState;
        }
        case CONST.actions.CHANGE_BMI: {
            modifiedState = Object.assign({}, state);
            modifiedState.bmi = action.bmi;
            return modifiedState;
        }
        case CONST.actions.SET_PATIENT: {
            modifiedState = Object.assign({}, state);
            modifiedState.curPatient = action.patient;
            modifiedState.doctor = JSON.parse(localStorage.getItem('user'));
            console.log(modifiedState);
            return modifiedState
        }
        case CONST.actions.FIND_ALL_P: {
            modifiedState = Object.assign({}, state);
            modifiedState.patients = action.patients;
            modifiedState.init = false;
            return modifiedState;
        }
        case CONST.actions.FIND_MY_P: {
            modifiedState = Object.assign({}, state);
            modifiedState.myPatients = action.myPatients;
            let myPatients = action.myPatients;
            modifiedState.init = false;

            console.log(modifiedState);
            return modifiedState;
        }
        default:
            return state;
    }
};

export default reducerRecordViewer