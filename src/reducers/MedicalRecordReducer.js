import {AppConstants as CONST} from '../constants/AppConstants'

const reducerMedicalRecord = (state = {
    curPatient: {medicalRecord: {medicalConditions: [], allergies: [], vitals: {}, medicine: []}, doctors: []},
    patients: [],
    init: true,
    allergies: [],
    conditions: [],
    vitals: {},
    bodyTemperature: '',
    bloodPressure: '',
    bmi: '',
    pulseRate: '',
    medications: [],
    newMR: {},
    curDoctor: {},
    activeTab: 'allergies',
    isEdit: false,
    allergyId: '',
    conditionId: '',
    medicationId: '',
    allergyName: '',
    allergen: '',
    effect: '',
    treatment: '',
    conditionName: '',
    diagnosedDate: '',
    medicines: '',
    name: '',
    weight: '',
    height: '',
    isEditBT: false,
    isEditBP: false,
    isEditPR: false,
    isEditBMI: false,
    isEditW: false,
    isEditH: false,
    isToggle: false,
    isEditAllergy: false,
    isEditCondition: false,
    isEditMedication: false,
    isEditVitals: false

}, action) => {
    let autoIncrementIdConditions = state.conditions.length * 10;
    let autoIncrementIdAllergies = state.allergies.length * 10;
    let autoIncrementIdMedications = state.medications.length * 10;

    let modifiedState;
    switch (action.type) {
        case CONST.actions.ADD_ALLERGY: {
            modifiedState = Object.assign({}, state);
            modifiedState.isEdit = true;
            modifiedState.allergies = [...modifiedState.allergies, {
                id: autoIncrementIdAllergies + 3,
                name: 'Name',
                allergen: 'Allergen',
                effect: 'Effect',
                treatment: 'Treatment'
            }];
            modifiedState.newMR.allergies = modifiedState.allergies;
            console.log(modifiedState);
            return modifiedState;
        }
        case CONST.actions.ADD_CONDITION: {
            modifiedState = Object.assign({}, state);
            modifiedState.isEdit = true;
            let date = new Date().toUTCString();
            modifiedState.conditions = [...modifiedState.conditions, {
                id: autoIncrementIdConditions + 3,
                conditions: 'Condition',
                diagnosedDate: 'MM-dd-yyyy',
                medicine: 'Medication'
            }];
            modifiedState.newMR.conditions = modifiedState.conditions;
            return modifiedState;
        }
        case CONST.actions.ADD_VITAL: {
            modifiedState = Object.assign({}, state);
            modifiedState.isEdit = true;
            modifiedState.vitals = {
                bodyTemprature: 'Body Temperature',
                bloodPressure: 'Blood Pressure',
                bmi: 'BMI',
                pulseRate: 'Pulse Rate'
            };
            modifiedState.newMR.vitals = modifiedState.vitals;
            return modifiedState;
        }
        case CONST.actions.ADD_MEDICATION: {
            modifiedState = Object.assign({}, state);
            modifiedState.isEdit = true;
            modifiedState.medications = [...modifiedState.medications, {
                id: autoIncrementIdMedications + 3,
                name: 'Name'
            }];
            return modifiedState;
        }
        case CONST.actions.SWITCH_TAB: {
            modifiedState = Object.assign({}, state);
            modifiedState.activeTab = action.activeTab;
            console.log(modifiedState.activeTab);
            return modifiedState;
        }
        case CONST.actions.CHANGE_ALLERGY_NAME: {
            modifiedState = Object.assign({}, state);
            modifiedState.allergyName = action.allergyName;
            return modifiedState
        }

        case CONST.actions.CHANGE_ALLERGEN: {
            modifiedState = Object.assign({}, state);
            modifiedState.allergen = action.allergen;
            return modifiedState
        }

        case CONST.actions.CHANGE_EFFECT: {
            modifiedState = Object.assign({}, state);
            modifiedState.effect = action.effect;
            return modifiedState
        }

        case CONST.actions.CHANGE_TREATMENT: {
            modifiedState = Object.assign({}, state);
            modifiedState.treatment = action.treatment;
            return modifiedState
        }
        case CONST.actions.EDIT_ALLERGY : {
            modifiedState = Object.assign({}, state);
            let id = action.id;
            if (id !== '' && id !== undefined) {
                modifiedState.allergyId = id;
                modifiedState.allergies.map((a, i) => {
                    if (a.id === id) {
                        console.log(a);
                        modifiedState.allergyName = a.name;
                        modifiedState.allergen = a.allergen;
                        modifiedState.effect = a.effect;
                        modifiedState.treatment = a.treatment;
                    }
                })
            }
            return modifiedState;
        }
        case CONST.actions.UPDATE_ALLERGY: {
            modifiedState = Object.assign({}, state);
            let id = modifiedState.allergyId;
            let als = [];
            console.log(id);
            let index;
            if (id !== '' && id !== undefined && modifiedState.allergies.length > 0) {
                modifiedState.allergies.map((a, i) => {
                    if (a.id === id) {
                        index = i;
                    }
                    als.push(a);
                });
                if (index == undefined) {
                    als[index].name = modifiedState.allergyName;
                    als[index].allergen = modifiedState.allergen;
                    als[index].effect = modifiedState.effect;
                    als[index].treatment = modifiedState.treatment;
                    console.log(als);
                    modifiedState.allergies = als;
                    modifiedState.allergyId = '';
                    modifiedState.allergyName = '';
                    modifiedState.allergen = '';
                    modifiedState.effect = '';
                    modifiedState.treatment = '';
                    console.log(modifiedState);
                } else {
                    alert("I guess you deleted that row.")
                }
            } else {
                modifiedState.allergyId = '';
                alert('Please select a row to edit');
            }
            return modifiedState
        }
        case CONST.actions.DELETE_ALLERGY: {
            modifiedState = Object.assign({}, state);
            let id = action.id;
            let als = [];
            if (id !== '' && id !== undefined) {
                modifiedState.allergies.map((a, i) => {
                    als.push(a);
                });
                als = als.filter((a, i) => (
                    a.id !== id
                ));

                modifiedState.allergies = als;
                console.log(modifiedState);
            }
            return modifiedState;
        }
        case CONST.actions.CHANGE_CONDITION_NAME: {
            modifiedState = Object.assign({}, state);
            modifiedState.conditionName = action.conditionName;
            return modifiedState;
        }

        case CONST.actions.CHANGE_DIAG_DATE: {
            modifiedState = Object.assign({}, state);
            modifiedState.diagnosedDate = action.diagnosedDate;
            return modifiedState;

        }

        case CONST.actions.CHANGE_MEDICATION: {
            modifiedState = Object.assign({}, state);
            modifiedState.medicines = action.medicines;
            return modifiedState;
        }

        case CONST.actions.EDIT_CONDITION: {
            modifiedState = Object.assign({}, state);
            let id = action.id;
            if (id !== '' && id !== undefined) {
                modifiedState.conditionId = id;
                modifiedState.conditions.map((a, i) => {
                    if (a.id === id) {
                        console.log(a);
                        modifiedState.conditionName = a.conditions;
                        modifiedState.diagnosedDate = a.diagnosedDate;
                        modifiedState.medicines = a.medicine;
                    }
                })
            }
            return modifiedState;
        }
        case CONST.actions.DELETE_CONDITION: {
            modifiedState = Object.assign({}, state);
            let id = action.id;
            let als = [];
            if (id !== '' && id !== undefined) {
                modifiedState.conditions.map((a, i) => {
                    als.push(a);
                });
                als = als.filter((a, i) => (
                    a.id !== id
                ));

                modifiedState.conditions = als;
                console.log(modifiedState);
            }
            return modifiedState;
        }
        case CONST.actions.UPDATE_CONDITION: {
            modifiedState = Object.assign({}, state);
            let id = modifiedState.conditionId;
            let als = [];
            console.log(id);
            let index;
            if (id !== '' && id !== undefined && modifiedState.conditions.length > 0) {
                modifiedState.conditions.map((a, i) => {
                    if (a.id === id) {
                        index = i;
                    }
                    als.push(a);
                });
                if (index !== undefined) {
                    als[index].condition = modifiedState.conditionName;
                    als[index].diagnosedDate = modifiedState.diagnosedDate;
                    als[index].medicines = modifiedState.medicines;
                    console.log(als);
                    modifiedState.conditions = als;
                    modifiedState.conditionId = '';
                    modifiedState.conditionName = '';
                    modifiedState.diagnosedDate = new Date();
                    modifiedState.medicines = '';
                    console.log(modifiedState);
                } else {
                    alert('I guess you deleted that row');
                }
            } else {
                modifiedState.conditionId = '';
                alert('Please select a row to edit');
            }
            return modifiedState;
        }
        case CONST.actions.CHANGE_MEDNAME: {
            modifiedState = Object.assign({}, state);
            modifiedState.name = action.name;
            return modifiedState;
        }
        case CONST.actions.EDIT_MEDICATION: {
            modifiedState = Object.assign({}, state);
            let id = action.id;
            if (id !== '' && id !== undefined) {
                modifiedState.medicationId = id;
                modifiedState.medications.map((a, i) => {
                    if (a.id === id) {
                        console.log(a);
                        modifiedState.name = a.name;
                    }
                })
            }
            return modifiedState;
        }
        case CONST.actions.UPDATE_MEDICATION: {
            modifiedState = Object.assign({}, state);
            let id = modifiedState.medicationId;
            let als = [];
            console.log(id);
            let index;
            if (id !== '' && id !== undefined && modifiedState.medications.length > 0) {
                modifiedState.medications.map((a, i) => {
                    if (a.id === id) {
                        index = i;
                    }
                    als.push(a);
                });
                if (index !== undefined) {
                    als[index].name = modifiedState.name;
                    console.log(als);
                    modifiedState.medications = als;
                    console.log(modifiedState);
                } else {
                    alert("You wish!");
                }
            } else {
                modifiedState.medicationId = '';
                alert('Please select a row to edit');
            }
            return modifiedState
        }
        case CONST.actions.DELETE_MEDICATION: {
            modifiedState = Object.assign({}, state);
            let id = action.id;
            let als = [];
            if (id !== '' && id !== undefined) {
                modifiedState.medications.map((a, i) => {
                    als.push(a);
                });
                als = als.filter((a, i) => (
                    a.id !== id
                ));

                modifiedState.medications = als;
                console.log(modifiedState);
            }
            return modifiedState;
        }
        case CONST.actions.CHANGE_W: {
            modifiedState = Object.assign({}, state);
            modifiedState.weight = action.weight;
            return modifiedState;
        }
        case CONST.actions.CHANGE_H: {
            modifiedState = Object.assign({}, state);
            modifiedState.height = action.height;
            return modifiedState;
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
        case CONST.actions.UPDATE_VITALS: {
            modifiedState = Object.assign({}, state);
            switch (action.field) {
                case 'bt': {
                    modifiedState.isEditBT = false;
                    return modifiedState;
                }
                case 'bp': {
                    modifiedState.isEditBP = false;
                    return modifiedState;
                }
                case 'pr': {
                    modifiedState.isEditPR = false;
                    return modifiedState;
                }
                case 'bmi': {
                    modifiedState.isEditBMI = false;
                    return modifiedState;
                }
                case 'w': {
                    modifiedState.isEditW = false;
                    return modifiedState;
                }
                case 'h': {
                    modifiedState.isEditH = false;
                    return modifiedState;
                }
            }
            return modifiedState;

        }
        case CONST.actions.EDIT_VITAL: {
            modifiedState = Object.assign({}, state);
            switch (action.field) {
                case 'bt': {
                    modifiedState.isEditBT = true;
                    return modifiedState;
                }
                case 'bp': {
                    modifiedState.isEditBP = true;
                    return modifiedState;
                }
                case 'pr': {
                    modifiedState.isEditPR = true;
                    return modifiedState;
                }
                case 'bmi': {
                    modifiedState.isEditBMI = true;
                    return modifiedState;
                }
                case 'w': {
                    modifiedState.isEditW = true;
                    return modifiedState;
                }
                case 'h': {
                    modifiedState.isEditH = true;
                    return modifiedState;
                }
            }
            return modifiedState;
        }
        case CONST.actions.TOGGLE_BTN_STATE: {
            modifiedState = Object.assign({}, state);
            if (state.isToggle) {
                let conds = [];
                let als = [];
                let meds = [];
                modifiedState.allergies.map((a, i) => {
                    als.push({
                        name: a.name,
                        allergen: a.allergen,
                        effect: a.effect,
                        treatment: a.treatment
                    })
                });
                modifiedState.conditions.map((c, i) => {
                    conds.push({
                        conditions: c.conditions,
                        diagnosedDate: c.diagnosedDate,
                        medicine: c.medicine
                    })
                });
                modifiedState.medications.map((m, i) => {
                    meds.push({
                        name: m.name
                    })
                });
                console.log(conds);
                let conditions = modifiedState.conditions;
                let allergies = modifiedState.allergies;
                let medicine = modifiedState.medications;
                let doctor = JSON.parse(localStorage.getItem('user'));
                console.log(doctor);
                let doctors = [];
                if (modifiedState.curPatient.doctors !== undefined && modifiedState.curPatient.doctors.length > 0) {
                    doctors = modifiedState.curPatient.doctors.filter((d) => (
                        d.id !== doctor.id
                    ));
                }
                doctors = [...doctors, doctor];
                let medicalRecord = {
                    medicalConditions: conds,
                    allergies: als,
                    medicine: meds,
                    doctor: doctor,
                    vitals: {
                        bodyTemperature: modifiedState.bodyTemperature,
                        bloodPressure: modifiedState.bloodPressure,
                        pulseRate: modifiedState.pulseRate,
                        BMI: modifiedState.bmi
                    }
                };
                modifiedState.curPatient.medicalRecord = medicalRecord;
                modifiedState.curPatient.doctors = doctors;
                // fetch('http://localhost:8080/api/patient/' + modifiedState.curPatient.id + '/mr/' + doctor.id, {
                //     method: 'POST',
                //     body: JSON.stringify(modifiedState.curPatient),
                //     headers: {
                //         'content-type': 'application/json'
                //     }
                // }).then(response => response.json())
                //     .then(patient => {
                //         console.log(patient);
                //     });
                console.log(modifiedState.curPatient);
                modifiedState.isToggle = !state.isToggle;
                modifiedState.isEditAllergy = !state.isEditAllergy;
                modifiedState.isEditCondition = !state.isEditCondition;
                modifiedState.isEditMedication = !state.isEditMedication;
                modifiedState.isEditVitals = !state.isEditVitals;
                return modifiedState

            } else {
                modifiedState.isToggle = !state.isToggle;
                modifiedState.isEditAllergy = !state.isEditAllergy;
                modifiedState.isEditCondition = !state.isEditCondition;
                modifiedState.isEditMedication = !state.isEditMedication;
                modifiedState.isEditVitals = !state.isEditVitals;
            }


            return modifiedState
        }

        case CONST.actions.FIND_ALL_P: {
            modifiedState = Object.assign({}, state);
            modifiedState.patients = action.patients;
            modifiedState.init = false;
            return modifiedState;
        }
        case CONST.actions.SET_PATIENT: {
            modifiedState = Object.assign({}, state);
            modifiedState.curPatient = action.patient;
            if (modifiedState.curPatient.medicalRecord != null) {
                modifiedState.conditions = modifiedState.curPatient.medicalRecord.medicalConditions;
                modifiedState.allergies = modifiedState.curPatient.medicalRecord.allergies;
                modifiedState.medications = modifiedState.curPatient.medicalRecord.medicine;
                modifiedState.bodyTemperature = modifiedState.curPatient.medicalRecord.vitals.bodyTemperature;
                modifiedState.bloodPressure = modifiedState.curPatient.medicalRecord.vitals.bloodPressure;
                modifiedState.pulseRate = modifiedState.curPatient.medicalRecord.vitals.pulseRate;
                modifiedState.bmi = modifiedState.curPatient.medicalRecord.vitals.BMI;
                console.log(modifiedState);
            }
            return modifiedState
        }
        case CONST.actions.UPDATE_M_RECORD: {
            console.log('updating');
            return modifiedState
        }

        default:
            return state;
    }
};

export default reducerMedicalRecord;