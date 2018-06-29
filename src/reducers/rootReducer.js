import {combineReducers} from 'redux'
import reducerTrials from './TrialsReducer'
import reducerRegister from './RegisterReducer'
import reducerLogin from './LoginReducer'
import reducerProfile from './PatientProfileReducer'
import reducerAdmin from './AdminReducer'
import reducerAdminUpdateProfileDoctor from './AdminUpdateProfileDoctorReducer'
import reducerAdminUpdatePatientProfile from './AdminUpdatePatientProfileReducer'
import reducerDoctorProfile from './DoctorProfileReducer'
import reducerRecordViewer from './RecordviewerReducer'

const rootReducer = combineReducers({
    trialsReducer: reducerTrials,
    registerReducer: reducerRegister,
    loginReducer: reducerLogin,
    patientProfileReducer: reducerProfile,
    adminReducer: reducerAdmin,
    adminUpdateProfileDoctorReducer: reducerAdminUpdateProfileDoctor,
    adminUpdatePatientProfileReducer: reducerAdminUpdatePatientProfile,
    doctorProfileReducer: reducerDoctorProfile,
    medicalRecordReducer: reducerRecordViewer
});

export default rootReducer