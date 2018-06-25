import * as constants from '../constants/AppConstants'

const reducerPatientProfile = (state = {
    updatedUser :{ firstName: '', lastName: '', password: '', email: '', phone: '' }
   
}, action) => {
    let modifiedState;
    switch (action.type) {
        case constants.PROFILE_FIRST_NAME_CHANGED: {
            modifiedState = Object.assign({}, state);
            modifiedState.updatedUser.firstName = action.firstName;
            return modifiedState
        }

        case constants.PROFILE_LAST_NAME_CHANGED: {
            modifiedState = Object.assign({}, state);
            modifiedState.updatedUser.lastName = action.lastName;
            return modifiedState
        }

        case constants.PROFILE_PASSWORD_CHANGED: {
            modifiedState = Object.assign({}, state);
            modifiedState.updatedUser.password = action.password;
            return modifiedState
        }


        case constants.PROFILE_PHONE_CHANGED: {
            modifiedState = Object.assign({}, state);
            modifiedState.updatedUser.phone = action.phone;
            return modifiedState
        }

        case constants.PROFILE_EMAIL_CHANGED: {
            modifiedState = Object.assign({}, state);
            modifiedState.updatedUser.email = action.email;
            return modifiedState
        }

        case constants.UPDATE: {


            if ((state.user.firstName !== undefined && state.user.firstName !== "") &&
                (state.user.lastName !== undefined && state.user.lastName !== "") &&
                (state.user.password !== undefined && state.user.password !== "") &&
                (state.user.email !== undefined && state.user.email !== "") &&
                (state.user.phone !== undefined && state.user.phone !== "")
            ) {
                fetch('http://localhost:8080/api/patient/' + action.patientId, {
                    method: 'put',
                    body: JSON.stringify(state.user),
                    headers: {
                        'content-type': 'application/json'
                    }
                }).then(response => (response.json()))
                    .then(patient => {
                        modifiedState = Object.assign({}, state);
                        modifiedState.updatedUser = patient;
                        localStorage.setItem('modifiedState.loginUser', JSON.stringify(modifiedState.user));
                        alert('Updated successfully!');
                        return modifiedState;
                    })
            }



        }

        case constants.FIND_UPDATED_USER: {
            
                modifiedState = Object.assign({}, state);
                modifiedState.updatedUser = action.patient;
                return modifiedState;
        }


        default:
            return state;
    }

};

export default reducerPatientProfile;