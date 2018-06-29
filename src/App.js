import React from 'react'
import RegisterContainer from './containers/Register'
import TrialContainer from './containers/Trials'
import LoginContainer from './containers/Login'
import PatientProfileContainer from './components/Profile/PatientProfile'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import AdminContainer from './containers/Admin'
import DashboardContainer from './containers/Dashboard'
import AdminUpdateProfileContainer from './containers/AdminUpdateProfileDoctor'
import LandingPage from "./containers/LandingPage";
import Footer from './components/Footer/footer'
import AdminUpdatePatientProfileContainer from './containers/AdminUpdateProfilePatient'
import DoctorProfileContainer from './components/Profile/DoctorProfile'
import AboutUsPage from './containers/AboutUsPage'
import ViewTrialInfo from './containers/ViewTrialInfo'
import DoctorDashboardContainer from "./components/Dashboard/DoctorDashboard";
import MedicalRecordFormContainer from "./components/MedicalRecord/MRCreatorV2";

class App extends React.Component {


    render() {
        let role = localStorage.getItem('role');
        let hide = false;
        if (role === null) {
            hide = true;
        }
        return (
            <Router>
                <section>
                    <section id="content">
                        <Route exact path='/' component={LandingPage} />
                        <Route exact path='/aboutUs' component={AboutUsPage} />
                        <Route path='/register' component={RegisterContainer} />
                        <Route path='/login' component={LoginContainer} />
                            <section>
                                <Route exact path='/admin/updateProfile/:userId' component={AdminUpdateProfileContainer} />
                                <Route exact path='/admin/updatePatientProfile/:patId'
                                    component={AdminUpdatePatientProfileContainer} />
                                <Route exact path='/admin' component={AdminContainer} />
                                <Route exact path='/profile/:username' component={PatientProfileContainer} />
                                <Route exact path='/doctor/profile/:docId' component={DoctorProfileContainer} />
                                <Route exact path='/viewTrialInfo/:trialId' component={ViewTrialInfo} />
                                <section>
                                    <Route path={'/home/:username/dashboard'} component={DashboardContainer} />
                                    <Route exact path={'/doctor/dashboard/:username'} component={DoctorDashboardContainer} />
                                    <Route path={'/medRecord/create/:patientId'} component={MedicalRecordFormContainer} />
                                </section>
                            </section>
                        <section>
                            <Route path='/search/:searchText/results' component={TrialContainer} />
                        </section>
                    </section>
                    <Footer />
                </section>
            </Router>
        )
    }
}

export default App
