import React from 'react'
import RegisterContainer from './containers/Register'
import TrialContainer from './containers/Trials'
import NavbarContainer from './containers/NavBar'
import {BrowserRouter as Router, Route} from 'react-router-dom'

class App extends React.Component {
    render() {
        return (
            <Router>
                <section>
                    <NavbarContainer/>
                    <section className="container-fluid">
                        <Route path='/register' component={RegisterContainer}/>
                        <section className="container">
                            <Route path='/search/:searchText/results' component={TrialContainer}/>
                        </section>
                    </section>
                </section>
            </Router>
        )
    }
}

export default App
