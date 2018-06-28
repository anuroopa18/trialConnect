import * as constants from '../constants/AppConstants'

const reducerAdmin = (state = {
    doctors: [],
    patients: [],
    user: { firstName: '', lastName: '', username: '', password: '' },
    role: 'Doctor',
    records:[]

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
        
        case constants.FIND_RECORDS:{
            modifiedState = Object.assign({}, state);
            modifiedState.records = action.records;
            return modifiedState
        }

        case constants.ADMIN_FIRST_NAME_CHANGED: {
            modifiedState = Object.assign({}, state);
            modifiedState.user.firstName = action.firstName;
            return modifiedState
        }

        case constants.ADMIN_LAST_NAME_CHANGED: {
            modifiedState = Object.assign({}, state);
            modifiedState.user.lastName = action.lastName;
            return modifiedState
        }

        case constants.ADMIN_PASSWORD_CHANGED: {
            modifiedState = Object.assign({}, state);
            modifiedState.user.password = action.password;
            return modifiedState
        }

        case constants.ADMIN_USER_NAME_CHANGED: {
            modifiedState = Object.assign({}, state);
            modifiedState.user.username = action.username;
            return modifiedState
        }

        case constants.ADMIN_ROLE_CHANGED: {
            modifiedState = Object.assign({}, state);
            modifiedState.role = action.role;
            return modifiedState
        }

       

        default:
            return state;
    }

};

export default reducerAdmin;