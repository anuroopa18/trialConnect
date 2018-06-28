import React from 'react'
import * as actions from '../../actions/MedicalRecordActions'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'


const stateToPropsMapper = ({medicalRecordReducer}) => ({
    init: medicalRecordReducer.init,
    patients: medicalRecordReducer.patients
});

const dispatchToPropsMapper = (dispatch) => ({
    findAllPatients: () => (actions.findAllPatients(dispatch))
});

class DoctorDashboard extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.findAllPatients()
    }

    componentWillReceiveProps(newProps) {
        if (newProps.init) {
            newProps.findAllPatients();
        }
    }

    render() {
        console.log(this.props);
        return (
            <ul>
                {
                    this.props.patients.map(patient => (
                        <li key={patient.id}><Link to={`/medRecord/${patient.id}`}>{patient.username}</Link></li>
                    ))
                }
                <li>Static li</li>
            </ul>
        )
    }
}

const DoctorDashboardContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(DoctorDashboard);

export default DoctorDashboardContainer