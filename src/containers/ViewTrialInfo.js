import React, {Component} from 'react';
import {connect} from "react-redux";
import NavContainer from '../components/Navbar/Navbar'
import * as actions from '../actions/Actions'


const stateToPropertiesMapper = ({trialsReducer}) => {
    console.log(trialsReducer);
    return {
        trial: trialsReducer.trial
    }
}

const dispatcherToPropsMapper = dispatch => {
    return {
        findTrialById: (trialId) => (actions.findTrialById(dispatch, trialId))
    }
};


class ViewTrialInfo extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        this.props.findTrialById(this.props.match.params.trialId);
    }


    render() {

        return (
            <div>
                <div>
                    <NavContainer showLogin={false} showProfile={false} showAboutUs={false} showRegister={false}/>
                </div>
                <div className="container-fluid pt-5 adminContent">
                    <div className="row">
                        <div class="col-3">
                            <div class="nav flex-column nav-tabs border-0" style={{"marginTop": "6px"}} id="v-pills-tab"
                                 role="tablist"
                                 aria-orientation="vertical">
                                <a class="nav-link p-3 active" id="v-pills-view-user-tab" data-toggle="pill"
                                   href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">
                                    <i class="fas fa-notes-medical text-secondary"></i>
                                    <strong className="text-secondary">&nbsp;Title</strong></a>
                                <a class="nav-link p-3" id="v-pills-add-user-tab" data-toggle="pill"
                                   href="#v-pills-profile"
                                   role="tab" aria-controls="v-pills-profile" aria-selected="false"><i
                                    class="fa fa-medkit text-secondary" aria-hidden="true"></i>
                                    <strong className="text-secondary">&nbsp;Arms</strong></a>
                                <a class="nav-link p-3" id="v-pills-add-user-tab" data-toggle="pill"
                                   href="#v-pills-medical-record" role="tab" aria-controls="v-pills-record"
                                   aria-selected="false"><i class="fa fa-ambulance text-secondary"
                                                            aria-hidden="true"></i><strong
                                    className="text-secondary">&nbsp;Diseases</strong></a>
                            </div>
                        </div>
                        <div class="col-9">
                            <div class="tab-content" id="v-pills-tabContent">
                                <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel"
                                     aria-labelledby="v-pills-view-user-tab">
                                    <div className='container'>
                                        <div className="card">
                                            <div className="card-header">
                                                <h1 className='text-center font-weight-bold'
                                                    style={{"color": "#2994b2"}}><span
                                                    className="font-weight-bold">Title</span>
                                                </h1>
                                            </div>
                                            <div className="card-body"
                                                 style={{"backgroundColor": "white", "color": "grey"}}>
                                                {this.props.trial.brief_title}
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div class="tab-pane fade" id="v-pills-profile" role="tabpanel"
                                     aria-labelledby="v-pills-add-user-tab">
                                    <div className='container'>
                                        <div className="card">
                                            <div className="card-header">
                                                <h1 className='text-center font-weight-bold'
                                                    style={{"color": "#2994b2"}}><span className="font-weight-bold">Arms and Interventions</span>
                                                </h1>
                                            </div>
                                            <div className="card-body"
                                                 style={{"backgroundColor": "white", "color": "grey"}}>
                                                <ul>
                                                    {this.props.trial.arms !== undefined &&
                                                    this.props.trial.arms.map((arm, index) => {

                                                            return <li>{arm.arm_name}
                                                                <ul>
                                                                    {arm.interventions !== undefined &&
                                                                    arm.interventions.map((intervention, index) => {

                                                                            return <li>
                                                                                {intervention.intervention_name}
                                                                            </li>

                                                                        }
                                                                    )
                                                                    }
                                                                </ul>
                                                            </li>

                                                        }
                                                    )}
                                                </ul>
                                            </div>
                                        </div>

                                    </div>
                                </div>


                                <div class="tab-pane fade " id="v-pills-medical-record" role="tabpanel"
                                     aria-labelledby="v-pills-view-user-tab">
                                    <div className="container-fluid adminContent">
                                        <div className="card">
                                            <div className="card-header">
                                                <h1 className='text-center font-weight-bold'
                                                    style={{"color": "#2994b2"}}><span
                                                    className="font-weight-bold">Diseases</span>
                                                </h1>
                                            </div>
                                            <div className="card-body"
                                                 style={{"backgroundColor": "white", "color": "grey"}}>
                                                <ul>
                                                    {this.props.trial.diseases !== undefined &&
                                                    this.props.trial.diseases.map((disease, index) => {

                                                            return <li>{disease.display_name}

                                                            </li>

                                                        }
                                                    )}
                                                </ul>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const ViewTrialInfoContainer = connect(stateToPropertiesMapper, dispatcherToPropsMapper)(ViewTrialInfo)
export default ViewTrialInfoContainer