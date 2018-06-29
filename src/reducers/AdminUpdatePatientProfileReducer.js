import * as constants from '../constants/AppConstants'

const reducerAdminUpdatePatientProfile = (state = {

    firstName: '',
    lastName: '',
    password: '',
    email: '',
    phone: '',
    userId: '',
    username: '',
    age: '',
    gender: '',
    height: '',
    weight: ''


}, action) => {
    let modifiedState;
    switch (action.type) {
        case constants.ADMIN_FIRST_NAME_CHANGED_PAT: {
            modifiedState = Object.assign({}, state);
            modifiedState.firstName = action.firstName;
            return modifiedState
        }
        case constants.ADMIN_LAST_NAME_CHANGED_PAT: {
            modifiedState = Object.assign({}, state);
            modifiedState.lastName = action.lastName;
            return modifiedState
        }

        case constants.ADMIN_PASSWORD_CHANGED_PAT: {
            modifiedState = Object.assign({}, state);
            modifiedState.password = action.password;
            return modifiedState
        }

        case constants.ADMIN_EMAIL_CHANGED_PAT: {
            modifiedState = Object.assign({}, state);
            modifiedState.email = action.email;
            return modifiedState
        }

        case constants.ADMIN_PHONE_CHANGED_PAT: {
            modifiedState = Object.assign({}, state);
            modifiedState.phone = action.phone;
            return modifiedState
        }
        case constants.ADMIN_AGE_CHANGED_PAT: {
            modifiedState = Object.assign({}, state);
            modifiedState.age = action.age;
            return modifiedState
        }

        case constants.ADMIN_GENDER_CHANGED_PAT: {
            modifiedState = Object.assign({}, state);
            modifiedState.gender = action.gender;
            return modifiedState
        }
        case constants.ADMIN_HEIGHT_CHANGED_PAT: {
            modifiedState = Object.assign({}, state);
            modifiedState.height = action.height;
            return modifiedState
        }
        case constants.ADMIN_WEIGHT_CHANGED_PAT: {
            modifiedState = Object.assign({}, state);
            modifiedState.weight = action.weight;
            return modifiedState
        }

        case constants.ADMIN_FIND_PAT: {
            modifiedState = Object.assign({}, state);
            modifiedState.firstName = action.patient.firstName;
            modifiedState.lastName = action.patient.lastName;
            modifiedState.password = action.patient.password;
            modifiedState.email = action.patient.email;
            modifiedState.phone = action.patient.phone;
            modifiedState.username = action.patient.username;
            modifiedState.age = action.patient.age;
            modifiedState.gender = action.patient.gender;
            modifiedState.height = action.patient.height;
            modifiedState.weight = action.patient.weight;
            return modifiedState
        }

        case constants.ADMIN_UPDATE_PAT: {
            if ((state.firstName !== undefined && state.firstName !== "") &&
                (state.lastName !== undefined && state.lastName !== "") &&
                (state.password !== undefined && state.password !== "") &&
                (state.email !== undefined && state.email !== "") &&
                (state.phone !== undefined && state.phone !== "") &&
                (state.age !== undefined && state.age !== "") &&
                (state.gender !== undefined && state.gender !== "") &&
                (state.height !== undefined && state.height !== "" && state.height !== null) &&
                (state.weight !== undefined && state.weight !== "" && state.weight !== null)
            ) {
                const user = {
                    firstName: state.firstName,
                    lastName: state.lastName,
                    password: state.password,
                    email: state.email,
                    phone: state.phone,
                    age: state.age,
                    gender: state.gender,
                    weight: state.weight,
                    height: state.height
                };
                fetch('https://tconnect-webapp.herokuapp.com/api/patient/' + action.patId, {
                    method: 'put',
                    body: JSON.stringify(user),
                    headers: {
                        'content-type': 'application/json'
                    }
                }).then(response => (response.json()))
                    .then(patient => {
                        modifiedState = Object.assign({}, state);
                        modifiedState.firstName = patient.firstName;
                        modifiedState.lastName = patient.lastName;
                        modifiedState.password = patient.password;
                        modifiedState.email = patient.email;
                        modifiedState.phone = patient.phone;
                        modifiedState.age = patient.age;
                        modifiedState.gender = patient.gender;
                        modifiedState.height = patient.height;
                        modifiedState.weight = patient.weight;

                        alert('Updated successfully!');
                        return modifiedState;
                    })
            } else {
                alert('Please fill out all the fields');
            }

        }
        default:
            return state;
    }

};

export default reducerAdminUpdatePatientProfile;