import React from 'react'
import {connect} from 'react-redux'
import * as actions from '../../actions/MedicalRecordActionsV2'
import icon from '../../assets/person.png'
import NavContainer from '../Navbar/Navbar'


const stateToPropsMapper = ({medicalRecordReducer}) => ({
    bloodPressure: medicalRecordReducer.bloodPressure,
    bodyTemperature: medicalRecordReducer.bodyTemperature,
    pulseRate: medicalRecordReducer.pulseRate,
    BMI: medicalRecordReducer.bmi,
    allergyName: medicalRecordReducer.allergyName,
    allergyCause: medicalRecordReducer.allergyCause,
    allergyTreatment: medicalRecordReducer.allergyTreatment,
    medicine: medicalRecordReducer.medicine,
    medicalCondition: medicalRecordReducer.medicalCondition
});

const dispatchToPropsMapper = dispatch => ({
    createMedicalRecord: () => (actions.createMedicalRecord(dispatch)),
    onChangeBloodPressure: (bp) => (actions.onChangeBloodPressure(dispatch, bp)),
    onChangePulseRate: (pr) => (actions.onChangePulseRate(dispatch, pr)),
    onChangeBodyTemperature: (bt) => (actions.onChangeBodyTemperature(dispatch, bt)),
    onChangeBMI: (bmi) => (actions.onChangeBMI(dispatch, bmi)),
    onChangeAllergyName: (allergyName) => (actions.onChangeAllergyName(dispatch, allergyName)),
    onChangeAllergyCause: (cause) => (actions.onChangeAllergyCause(dispatch, cause)),
    onChangeAllergyTreatment: (treatment) => (actions.onChangeAllergyTreatment(dispatch, treatment)),
    onChangeMedicine: (medicine) => (actions.onChangeMedicine(dispatch, medicine)),
    onChangeMedicalCondition: (mc) => (actions.onChangeMedicalCondition(dispatch, mc)),
    updateMedicalRecord: () => (actions.updateMedicalRecord(dispatch)),
    setPatient: (pid) => (actions.setPatient(dispatch, pid))
});

class MedicalRecordForm extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.setPatient(this.props.match.params.patientId)
    }

    render() {
        let btInput;
        let prInput;
        let bpInput;
        let alNameInput;
        let bmiInput;
        let medicineInput;
        let mcInput;
        let causeInput;
        let treatInput;
        return (
            <div>
                <div>
                    <NavContainer showLogin={false} showAboutUs={false} showRegister={false}/>
                </div>
                <div className='container-fluid pt-5'>
                    <div className="row">
                        <div className="col-md-4 offset-4">
                            <div className="card">
                                <div className="card-header">
                                    <h1 className='text-center font-weight-bold'
                                        style={{"color": "#2994b2"}}>
                                        Medical Record</h1>
                                </div>
                                <div className="card-body p-0">
                                    <div className='card-img-top text-center mt-3'>
                                        <img className="center" src={icon} width="60" height="60"/>
                                    </div>
                                    <div>
                                        <label htmlFor="bodyTemperature" style={{"color": "#2994b2"}}>Body
                                            Temperature</label>
                                        <input required type="text" className="form-control" name="bodyTemperature"
                                               ref={node => btInput = node}
                                               value={this.props.bodyTemperature}
                                               onChange={() => {
                                                   this.props.onChangeBodyTemperature(btInput.value)
                                               }}/>

                                    </div>
                                    <div>
                                        <label htmlFor="bp" style={{"color": "#2994b2"}}>Blood Pressure</label>
                                        <input required type="text" className="form-control" name="bp"
                                               value={this.props.bloodPressure}
                                               ref={node => bpInput = node}
                                               onChange={() => {
                                                   this.props.onChangeBloodPressure(bpInput.value)
                                               }}/>
                                    </div>
                                    <div>
                                        <label htmlFor="pr" style={{"color": "#2994b2"}}>Pulse Rate</label>
                                        <input type="text" className="form-control" name="pr"
                                               ref={node => prInput = node}
                                               value={this.props.pulseRate}
                                               onChange={() => {
                                                   this.props.onChangePulseRate(prInput.value)
                                               }}/>
                                    </div>
                                    <div>
                                        <label htmlFor="bmi" style={{"color": "#2994b2"}}>BMI</label>
                                        <input required type="text" className="form-control" name="bmi"
                                               value={this.props.BMI}
                                               ref={node => bmiInput = node}
                                               onChange={() => {
                                                   this.props.onChangeBMI(bmiInput.value)
                                               }}/>
                                    </div>

                                    <div>
                                        <label htmlFor="alname" style={{"color": "#2994b2"}}>Allergy Name</label>
                                        <input required className="form-control" name="alname"
                                               value={this.props.allergyName}
                                               ref={node => alNameInput = node}
                                               onChange={() => {
                                                   this.props.onChangeAllergyName(alNameInput.value)
                                               }}/>
                                    </div>
                                    <div>
                                        <label htmlFor="cause" style={{"color": "#2994b2"}}>Allergen</label>
                                        <input required className="form-control" name="cause"
                                               value={this.props.allergyCause}
                                               ref={node => causeInput = node}
                                               onChange={() => {
                                                   this.props.onChangeAllergyCause(causeInput.value)
                                               }}/>
                                    </div>
                                    <div>
                                        <label htmlFor="treatment" style={{"color": "#2994b2"}}>Treatment</label>
                                        <input required className="form-control" name="treatment"
                                               value={this.props.allergyTreatment}
                                               ref={node => treatInput = node}
                                               onChange={() => {
                                                   this.props.onChangeAllergyTreatment(treatInput.value)
                                               }}/>
                                    </div>
                                    <div>
                                        <label htmlFor="medicine" style={{"color": "#2994b2"}}>Prescribed
                                            Medicine</label>
                                        <input required className="form-control" name="cause"
                                               value={this.props.medicine}
                                               ref={node => medicineInput = node}
                                               onChange={() => {
                                                   this.props.onChangeMedicine(medicineInput.value)
                                               }}/>
                                    </div>
                                    <div>
                                        <label htmlFor="condition" style={{"color": "#2994b2"}}>Medical
                                            Condition</label>
                                        <input required className="form-control" name="cause"
                                               value={this.props.medicalCondition}
                                               ref={node => mcInput = node}
                                               onChange={() => {
                                                   this.props.onChangeMedicalCondition(mcInput.value)
                                               }}/>
                                    </div>
                                    <p></p>

                                    <div className="form-group">
                                        <button className="btn btn-block m-0"
                                                style={{"backgroundColor": "#22a7cc", "color": "white"}}
                                                onClick={this.props.createMedicalRecord}>CREATE
                                        </button>

                                    </div>
                                    <div className="card-footer">
                                        <p>&nbsp;</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

const MedicalRecordFormContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(MedicalRecordForm);

export default MedicalRecordFormContainer