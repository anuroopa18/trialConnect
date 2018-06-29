import React from 'react'
import * as actions from '../../actions/MedicalRecordActionsV2'
import {connect} from 'react-redux'
import NavContainer from '../Navbar/Navbar'
import {Link} from 'react-router-dom'

const stateToPropsMapper = ({medicalRecordReducer}) => ({
    init: medicalRecordReducer.init,
    patients: medicalRecordReducer.patients,
    myPatients: medicalRecordReducer.myPatients
});

const dispatchToPropsMapper = (dispatch) => ({
    findAllPatients: () => (actions.findAllPatients(dispatch)),
    findMyPatients: () => (actions.findMyPatients(dispatch)),
    redirectToPatientDashboard: () => (actions.redirectToPatientDashboard(dispatch))
});

class DoctorDashboard extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.findAllPatients();
        this.props.findMyPatients();
    }

    componentWillReceiveProps(newProps) {
        if (newProps.init) {
            newProps.findAllPatients();
            newProps.findMyPatients();
        }
    }

    render() {
        console.log(this.props);
        return (
            <div>
                <div className="pb-lg-1">
                    <NavContainer showLogin={false} showHome={false} showRegister={false} showProfile={true}
                                  showAboutUs={false}/>
                </div>
                <div className='container-fluid pt-5'>
                    <div className="row">
                        <div className="col-md-3">
                            <div className="nav flex-column nav-tabs border-0" style={{"marginTop": "6px"}}
                                 id="v-pills-tab"
                                 role="tablist"
                                 aria-orientation="vertical">
                                <a className="nav-link p-3 active" id="all-patients-tab" data-toggle="pill"
                                   href="#all-patients-view" role="tab" aria-controls="all-patients-view"
                                   aria-selected="true">
                                    <strong className="text-secondary">&nbsp;All Patients</strong><i
                                    className="fas fa-chalkboard-teacher pl-2 text-secondary"></i></a>
                                <a className="nav-link p-3" id="my-patients-tab" data-toggle="pill"
                                   href="#my-patients-view"
                                   role="tab" aria-controls="my-patients-view" aria-selected="false">
                                    <strong className="text-secondary">&nbsp;My Patients</strong>
                                    <i className="fas fa-handshake pl-2 text-secondary"></i></a>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <div className="tab-content" id="v-pills-tabContent">
                                <div className="tab-pane fade show active" id="all-patients-view" role="tabpanel"
                                     aria-labelledby="all-patients-tab">
                                    <div className='container'>
                                        <table className="table  table-hover table-responsive-md table-striped"
                                               style={{"backgroundColor": "white", "borderRadius": "5px"}}>
                                            <thead>
                                            <tr>
                                                <th className='th-lg' style={{"color": "#55b4d4"}}>#</th>
                                                <th className="th-lg" style={{"color": "#55b4d4"}}>First Name</th>
                                                <th className="th-lg" style={{"color": "#55b4d4"}}>Last Name</th>
                                                <th className="th-lg" style={{"color": "#55b4d4"}}>Email</th>
                                                <th className="th-lg" style={{"color": "#55b4d4"}}>Gender</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            {
                                                this.props.patients !== undefined && this.props.patients.map((p, i) => {
                                                    return (<tr key={i}>
                                                            <td>
                                                                <Link to={`/home/${p.username}/dashboard`}>
                                                                    <i className="fas fa-prescription"></i>
                                                                </Link>
                                                            </td>
                                                            <td>
                                                                {p.firstName}
                                                            </td>
                                                            <td>
                                                                {p.lastName}
                                                            </td>
                                                            <td>
                                                                {p.email}
                                                            </td>
                                                            <td>
                                                                {p.gender}
                                                            </td>
                                                        </tr>
                                                    )
                                                })}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="my-patients-view" role="tabpanel"
                                     aria-labelledby="my-patients-tab">
                                    <div className='container'>
                                        <table className="table  table-hover table-responsive-md table-striped"
                                               style={{"backgroundColor": "white", "borderRadius": "5px"}}>
                                            <thead>
                                            <tr>
                                                <th className="th-lg" style={{"color": "#55b4d4"}}>#</th>
                                                <th className="th-lg" style={{"color": "#55b4d4"}}>First Name</th>
                                                <th className="th-lg" style={{"color": "#55b4d4"}}>Last Name</th>
                                                <th className="th-lg" style={{"color": "#55b4d4"}}>Email</th>
                                                <th className="th-lg" style={{"color": "#55b4d4"}}>Gender</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            {
                                                this.props.myPatients.map((p, i) => {
                                                    return (<tr key={i}>
                                                            <td>
                                                                <Link to={`/home/${p.username}/dashboard`}>
                                                                    <i className="fas fa-prescription"></i>
                                                                </Link>
                                                            </td>
                                                            <td>
                                                                {p.firstName}
                                                            </td>
                                                            <td>
                                                                {p.lastName}
                                                            </td>
                                                            <td>
                                                                {p.email}
                                                            </td>
                                                            <td>
                                                                {p.gender}
                                                            </td>
                                                        </tr>
                                                    )
                                                })}
                                            </tbody>
                                        </table>
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

const DoctorDashboardContainer = connect(stateToPropsMapper,
    dispatchToPropsMapper)(DoctorDashboard);

export default DoctorDashboardContainer