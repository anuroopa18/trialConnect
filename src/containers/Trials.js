import React from 'react'
import {connect} from 'react-redux'
import * as actions from '../actions/Actions'
import TrialListItem from '../components/Trials/TrialsListItem'
import NavbarContainer from '../components/Navbar/Navbar'

const stateToPropertiesMapper = ({trialsReducer}) => {

    return {
        trials: trialsReducer.trials,
        init: trialsReducer.init
    }
};

const dispatcherToPropsMapper = dispatch => {
    return {
        findAllTrials: () => (actions.findAllTrials(dispatch)),
    }
};

class Trials extends React.Component {

    componentDidMount() {
        //this.props.findAllTrials();
    }

    componentWillReceiveProps(newProps) {
        if (newProps.trials.init) {
           // this.props.findAllTrials();
        }
    }

    render() {

        return (
            <div>
               <div className="pb-lg-1">
                    <NavbarContainer  showProfile={false} showAboutUs={false} showLogout={false} />
                </div>
            <section className="container">
                {this.props.trials.length > 0 &&
                <section className="accordion" id={this.props.trials.length}>
                    {this.props.trials.map((trial, index) => {
                        if (index == 0) {
                            return <TrialListItem trial={trial} key={index} index={index}
                                                  collapseClass={"collapse show"}
                                                  parent={this.props.trials.length}/>
                        } else {
                            return <TrialListItem trial={trial} key={index} index={index} collapseClass={"collapse"}
                                                  parent={this.props.trials.length}/>
                        }
                    })}
                </section>
                }
            </section>
            </div>
        )
    }
}


const TrialContainer = connect(stateToPropertiesMapper, dispatcherToPropsMapper)(Trials);

export default TrialContainer