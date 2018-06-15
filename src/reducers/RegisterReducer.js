import * as constants from '../constants/AppConstants'

const reducerRegister = (state = {
    trials: [],
    message: '',
    init: true,
    user: {firstName: '', lastName: '', username: '', password: ''},
    role: ''
}, action) => {
    let modifiedState;
    switch (action.type) {
        case constants.FIRST_NAME_CHANGED : {
            modifiedState = Object.assign({}, state);
            modifiedState.user.firstName = action.firstName;
            return modifiedState
        }

        case constants.LAST_NAME_CHANGED : {
            modifiedState = Object.assign({}, state);
            modifiedState.user.lastName = action.lastName;
            return modifiedState
        }

        case constants.PASSWORD_CHANGED : {
            modifiedState = Object.assign({}, state);
            modifiedState.user.password = action.password;
            return modifiedState
        }

        case constants.USER_NAME_CHANGED : {
            modifiedState = Object.assign({}, state);
            modifiedState.user.username = action.username;
            return modifiedState
        }

        case constants.ROLE_CHANGED : {
            modifiedState = Object.assign({}, state);
            modifiedState.role = action.role;
            return modifiedState
        }

        case constants.REGISTER : {
            if (state.role === "Doctor") {
                fetch('http://localhost:8080/api/doctor', {
                    method: 'post',
                    body: JSON.stringify(state.user),
                    headers: {
                        'content-type': 'application/json'
                    }
                }).then(response => {
                    if (response.ok) {
                        alert("Registered successfully");
                    } else {
                        alert("Some error occurred!");
                    }
                })

            }
            if (state.role === "Patient") {
                fetch('http://localhost:8080/api/patient', {
                    method: 'post',
                    body: JSON.stringify(state.user),
                    headers: {
                        'content-type': 'application/json'
                    }
                }).then(response => {
                    if (response.ok) {
                        alert("Registered successfully");
                    } else {
                        alert("Some error occurred!");
                    }
                })

            }
        }
        default:
            return state;
    }

};

export default reducerRegister;