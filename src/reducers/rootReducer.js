import {combineReducers} from 'redux'
import reducerTrials from './TrialsReducer'
import reducerRegister from './RegisterReducer'
import reducerLogin from './LoginReducer'
import reducerProfile from './PatientProfileReducer'
import reducerAdmin from './AdminReducer'
import reducerAdminUpdateProfileDoctor from './AdminUpdateProfileDoctorReducer'

const rootReducer = combineReducers({
    trialsReducer: reducerTrials,
    registerReducer: reducerRegister,
    loginReducer: reducerLogin,
    patientProfileReducer: reducerProfile,
    adminReducer: reducerAdmin,
    adminUpdateProfileDoctorReducer:reducerAdminUpdateProfileDoctor
});

export default rootReducer