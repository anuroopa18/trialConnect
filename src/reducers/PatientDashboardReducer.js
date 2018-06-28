import * as constants from '../constants/AppConstants'

const reducerPatientDashBoard = (state = {
    username:'',
    patient:{}

}, action) => {
    let modifiedState;
    switch (action.type) {

        case constants.FIND_PATIENT_BY_USERNAME:
        {
            modifiedState = Object.assign({}, state);
            modifiedState.patient = action.patient;
            console.log(modifiedState);
            console.log(action);
            return modifiedState;
        }
        
        default:
            return state;
    }

};

export default reducerPatientDashBoard;