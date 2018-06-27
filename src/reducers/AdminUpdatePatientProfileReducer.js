import * as constants from '../constants/AppConstants'

const reducerAdminUpdatePatientProfile = (state = {

    firstName: '',
    lastName: '',
    password: '',
    email: '',
    phone: '',
    userId: '',
    username: ''


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

        case constants.ADMIN_FIND_PAT: {
            modifiedState = Object.assign({}, state);
            modifiedState.firstName = action.patient.firstName;
            modifiedState.lastName = action.patient.lastName;
            modifiedState.password = action.patient.password;
            modifiedState.email = action.patient.email;
            modifiedState.phone = action.patient.phone;
            modifiedState.username = action.patient.username;
            return modifiedState
        }

        case constants.ADMIN_UPDATE_PAT: {
            if ((state.firstName !== undefined && state.firstName !== "") &&
                (state.lastName !== undefined && state.lastName !== "") &&
                (state.password !== undefined && state.password !== "") &&
                (state.email !== undefined && state.email !== "") &&
                (state.phone !== undefined && state.phone !== "")
            ) {
                const user = {
                    firstName: state.firstName,
                    lastName: state.lastName,
                    password: state.password,
                    email: state.email,
                    phone: state.phone
                };
                fetch('http://localhost:8080/api/patient/' + action.patId, {
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