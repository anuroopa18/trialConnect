import React from 'react'
import TrialListItem from "../Trials/TrialsListItem";

const stateToPropsMapper = ({patientProfileReducer}) => {
    return {
        trials: patientProfileReducer.trials,
        role: patientProfileReducer.role
    }
};

const TrialListings = ({trials}) => {
    return (
        <div className='container mt-3 bg-light mb-3'>
            <div className='row'>
                <div className='col-md-12'>
                    {trials.map((trial, index) => {
                        if (index == 0) {
                            return <TrialListItem trial={trial} key={index} index={index}
                                                  collapseClass={"collapse show"}
                                                  parent={trials.length}/>
                        } else {
                            return <TrialListItem trial={trial} key={index} index={index} collapseClass={"collapse"}
                                                  parent={trials.length}/>
                        }
                    })
                    }
                </div>
            </div>
        </div>
    )
};

export default TrialListings