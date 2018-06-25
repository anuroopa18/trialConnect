import React from 'react'
import RegisterContainer from './containers/Register'
import TrialContainer from './containers/Trials'
import NavbarContainer from './containers/NavBar'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import DashboardContainer from './containers/Dashboard'
import Carousel from './components/carousel'

class App extends React.Component {
    render() {
        return (
            <Router>
                <section>
                    <NavbarContainer/>
                    <Route exact path={'/'} component={Carousel}/>
                    <section className="container-fluid">
                        <Route path='/register' component={RegisterContainer}/>
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
