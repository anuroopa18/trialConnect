import {combineReducers} from 'redux'
import reducerTrials from './TrialsReducer'
import reducerRegister from './RegisterReducer'
import reducerLogin from './LoginReducer'
import reducerPatientProfile from './PatientProfileReducer'
import reducerAdmin from './AdminReducer'

const rootReducer = combineReducers({
    trialsReducer: reducerTrials,
    registerReducer: reducerRegister,
    loginReducer: reducerLogin,
    patientProfileReducer: reducerPatientProfile,
    adminReducer: reducerAdmin
});

export default rootReducer