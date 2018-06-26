import React from 'react'
import RegisterContainer from './containers/Register'
import TrialContainer from './containers/Trials'
import LoginContainer from './containers/Login'
import PatientProfileContainer from './components/Profile/PatientProfile'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import AdminContainer from './containers/Admin'
import DashboardContainer from './containers/Dashboard'
import NavContainer from './components/Navbar/Navbar'
import AdminUpdateProfileContainer from './containers/AdminUpdateProfileDoctor'
import LandingPage from "./containers/LandingPage";
import Footer from './components/Footer/footer'
import AdminUpdatePatientProfileContainer from './containers/AdminUpdateProfilePatient'
import DoctorProfileContainer from './components/Profile/DoctorProfile'

class App extends React.Component {
    render() {
        return (
            <Router>
                <section>
                    <section>
                        <Route exact path='/' component={LandingPage}/>
                        <Route path='/register' component={RegisterContainer}/>
                        <Route path='/login' component={LoginContainer}/>
                        <Route exact path='/admin/updateProfile/:userId' component={AdminUpdateProfileContainer}/>
                        <Route exact path='/admin/updatePatientProfile/:patId' component={AdminUpdatePatientProfileContainer}/>
                        <Route exact path='/admin' component={AdminContainer}/>
                        <Route exact path='/profile/:username' component={PatientProfileContainer}/>
                        <Route exact path='/doctor/profile/:docId' component={DoctorProfileContainer}/>
                        <section className="container">
                            <Route path='/search/:searchText/results' component={TrialContainer}/>
                        </section>
                        <section>
                            <Route path={'/home/:username/dashboard'} component={DashboardContainer}/>
                        </section>
                    </section>
                    <Footer/>
                </section>
            </Router>
        )
    }
}

export default App
