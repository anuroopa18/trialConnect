import React from 'react'
import RegisterContainer from './containers/Register'
import TrialContainer from './containers/Trials'
import NavbarContainer from './containers/NavBar'

class App extends React.Component {
    render() {
        return (
            <section>
                <NavbarContainer/>
                <section className="container-fluid">
                    <section><RegisterContainer/></section>
                    <section className="container">
                        <TrialContainer />
                    </section>
                </section>
            </section>
        )
    }
}

export default App
