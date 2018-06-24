import * as constants from '../constants/AppConstants'

const reducerLogin = (state = {
    loginUser: {username:'', password:''},
    role: 'Doctor',
    localUser:{}
}, action) => {
    let modifiedState;
    switch (action.type) {

        case constants.LOGIN_USERNAME_CHANGED : {
            modifiedState = Object.assign({}, state);
            modifiedState.loginUser.username = action.lUsername;
            return modifiedState
        }
        
        case constants.LOGIN_PASSWORD_CHANGED : {
            modifiedState = Object.assign({}, state);
            modifiedState.loginUser.password = action.lPassword;
            return modifiedState
        }

       

        case constants.LOGIN_ROLE_CHANGED : {
            modifiedState = Object.assign({}, state);
            modifiedState.role = action.lRole;
            return modifiedState
        }

        case constants.LOGIN : {
            if (state.role === "Doctor") {
                if((state.loginUser.username !== undefined && state.loginUser.username !== "") &&
                (state.loginUser.password !== undefined && state.loginUser.password !== "")
             ){
                fetch('http://localhost:8080/api/findDoctorByCredentials/doctor', {
                    method: 'post',
                    body: JSON.stringify(state.loginUser),
                    headers: {
                        'content-type': 'application/json'
                    }
                }).then(response => (response.json()))
                 .then(doctor => {
                    modifiedState = Object.assign({}, state);
                    modifiedState.loginUser = doctor;
                     localStorage.setItem('modifiedState.loginUser', JSON.stringify(modifiedState.loginUser));

                     // to retrieve the object stored in local storage
                     modifiedState.localUser = localStorage.getItem('modifiedState.loginUser');
                     alert('Logged in successfully!');
                     return modifiedState;
                     
                 })
            }
            else{
                alert("Please fill all fields!!");
                return state;
            }
        }
            if (state.role === "Patient") {
                if((state.loginUser.username !== undefined && state.loginUser.username !== "") &&
                (state.loginUser.password !== undefined && state.loginUser.password !== "")
             ){
                fetch('http://localhost:8080/api/findPatientByCredentials/patient', {
                    method: 'post',
                    body: JSON.stringify(state.loginUser),
                    headers: {
                        'content-type': 'application/json'
                    }
                }).then(response => (response.json()))
                .then(patient => {
                   modifiedState = Object.assign({}, state);
                   
                   modifiedState.loginUser = patient;
                    localStorage.setItem('modifiedState.loginUser', JSON.stringify(modifiedState.loginUser));
                    modifiedState.localUser = localStorage.getItem('modifiedState.loginUser');
                    // to retrieve the object stored in local storage
                    //var retrievedObject = localStorage.getItem('modifiedState.user');
                    //console.log('retrievedObject: ', JSON.parse(retrievedObject));
                    alert('Logged in successfully!');
                    return modifiedState;
                    
                })

            }
            else{
                alert("Please fill all fields!!");
                return state;
            }
        }
        }
        default:
            return state;
    }

};

export default reducerLogin;