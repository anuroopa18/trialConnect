import React from 'react'
import PatientStats from '../Dashboard/PatientStatistics'
import NavContainer from '../../components/Navbar/Navbar'
import {connect} from 'react-redux'
import * as actions from '../../actions/MedicalRecordActions'



const stateToPropsMapper = ({medicalRecordReducer}) => ({
    
});

const dispatchToPropsMapper = dispatch => ({
   
});

class MRCreator extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.setPatient(this.props.match.params.patientId)
    }

    render() {
        let patient = {
            name: 'Jonathan Cardiel',
            gender: 'Male',
            age: '25',
            weight: '67.1',
            weightUnit: 'kg',
            bmi: '20.9',
            height: '180',
            heightUnit: 'cm',
        };
        let firstNameInput;
        let lastNameInput;
        let passwordInput;
        let emailInput;
        let phoneInput;
        return (
            <div>
                <div className='mb-lg-5'>
                    <NavContainer showLogin={false} showHome={false} showRegister={false} showAboutUs={false}
                                  user={{}}/>
                </div>
                <div className='container bg-light mb-5'>
                    <div className='row p-3'>
                        <div className='col-md-12'>
                            <PatientStats patient={patient}/>
                        </div>
                    </div>
                </div>
               
             
            </div>
        )
    }
};

const MRContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(MRCreator);
export default MRContainer