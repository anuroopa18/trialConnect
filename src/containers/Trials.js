import React from 'react'
import {connect} from 'react-redux'
import * as actions from '../actions/Actions'

const stateToPropertiesMapper = (state) => {
    console.log("inside stateToPropsMapper");
    return {
        trials: state.trials,
        message: state.message,
        init: state.init
    }
};

const dispatcherToPropsMapper = dispatch => {
    console.log("inside dispatcherToPropsMapper");
    return {
        findAllTrials: () => (actions.findAllTrials(dispatch)),
        onClickTrials: () => (actions.onClickTrials(dispatch))
    }
};

class Trials extends React.Component {

    componentDidMount() {
        this.props.findAllTrials();
    }

    componentWillReceiveProps(newProps) {
        if (newProps.init) {
            this.props.findAllTrials();
        }
    }

    render() {

        return (
            <div>
                {this.props.trials.length > 0 &&
                <ul className='list-group'>
                    {
                        this.props.trials.map((trial, i) => (
                            <li key={i} className='list-group-item'>{trial.official_title}</li>
                        ))}
                </ul>
                }
            </div>
        )
    }
}


const TrialContainer = connect(stateToPropertiesMapper, dispatcherToPropsMapper)(Trials);

export default TrialContainer