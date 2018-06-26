import * as constants from '../constants/AppConstants'

const reducerLogin = (state = {
    loginUser: {username: '', password: ''},
    role: 'Doctor',
    localUser: {}
}, action) => {
    let modifiedState;
    switch (action.type) {

        case constants.LOGIN_USERNAME_CHANGED: {
            modifiedState = Object.assign({}, state);
            modifiedState.loginUser.username = action.lUsername;
            return modifiedState
        }

        case constants.LOGIN_PASSWORD_CHANGED: {
            modifiedState = Object.assign({}, state);
            modifiedState.loginUser.password = action.lPassword;
            return modifiedState
        }

        case constants.LOGIN_ROLE_CHANGED: {
            modifiedState = Object.assign({}, state);
            modifiedState.role = action.lRole;
            return modifiedState
        }

        case constants.LOGIN: {
            modifiedState = Object.assign({}, state);
            modifiedState.loginUser = action.user;
            localStorage.setItem('user', JSON.stringify(action.user));
            console.log(modifiedState);
            return modifiedState;
        }
        default:
            return state;
    }

};

export default reducerLogin;