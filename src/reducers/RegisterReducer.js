import * as constants from '../constants/AppConstants'

const reducerRegister = (state = {
    user: { firstName: '', lastName: '', username: '', password: '' },
    role: 'Doctor'
}, action) => {
    let modifiedState;
    switch (action.type) {
        case constants.FIRST_NAME_CHANGED: {
            modifiedState = Object.assign({}, state);
            modifiedState.user.firstName = action.firstName;
            return modifiedState
        }

        case constants.LAST_NAME_CHANGED: {
            modifiedState = Object.assign({}, state);
            modifiedState.user.lastName = action.lastName;
            return modifiedState
        }

        case constants.PASSWORD_CHANGED: {
            modifiedState = Object.assign({}, state);
            modifiedState.user.password = action.password;
            return modifiedState
        }

        case constants.USER_NAME_CHANGED: {
            modifiedState = Object.assign({}, state);
            modifiedState.user.username = action.username;
            return modifiedState
        }

        case constants.ROLE_CHANGED: {
            modifiedState = Object.assign({}, state);
            modifiedState.role = action.role;
            return modifiedState
        }

        case constants.REGISTER: {

            if (state.role === "Doctor") {
                if ((state.user.firstName !== undefined && state.user.firstName !== "") &&
                    (state.user.lastName !== undefined && state.user.lastName !== "") &&
                    (state.user.username !== undefined && state.user.username !== "") &&
                    (state.user.password !== undefined && state.user.password !== "")
                ) {
                    fetch('http://localhost:8080/api/doctor', {
                        method: 'post',
                        body: JSON.stringify(state.user),
                        headers: {
                            'content-type': 'application/json'
                        }
                    }).then(response => (response.json()))
                        .then(doctor => {
                            modifiedState = Object.assign({}, state);
                            modifiedState.user = doctor;
                            localStorage.setItem('user', JSON.stringify(doctor));

                            // to retrieve the object stored in local storage
                            //var retrievedObject = localStorage.getItem('modifiedState.user');
                            //console.log('retrievedObject: ', JSON.parse(retrievedObject));
                            alert('Registered successfully!');
                        })
                }
                else {
                    alert("Please fill all the fields!!");
                    return state;
                }
            }
           


            if (state.role === "Patient") {
                if ((state.user.firstName !== undefined && state.user.firstName !== "") &&
                    (state.user.lastName !== undefined && state.user.lastName !== "") &&
                    (state.user.username !== undefined && state.user.username !== "") &&
                    (state.user.password !== undefined && state.user.password !== "")
                ) {
                    fetch('http://localhost:8080/api/patient', {
                        method: 'post',
                        body: JSON.stringify(state.user),
                        headers: {
                            'content-type': 'application/json'
                        }
                    }).then(response => (response.json()))
                        .then(patient => {
                            modifiedState = Object.assign({}, state);
                            modifiedState.user = patient;
                            localStorage.setItem('user', JSON.stringify(modifiedState.user));

                            // to retrieve the object stored in local storage
                            //var retrievedObject = localStorage.getItem('modifiedState.user');
                            //console.log('retrievedObject: ', JSON.parse(retrievedObject));
                            alert('Registered successfully!');
                            return modifiedState;
                        })

                }
                else {
                    alert("Please fill all the fields!!");
                    return state;
                }
            }
            break;
        }
        default:
            return state;
    }

};

export default reducerRegister;