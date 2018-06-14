import React from 'react'
import RegisterContainer from './containers/Register'
import TrialContainer from './containers/Trials'

class App extends React.Component {
    render() {
        return (
            <section className="container-fluid">
                <section ><RegisterContainer/></section>
                <h1> App Initialized </h1>
                <section className="container">
                    <h1>Trial Container</h1>
                    <TrialContainer />
                </section>
            </section>
        )
    }
}

export default App