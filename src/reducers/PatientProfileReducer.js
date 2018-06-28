import {AppConstants} from "../constants/AppConstants";

const reducerProfile = (state = {
    user: {},
    init: true,
    firstName: '',
    lastName: '',
    phone: '',
    password: '',
    email: '',
    username:'',
    age:'',
    gender:'',
    height:'',
    weight:''
}, action) => {
    let modifiedState;
    switch (action.type) {
        case AppConstants.actions.SET_USER: {
            modifiedState = Object.assign({}, state);
            modifiedState.user = action.user;
            modifiedState.firstName = action.user.firstName;
            modifiedState.lastName = action.user.lastName;
            modifiedState.email = action.user.email;
            modifiedState.phone = action.user.phone;
            modifiedState.password = action.user.password;
            modifiedState.username = action.user.username;
            modifiedState.age = action.user.age;
            modifiedState.gender = action.user.gender;
            modifiedState.height = action.user.height;
            modifiedState.weight = action.user.weight;
            modifiedState.init = false;
            console.log(modifiedState);
            return modifiedState;

        }
        case AppConstants.actions.PROFILE_FIRSTNAME: {
            modifiedState = Object.assign({}, state);
            modifiedState.firstName = action.firstName;
            console.log(modifiedState);
            return modifiedState;
        }
        case AppConstants.actions.PROFILE_LASTNAME: {
            modifiedState = Object.assign({}, state);
            modifiedState.lastName = action.lastName;
            return modifiedState
        }

        case AppConstants.actions.PROFILE_PW: {
            modifiedState = Object.assign({}, state);
            modifiedState.password = action.password;
            return modifiedState
        }


        case AppConstants.actions.PROFILE_PHONE: {
            modifiedState = Object.assign({}, state);
            modifiedState.phone = action.phone;
            return modifiedState
        }

        case AppConstants.actions.PROFILE_AGE: {
            modifiedState = Object.assign({}, state);
            modifiedState.age = action.age;
            return modifiedState
        }

        case AppConstants.actions.PROFILE_GENDER: {
            modifiedState = Object.assign({}, state);
            modifiedState.gender = action.gender;
            return modifiedState
        }
        case AppConstants.actions.PROFILE_HEIGHT: {
            modifiedState = Object.assign({}, state);
            modifiedState.height = action.height;
            return modifiedState
        }
        case AppConstants.actions.PROFILE_WEIGHT: {
            modifiedState = Object.assign({}, state);
            modifiedState.weight = action.weight;
            return modifiedState
        }

        case AppConstants.actions.PROFILE_EMAIL: {
            modifiedState = Object.assign({}, state);
            modifiedState.email = action.email;
            return modifiedState
        }
        case AppConstants.actions.PROFILE_UPDATE: {
            console.log(state.user);
            modifiedState = Object.assign({}, state);
            modifiedState.user = action.user;
            return modifiedState;
        }
        default:
            return state;
    }
};

export default reducerProfile;