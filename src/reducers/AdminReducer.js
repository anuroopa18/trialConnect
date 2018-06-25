import * as constants from '../constants/AppConstants'

const reducerAdmin = (state = {
    doctors: [],
    patients: [],
    user: { firstName: '', lastName: '', username: '', password: '' },
    role: 'Doctor'

}, action) => {
    let modifiedState;
    switch (action.type) {
        case constants.FIND_DOCTORS: {
            modifiedState = Object.assign({}, state);
            modifiedState.doctors = action.doctors;
            return modifiedState
        }
        case constants.FIND_PATIENTS: {
            modifiedState = Object.assign({}, state);
            modifiedState.patients = action.patients;
            return modifiedState
        }
        case constants.DELETE_DOCTOR: {
            modifiedState = Object.assign({}, state);
            fetch('http://localhost:8080/api/doctor/' + action.doctorId, {
                method: 'delete'
            })
                .then(response => {
                    alert('Deleted!!!')
                    return modifiedState
                })


        }

        case constants.DELETE_PATIENT: {
            modifiedState = Object.assign({}, state);
            fetch('http://localhost:8080/api/patient/' + action.patientId, {
                method: 'delete'
            })
                .then(response => {
                     alert('Deleted!!!')
                    return modifiedState
                })


        }

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

        case constants.ADD: {

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
                            alert('Added successfully!');
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
                            alert('Added successfully!');
                        })

                }
                else {
                    alert("Please fill all the fields!!");
                    return state;
                }
            }
            
        }

        default:
            return state;
    }

};

export default reducerAdmin;