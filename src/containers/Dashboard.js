import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import PatientStats from '../components/Dashboard/PatientStatistics'
import MedicalRecord from '../components/Dashboard/MedicalRecord'
import NavContainer from '../components/Navbar/Navbar'
import * as actions from '../actions/PatientDashboardActions'

const stateToPropsMapper = ({patientDashBoardReducer}) => ({
    
    patient:patientDashBoardReducer.patient
  
});

const dispatchToPropsMapper = dispatch => {
    return {
      findPatientByUsername: (username) => (actions.findPatientByUsername(dispatch,username))
    }
};

class Dashboard extends React.Component  {
    constructor(props) {
        super(props)

    }

    componentDidMount() {
        console.log(this.props.match);
      this.props.findPatientByUsername(this.props.match.params.username);

    }

    
   render(){
    return (
        <div>
            <div className='mb-lg-5'>
                <NavContainer showLogin={false} showHome={false} showRegister={false} showAboutUs={false}/>
            </div>
            <div className='container bg-light'>
                <div className='row p-3'>
                    <div className='col-md-12'>
                    <PatientStats patient={this.props.patient}/>
                    </div>
                </div>
                <div className='row p-3'>
                    <div className='col-md-12'>
                        
                    </div>
                </div>
                
                
            </div>
        </div>
    )
  }  
};

const DashboardContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(Dashboard);

export default DashboardContainer;