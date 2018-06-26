import React from 'react'
import RegisterContainer from './containers/Register'
import TrialContainer from './containers/Trials'
import NavbarContainer from './containers/NavBar'
import LoginContainer from './containers/Login'
import PatientProfileContainer from './containers/PatientProfile'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import AdminContainer from './containers/Admin'
import DashboardContainer from './containers/Dashboard'
import AdminUpdateProfileContainer from './containers/AdminUpdateProfileDoctor'

class App extends React.Component {
    render() {
        return (
            <Router>
                <section>
                    <NavbarContainer/>
                    <section>
                        <Route path='/register' component={RegisterContainer}/>
                        <Route path='/login' component={LoginContainer}/>
                        <Route path='/admin/updateProfile/:userId' component={AdminUpdateProfileContainer}/>
                        <Route exact path='/admin' component={AdminContainer}/>
                        <Route path='/update/patientProfile' component={PatientProfileContainer}/>
                        <section className="container">
                            <Route path='/search/:searchText/results' component={TrialContainer}/>
                        </section>
                        <section>
                            <Route path={'/home/pa/dashboard'} component={DashboardContainer}/>
                        </section>
                    </section>
                </section>
            </Router>
        )
    }
}

export default App
