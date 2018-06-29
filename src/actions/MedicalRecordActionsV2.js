import {AppConstants} from "../constants/AppConstants";

export const onChangeBMI = (dispatch, bmi) => {
    return dispatch({
        type: AppConstants.actions.CHANGE_BMI,
        bmi: bmi
    });
};

export const onChangeBloodPressure = (dispatch, bloodPressure) => {
    return dispatch({
        type: AppConstants.actions.CHANGE_BP,
        bloodPressure: bloodPressure
    });
};

export const onChangeBodyTemperature = (dispatch, bodyTemperature) => {
    return dispatch({
        type: AppConstants.actions.CHANGE_BT,
        bodyTemperature: bodyTemperature
    });
};

export const onChangePulseRate = (dispatch, pulseRate) => {
    return dispatch({
        type: AppConstants.actions.CHANGE_PR,
        pulseRate: pulseRate
    });
};

export const onChangeMedicine = (dispatch, medicine) => {
    return dispatch({
        type: AppConstants.actions.CHANGE_MEDICATION,
        medicine: medicine
    });
};
export const onChangeMedicalCondition = (dispatch, medicalCondition) => {
    return dispatch({
        type: AppConstants.actions.CHANGE_CONDITION_NAME,
        medicalCondition: medicalCondition
    });
};

export const onChangeAllergyCause = (dispatch, allergyCause) => {
    console.log('allergy cause: ' + allergyCause);
    return dispatch({
        type: AppConstants.actions.CHANGE_ALLERGEN,
        allergyCause: allergyCause
    });
};

export const onChangeAllergyName = (dispatch, name) => {
    console.log('allergy name :' + name);
    return dispatch({
        type: AppConstants.actions.CHANGE_ALLERGY_NAME,
        allergyName: name
    });
};

export const onChangeAllergyTreatment = (dispatch, allergyTreatment) => {
    console.log('treatment: ' + allergyTreatment);
    return dispatch({
        type: AppConstants.actions.CHANGE_TREATMENT,
        allergyTreatment: allergyTreatment
    });
};

export const createMedicalRecord = (dispatch) => {
    console.log("Creating");
    return dispatch({
        type: AppConstants.actions.CREATE_M_RECORD
    })
};

export const updateMedicalRecord = dispatch => {
    console.log('update');
    return dispatch({
        type: AppConstants.actions.UPDATE_M_RECORD
    })
};
export const setPatient = (dispatch, patientId) => {
    return fetch('https://tconnect-webapp.herokuapp.com/api/patient/' + patientId)
        .then(response => response.json())
        .then(patient => {
            console.log(patient);
            dispatch({
                type: AppConstants.actions.SET_PATIENT,
                patient: patient
            })
        })
};
export const findAllPatients = (dispatch) => {
    return fetch('https://tconnect-webapp.herokuapp.com/api/patients')
        .then((response) => (response.json()))
        .then((patients => {
            console.log(patients);
            dispatch({
                type: AppConstants.actions.FIND_ALL_P,
                patients: patients
            })
        }))
};

export const findMyPatients = (dispatch) => {
    console.log('finding my patients');
    let doctor = JSON.parse(localStorage.getItem('user'));
    return fetch('https://tconnect-webapp.herokuapp.com/api/doctor/' + doctor.id + '/patients')
        .then(response => response.json())
        .then(myPatients => {
            console.log(myPatients);
            dispatch({
                type: AppConstants.actions.FIND_MY_P,
                myPatients: myPatients
            })
        })
};

export const redirectToPatientDashboard = (dispatch) => {
    console.log('redirecting');
};