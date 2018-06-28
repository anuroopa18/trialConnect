import React from 'react'
import PatientStats from '../Dashboard/PatientStatistics'
import NavContainer from '../../components/Navbar/Navbar'
import {connect} from 'react-redux'
import * as actions from '../../actions/MedicalRecordActions'

const AllergyRecord = ({
                           allergies, isEdit, activeTab, onChangeAllergyName,
                           onChangeTreatment, onChangeAllergen, onChangeAllergyEffect,
                           allergyName, effect, treatment, allergen, editAllergy, deleteAllergy, updateAllergy,
                           allergyId
                       }) => {
    let nameInput;
    let allergenInput;
    let effectInput;
    let treatmentInput;
    console.log(allergyName);
    return (
        <div>
            <table className='table table-bordered table-striped'>
                <thead>
                <tr>
                    <th scope='col'>Name</th>
                    <th scope='col'>Allergen</th>
                    <th scope='col'>Effect</th>
                    <th scope='col'>Treatment</th>
                    <th scope='col' hidden={!isEdit && activeTab === 'allergies'}>Controls</th>
                </tr>
                <tr className='form-group' hidden={!isEdit && activeTab === 'allergies'}>

                    <td><input disabled={allergyId == ''} className='form-control' placeholder='Name'
                               value={allergyName}
                               onChange={() => {
                                   onChangeAllergyName(nameInput.value)
                               }} ref={node => nameInput = node}/></td>

                    <td><input className='form-control' placeholder='Allergen' value={allergen} onChange={() => {
                        onChangeAllergen(allergenInput.value)
                    }} ref={node => allergenInput = node}/></td>

                    <td><input className='form-control' placeholder='Effect' value={effect} onChange={() => {
                        onChangeAllergyEffect(effectInput.value)
                    }} ref={node => effectInput = node}/></td>
                    <td><input className='form-control' placeholder='Treatment' value={treatment} onChange={() => {
                        onChangeTreatment(treatmentInput.value)
                    }} ref={node => treatmentInput = node}/>
                    </td>
                    <td>
                        <button className='btn m-0 text-light' style={{backgroundColor: '#149dcc'}}
                                onClick={updateAllergy}><i
                            className='fas fa-retweet'></i></button>
                    </td>
                </tr>
                </thead>
                <tbody>
                {
                    allergies.map((stat, i) => (
                        <tr key={stat.id}>
                            <td>{stat.name}</td>
                            <td>{stat.allergen}</td>
                            <td>{stat.effect}</td>
                            <td>{stat.treatment}</td>
                            <td className='text-center'>
                                <i className='fa fa-edit text-primary pr-2 text-center hover-link'
                                   onClick={() => {
                                       editAllergy(stat.id)
                                   }}></i>
                                <i className='fa fa-times pl-2 text-center hover-link' onClick={() => {
                                    deleteAllergy(stat.id)
                                }}></i></td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
    )
};

const ConditionRecord = ({
                             conditions, isEdit, activeTab, conditionName,
                             diagDate, medicines, onChangeMeds,
                             onChangeDiagDate, onChangeConditionName, editCondition, deleteCondition, updateCondition
                         }) => {
    let nameInput;
    let diagDateInput;
    let medicineInput;

    return (
        <div>
            <table className='table table-bordered table-striped'>
                <thead>
                <tr>
                    <th scope='col'>Condition</th>
                    <th scope='col'>Diagnosed</th>
                    <th scope='col'>Medications</th>
                    <th scope='col' hidden={!isEdit && activeTab === 'conditions'}>Controls</th>
                </tr>
                <tr className='form-group' hidden={!isEdit && activeTab === 'conditions'}>
                    <td><input type='text' className='form-control' placeholder='Enter Condition' value={conditionName}
                               ref={node => nameInput = node} onChange={() => {
                        onChangeConditionName(nameInput.value)
                    }}/></td>
                    <td><input type='text' className='form-control' placeholder='MM-dd-yyyy' value={diagDate}
                               onChange={() => {
                                   onChangeDiagDate(diagDateInput.value)
                               }} ref={node => diagDateInput = node}/></td>
                    <td><input className='form-control' placeholder='Enter Medication' value={medicines}
                               onChange={() => {
                                   onChangeMeds(medicineInput.value)
                               }}
                               ref={node => medicineInput = node}/></td>
                    <td>
                        <button className='btn m-0 text-light' style={{backgroundColor: '#149dcc'}}
                                onClick={updateCondition}><i
                            className='fas fa-retweet'></i></button>
                    </td>

                </tr>
                </thead>
                <tbody>
                {
                    conditions.map((stat, i) => (
                        <tr key={i}>
                            <td>{stat.conditions}</td>
                            <td>{stat.diagnosedDate}</td>
                            <td>{stat.medicine}</td>
                            <td className='text-center'>
                                <i className='fa fa-edit text-primary pr-2 text-center hover-link'
                                   onClick={() => {
                                       editCondition(stat.id)
                                   }}></i>
                                <i className='fa fa-times pl-2 text-center hover-link' onClick={() => {
                                    deleteCondition(stat.id)
                                }}></i></td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
    )

};

const MedicationRecord = ({
                              medications, isEdit, activeTab, name,
                              onChangeMedName, editMedication, deleteMedication, updateMedication
                          }) => {
    let nameInput;
    return (
        <ul className='list-group pb-3'>
            <li className='list-group-item' hidden={!isEdit && activeTab === 'medication'}>
                <div className='form-inline'>
                    <input className='form-control' placeholder='Medication Name' value={name}
                           ref={node => nameInput = node} onChange={() => {
                        onChangeMedName(nameInput.value)
                    }}/>
                    <button className='btn btn-primary btn-md float-right' onClick={updateMedication}>Update</button>
                </div>
            </li>
            {
                medications.map((med, i) => (
                    <li className='list-group-item' key={i}><h6 className='text-trial m-0'><i
                        className='fas fa-pills'></i><span className='pl-2'>{med.name}</span></h6><i
                        className='fa fa-edit text-primary pl-2 text-center hover-link float-right'
                        onClick={() => {
                            editMedication(med.id)
                        }}></i>
                        <i className='fa fa-times pr-2 text-center hover-link float-right' onClick={() => {
                            deleteMedication(med.id)
                        }}></i>
                    </li>
                ))
            }
        </ul>
    )
};

const VitalsRecord = ({
                          vitals, activeTab, onChangeBloodPressure, onChangePulseRate, onChangeBodyTemperature,
                          onChangeBMI, onChangeWeight, onChangeHeight, bodyTemperature, bloodPressure, pulseRate, bmi,
                          weight, height, editField, updateField, isEditBT,
                          isEditBP, isEditPR, isEditW, isEditH, isEditBMI, isEditVitals
                      }) => {
    let bodyInput;
    let bloodInput;
    let pulseInput;
    let bmiInput;
    let weightInput;
    let heightInput;
    return (
        <table className='table table-bordered table-striped'>
            <tbody>
            <tr>
                <td>Body Temperature</td>
                <td hidden={isEditBT}>{bodyTemperature}</td>
                <td hidden={!isEditBT}>
                    <input className='form-control' placeholder='Enter body temperature' ref={node => bodyInput = node}
                           onChange={() => {
                               onChangeBodyTemperature(bodyInput.value)
                           }}/>
                </td>
                <td hidden={!isEditVitals}>
                    <i className='fa fa-edit text-primary pr-2 text-center hover-link'
                       onClick={() => {
                           editField('bt')
                       }}></i>
                    <i className='fa fa-save pl-2 text-center hover-link' onClick={() => {
                        updateField('bt')
                    }}></i>
                </td>
            </tr>
            <tr>
                <td>Blood Pressure</td>
                <td hidden={isEditBP}>{bloodPressure}</td>
                <td hidden={!isEditBP}>
                    <input className='form-control' placeholder='Enter blood pressure' ref={node => bloodInput = node}
                           onChange={() => {
                               onChangeBloodPressure(bloodInput.value)
                           }}/>
                </td>
                <td hidden={!isEditVitals}>
                    <i className='fa fa-edit text-primary pr-2 text-center hover-link'
                       onClick={() => {
                           editField('bp')
                       }}></i>
                    <i className='fa fa-save pl-2 text-center hover-link ' onClick={() => {
                        updateField('bp')
                    }}></i>
                </td>
            </tr>
            <tr>
                <td>Pulse Rate</td>
                <td hidden={isEditPR}>{pulseRate}</td>
                <td hidden={!isEditPR}>
                    <input className='form-control' placeholder='Enter pulse rate(BPM)' ref={node => pulseInput = node}
                           onChange={() => {
                               onChangePulseRate(pulseInput.value)
                           }}/>
                </td>
                <td hidden={!isEditVitals}>
                    <i className='fa fa-edit text-primary pr-2 text-center hover-link'
                       onClick={() => {
                           editField('pr')
                       }}></i>
                    <i className='fa fa-save pl-2 text-center hover-link' onClick={() => {
                        updateField('pr')
                    }}></i>
                </td>
            </tr>
            <tr>
                <td>BMI</td>
                <td hidden={isEditBMI}>{bmi}</td>
                <td hidden={!isEditBMI}>
                    <input className='form-control' placeholder='Enter BMI' ref={node => bmiInput = node}
                           onChange={() => {
                               onChangeBMI(bmiInput.value)
                           }}/>
                </td>
                <td hidden={!isEditVitals}>
                    <i className='fa fa-edit text-primary pr-2 text-center hover-link'
                       onClick={() => {
                           editField('bmi')
                       }}></i>
                    <i className='fa fa-save pl-2 text-center hover-link' onClick={() => {
                        updateField('bmi')
                    }}></i>
                </td>
            </tr>
            <tr>
                <td>Weight</td>
                <td hidden={isEditW}>{weight}</td>
                <td hidden={!isEditW}>
                    <input className='form-control' placeholder='Enter Weight(kg)' ref={node => weightInput = node}
                           onChange={() => {
                               onChangeWeight(weightInput.value)
                           }}/>
                </td>
                <td hidden={!isEditVitals}>
                    <i className='fa fa-edit text-primary pr-2 text-center hover-link'
                       onClick={() => {
                           editField('w')
                       }}></i>
                    <i className='fa fa-save pl-2 text-center hover-link' onClick={() => {
                        updateField('w')
                    }}></i>
                </td>
            </tr>
            <tr>
                <td>Height</td>
                <td hidden={isEditH}>{height}</td>
                <td hidden={!isEditH}>
                    <input className='form-control' placeholder='Enter Height(cm)' ref={node => heightInput = node}
                           onChange={() => {
                               onChangeHeight(heightInput.value)
                           }}/>
                </td>
                <td hidden={!isEditVitals}>
                    <i className='fa fa-edit text-primary pr-2 text-center hover-link'
                       onClick={() => {
                           editField('h')
                       }}></i>
                    <i className='fa fa-save pl-2 text-center hover-link' onClick={() => {
                        updateField('h')
                    }}></i>
                </td>
            </tr>
            </tbody>
        </table>
    )
};

const stateToPropsMapper = ({medicalRecordReducer}) => ({
    newMR: medicalRecordReducer.newMR,
    allergies: medicalRecordReducer.allergies,
    allergyName: medicalRecordReducer.allergyName,
    allergen: medicalRecordReducer.allergen,
    effect: medicalRecordReducer.effect,
    treatment: medicalRecordReducer.treatment,
    medications: medicalRecordReducer.medications,
    conditions: medicalRecordReducer.conditions,
    vitals: medicalRecordReducer.vitals,
    curPatient: medicalRecordReducer.curPatient,
    isEdit: medicalRecordReducer.isEdit,
    activeTab: medicalRecordReducer.activeTab,
    conditionName: medicalRecordReducer.conditionName,
    medicines: medicalRecordReducer.medicines,
    diagDate: medicalRecordReducer.diagDate,
    name: medicalRecordReducer.name,
    weight: medicalRecordReducer.weight,
    height: medicalRecordReducer.height,
    bmi: medicalRecordReducer.bmi,
    pulseRate: medicalRecordReducer.pulseRate,
    bloodPressure: medicalRecordReducer.bloodPressure,
    bodyTemperature: medicalRecordReducer.bodyTemperature,
    isEditBT: medicalRecordReducer.isEditBT,
    isEditBP: medicalRecordReducer.isEditBP,
    isEditPR: medicalRecordReducer.isEditPR,
    isEditBMI: medicalRecordReducer.isEditBMI,
    isEditH: medicalRecordReducer.isEditH,
    isEditW: medicalRecordReducer.isEditW,
    isToggle: medicalRecordReducer.isToggle,
    isEditAllergy: medicalRecordReducer.isEditAllergy,
    isEditCondition: medicalRecordReducer.isEditCondition,
    isEditMedication: medicalRecordReducer.isEditMedication,
    isEditVitals: medicalRecordReducer.isEditVitals,
    allergyId: medicalRecordReducer.allergyId
});

const dispatchToPropsMapper = dispatch => ({
    addAllergy: () => (actions.addAllergy(dispatch)),
    addCondition: () => (actions.addCondition(dispatch)),
    addMedication: () => (actions.addMedication(dispatch)),
    addVital: () => (actions.addVital(dispatch)),
    switchTab: (tab) => (actions.switchTab(dispatch, tab)),
    onChangeAllergyName: (alName) => (actions.onChangeAllergyName(dispatch, alName)),
    onChangeAllergen: (allergen) => (actions.onChangeAllergen(dispatch, allergen)),
    onChangeAllergyEffect: (effect) => (actions.onChangeAllergyEffect(dispatch, effect)),
    onChangeTreatment: (treatment) => (actions.onChangeTreatment(dispatch, treatment)),
    editAllergy: (id) => (actions.editAllergy(dispatch, id)),
    deleteAllergy: (id) => (actions.deleteAllergy(dispatch, id)),
    updateAllergy: () => (actions.updateAllergy(dispatch)),
    updateMedication: () => (actions.updateMedication(dispatch)),
    editMedication: (id) => (actions.editMedication(dispatch, id)),
    onChangeConditionName: (name) => (actions.onChangeConditionName(dispatch, name)),
    onChangeDiagDate: (diagDate) => (actions.onChangeDiagDate(dispatch, diagDate)),
    onChangeMeds: (name) => (actions.onChangeMeds(dispatch, name)),
    editCondition: (id) => (actions.editCondition(dispatch, id)),
    updateCondition: () => (actions.updateCondition(dispatch)),
    deleteCondition: (id) => (actions.deleteCondition(dispatch, id)),
    onChangeMedName: (name) => (actions.onChangeMedName(dispatch, name)),
    deleteMedication: (id) => (actions.deleteMedication(dispatch, id)),
    onChangeBloodPressure: (bloodPressure) => (actions.onChangeBloodPressure(dispatch, bloodPressure)),
    onChangeBodyTemperature: (bodyTemperature) => (actions.onChangeBodyTemperature(dispatch, bodyTemperature)),
    onChangeWeight: (weight) => (actions.onChangeWeight(dispatch, weight)),
    onChangeHeight: (height) => (actions.onChangeHeight(dispatch, height)),
    onChangePulseRate: (pulseRate) => (actions.onChangePulseRate(dispatch, pulseRate)),
    onChangeBMI: (bmi) => (actions.onChangeBMI(dispatch, bmi)),
    editField: (field) => (actions.editField(dispatch, field)),
    updateField: (field) => (actions.updateField(dispatch, field)),
    toggleButtonState: () => (actions.toggleButtonState(dispatch)),
    setPatient: (patientId) => (actions.setPatient(dispatch, patientId))
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
                <div className='container bg-light mb-5'>
                    <div className='row pb-2 pt-3'>
                        <div className='col-md-3 offset-8'>
                            <button className='btn btn-small' onClick={this.props.toggleButtonState}
                                    hidden={this.props.isToggle}><span
                                className='font-weight-bold'>Edit</span></button>
                            <button className='btn btn-small' onClick={this.props.toggleButtonState}
                                    hidden={!this.props.isToggle}><span
                                className='font-weight-bold'>Save</span></button>
                        </div>
                    </div>
                    <div className='row pb-3 pt-3'>
                        <div className='col-md-8 offset-2'>
                            <div className='card'>
                                <ul className='nav nav-tabs nav-fill border-0'>
                                    <li className='nav-item active' onClick={() => {
                                        this.props.switchTab('allergies')
                                    }}>
                                        <a href='#' className='nav-link active' id='allergies-tab' data-toggle="tab"
                                           href="#allergies"
                                           role="tab" aria-controls="allergies" aria-selected="false"><strong
                                            className='text-secondary'>Allergies</strong></a>
                                    </li>
                                    <li className='nav-item' onClick={() => {
                                        this.props.switchTab('conditions')
                                    }}>
                                        <a className='nav-link' href='#' id='conditions-tab' data-toggle="tab"
                                           href="#conditions"
                                           role="tab" aria-controls="conditions" aria-selected="true"><strong
                                            className='text-secondary'>Conditions</strong></a>
                                    </li>
                                    <li className='nav-item' onClick={() => {
                                        this.props.switchTab('medications')
                                    }}>
                                        <a className='nav-link' href='#' id='medications-tab' data-toggle="tab"
                                           href="#medications"
                                           role="tab" aria-controls="medications" aria-selected="false"><strong
                                            className='text-secondary'>Medications</strong></a>
                                    </li>
                                    <li className='nav-item' onClick={() => {
                                        this.props.switchTab('vitals')
                                    }}>
                                        <a className='nav-link' href='#' id='contact-tab' data-toggle="tab"
                                           href="#contact"
                                           role="tab" aria-controls="contact" aria-selected="false"><strong
                                            className='text-secondary'>Vitals
                                            Details</strong></a>
                                    </li>
                                </ul>
                                <div className='tab-content pt-3'>
                                    <div className='tab-pane fade show active' id='allergies' role="tabpanel"
                                         aria-labelledby="allergies-tab">
                                        <div className='container'>
                                            <div className='row'>
                                                <div className='col-md-12'>
                                                    <AllergyContainer/>
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className='col-md-12'>
                                                    <button hidden={!this.props.isEditAllergy}
                                                            className='btn btn-block m-0'
                                                            onClick={this.props.addAllergy}>Add
                                                        Allergy
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='tab-pane fade' id='conditions' role="tabpanel"
                                         aria-labelledby="conditions-tab">
                                        <div className='container'>
                                            <div className='row'>
                                                <div className='col-md-12'>
                                                    <ConditionsContainer/>
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className='col-md-12'>
                                                    <button hidden={!this.props.isEditCondition}
                                                            className='btn btn-block m-0'
                                                            onClick={this.props.addCondition}>Add
                                                        Condition
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='row'>

                                        </div>
                                    </div>
                                    <div className='tab-pane fade' role="tabpanel" id='medications'
                                         aria-labelledby="medications-tab">
                                        <div className='container'>
                                            <div className='row'>
                                                <div className='col-md-12'>
                                                    <MedicationsContainer/>
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className='col-md-12'>
                                                    <button hidden={!this.props.isEditMedication}
                                                            className='btn btn-block m-0'
                                                            onClick={this.props.addMedication}>Add
                                                        Medication
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='tab-pane fade' role="tabpanel" id='contact'
                                         aria-labelledby="contact-tab">
                                        <div className='container'>
                                            <div className='row'>
                                                <div className='col-md-12'>
                                                    <VitalsContainer/>
                                                </div>
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
};

const MRContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(MRCreator);
const AllergyContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(AllergyRecord);
const ConditionsContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(ConditionRecord);
const MedicationsContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(MedicationRecord);
const VitalsContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(VitalsRecord);
export default MRContainer