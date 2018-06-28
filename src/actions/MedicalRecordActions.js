import {AppConstants} from '../constants/AppConstants'

export const addAllergy = (dispatch) => {
    console.log('Adding Allergy ');
    return dispatch({
        type: AppConstants.actions.ADD_ALLERGY
    });

};
export const addCondition = (dispatch) => {
    console.log('Adding Condtion ');
    return dispatch({
        type: AppConstants.actions.ADD_CONDITION
    })
};
export const addMedication = (dispatch) => {
    console.log('Adding Medication');
    return dispatch({
        type: AppConstants.actions.ADD_MEDICATION
    })
};
export const addVital = (dispatch) => {
    console.log('Adding Vital');
    return dispatch({
        type: AppConstants.actions.ADD_VITAL
    });
};
export const switchTab = (dispatch, tab) => {
    console.log(tab);
    return dispatch({
        type: AppConstants.actions.SWITCH_TAB,
        activeTab: tab
    });
};
export const onChangeAllergyName = (dispatch, name) => {
    console.log('allergy name :' + name);
    return dispatch({
        type: AppConstants.actions.CHANGE_ALLERGY_NAME,
        allergyName: name
    });
};
export const onChangeAllergen = (dispatch, allergen) => {
    console.log('allergen: ' + allergen);
    return dispatch({
        type: AppConstants.actions.CHANGE_ALLERGEN,
        allergen: allergen
    });
};
export const onChangeAllergyEffect = (dispatch, effect) => {
    console.log('effect: ' + effect);
    return dispatch({
        type: AppConstants.actions.CHANGE_EFFECT,
        effect: effect
    });
};
export const onChangeTreatment = (dispatch, treatment) => {
    console.log('treatment: ' + treatment);
    return dispatch({
        type: AppConstants.actions.CHANGE_TREATMENT,
        treatment: treatment
    });
};

export const editAllergy = (dispatch, id) => {
    console.log('editing ' + id);
    return dispatch({
        type: AppConstants.actions.EDIT_ALLERGY,
        id: id
    });
};

export const deleteAllergy = (dispatch, id) => {
    console.log('deleting');
    return dispatch({
        type: AppConstants.actions.DELETE_ALLERGY,
        id: id
    });
};
export const updateAllergy = (dispatch) => {
    console.log('updating');
    return dispatch({
        type: AppConstants.actions.UPDATE_ALLERGY,
    });
};

export const onChangeConditionName = (dispatch, conditionName) => {
    return dispatch({
        type: AppConstants.actions.CHANGE_CONDITION_NAME,
        conditionName: conditionName
    });
};

export const onChangeDiagDate = (dispatch, diagDate) => {
    console.log(diagDate);
    return dispatch({
        type: AppConstants.actions.CHANGE_DIAG_DATE,
        diagnosedDate: diagDate
    });

};
export const onChangeMeds = (dispatch, medicines) => {
    return dispatch({
        type: AppConstants.actions.CHANGE_MEDICATION,
        medicines: medicines
    });
};

export const editCondition = (dispatch, id) => {
    return dispatch({
        type: AppConstants.actions.EDIT_CONDITION,
        id: id
    });
};
export const deleteCondition = (dispatch, id) => {
    return dispatch({
        type: AppConstants.actions.DELETE_CONDITION,
        id: id
    });
};
export const updateCondition = (dispatch) => {
    return dispatch({
        type: AppConstants.actions.UPDATE_CONDITION
    });
};

export const updateMedication = (dispatch) => {
    return dispatch({
        type: AppConstants.actions.UPDATE_MEDICATION
    })
};

export const deleteMedication = (dispatch, id) => {
    return dispatch({
        type: AppConstants.actions.DELETE_MEDICATION,
        id: id
    })
};
export const onChangeMedName = (dispatch, name) => {
    return dispatch({
        type: AppConstants.actions.CHANGE_MEDNAME,
        name: name
    })
};

export const editMedication = (dispatch, id) => {
    return dispatch({
        type: AppConstants.actions.EDIT_MEDICATION,
        id: id
    })
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

export const onChangeHeight = (dispatch, height) => {
    return dispatch({
        type: AppConstants.actions.CHANGE_H,
        height: height
    });
};

export const onChangeWeight = (dispatch, weight) => {
    return dispatch({
        type: AppConstants.actions.CHANGE_W,
        weight: weight
    });
};

export const onChangeBMI = (dispatch, bmi) => {
    return dispatch({
        type: AppConstants.actions.CHANGE_BMI,
        bmi: bmi
    });
};

export const updateField = (dispatch, field) => {
    return dispatch({
        type: AppConstants.actions.UPDATE_VITALS,
        field: field
    })
};

export const editField = (dispatch, field) => {
    return dispatch({
        type: AppConstants.actions.EDIT_VITAL,
        field: field
    })
};

export const toggleButtonState = (dispatch) => {
    return dispatch({
        type: AppConstants.actions.TOGGLE_BTN_STATE
    })
};

export const findAllPatients = (dispatch) => {
    return fetch('http://localhost:8080/api/patients')
        .then((response) => (response.json()))
        .then((patients => {
            console.log(patients);
            dispatch({
                type: AppConstants.actions.FIND_ALL_P,
                patients: patients
            })
        }))
};

export const setPatient = (dispatch, patientId) => {
    return fetch('http://localhost:8080/api/patient/' + patientId)
        .then(response => response.json())
        .then(patient => {
            console.log(patient);
            dispatch({
                type: AppConstants.actions.SET_PATIENT,
                patient: patient
            })
        })
};