import React from 'react'
import {connect} from 'react-redux'
import heightImg from '../../assets/212px-Human_body_silhouette.svg.png'

const statistics = ({patient}) => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-9 p-0'>
                    <div className='card no-border-r'>
                        <div className='card-body'>
                            <div className='row pl-3'>
                                <div className='col-md-2 pr-0'>
                                    <img
                                        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRedV91hTRre_vzwVe-ZF
                                        ypLewoXP2mvHhOrJk7XcZaqbNoqVfn'
                                        style={{width: '70px', height: '70px'}}/>
                                </div>
                                <div className='col-md-8'>
                                    <div className='row'>
                                        <h5 className='m-0'>{patient.name}</h5>
                                    </div>
                                    <div className='row'>
                                        <small><strong>Male:</strong> {patient.age} years old</small>
                                    </div>
                                    <div className='row'>
                                        <small>PID: 7844837847147328</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-6'>
                    <div className='row'>
                        <div className='col-md-6 p-0'>
                            <div className='card no-border-r'>
                                <div className='card-body'>
                                    <div className='card-title m-0'>
                                        <h4 className='m-0'>{patient.weight}</h4>
                                    </div>
                                    <div className='card-text'>
                                        <small className='text-muted'>Weight ({patient.weightUnit})</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6 p-0'>
                            <div className='card no-border-r'>
                                <div className='card-body'>
                                    <div className='card-title m-0'>
                                        <h4 className='m-0'>{patient.age}</h4>
                                    </div>
                                    <div className='card-text'>
                                        <small className='text-muted'>Age</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-12 p-0'>
                            <div className='card no-border-r'>
                                <div className='card-body'>
                                    <div className='card-title m-0'>
                                        {patient.bmi <= 18.5 &&
                                        <h4 className='m-0 text-info'>{patient.bmi}</h4>}
                                        {patient.bmi <= 25 && patient.bmi > 18.5 &&
                                        <h4 className='m-0 text-success'>{patient.bmi}</h4>}
                                        {patient.bmi <= 30 && patient.bmi > 25 &&
                                        <h4 className='m-0 text-warning'>{patient.bmi}</h4>}
                                        {patient.bmi <= 40 && patient.bmi > 30 &&
                                        <h4 className='m-0 text-danger'>{patient.bmi}</h4>}
                                    </div>
                                    <div className='card-text'>
                                        <div className='row'>
                                            <div className='col-sm-2'>
                                                <small className='text-muted'>BMI</small>
                                            </div>
                                            <div className='col-sm-9'>
                                                <div className="progress">
                                                    <div className="progress-bar bg-info" role="progressbar"
                                                         style={{width: "20%"}} aria-valuenow="0" aria-valuemin="15"
                                                         aria-valuemax="18.5">
                                                    </div>
                                                    <div className="progress-bar bg-success" role="progressbar"
                                                         style={{width: "30%"}}
                                                         aria-valuenow="0" aria-valuemin="18.51"
                                                         aria-valuemax="24.99">

                                                    </div>
                                                    <div className="progress-bar bg-warning" role="progressbar"
                                                         style={{width: "25%"}}
                                                         aria-valuenow="0" aria-valuemin="25" aria-valuemax="30">

                                                    </div>
                                                    <div className="progress-bar bg-danger" role="progressbar"
                                                         style={{width: "35%"}} aria-valuenow="0" aria-valuemin="30"
                                                         aria-valuemax="40">

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-md-9 offset-2'>
                                                <div className='row'>
                                                    <div className='col-md-2'>
                                                        <small className='text-muted'>15</small>
                                                    </div>
                                                    <div className='col-md-3 pr-1 pl-0'>
                                                        <small className='text-muted'>18.5</small>
                                                    </div>
                                                    <div className='col-md-3 pl-1 pr-0'>
                                                        <small className='text-muted'>25</small>
                                                    </div>
                                                    <div className='col-md-2 pr-0 pl-0'>
                                                        <small className='text-muted'>30</small>
                                                    </div>
                                                    <div className='col-md-2 pr-2 pl-0'>
                                                        <small className='text-muted float-right'>40</small>
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
                <div className='col-md-3 p-0'>
                    <div className='card no-border-r'>
                        <div className='card-body'>
                            <div className='row'>
                                <div className='col-md-6 text-center'>
                                    <img src={heightImg} alt='Height' height='170px' width='90px'/>
                                </div>
                                <div className='col-md-6 text-center my-auto'>
                                    <div className='row'>
                                        <div className='col-md-12'>
                                            <h4 className='font-weight-bold m-0'>{patient.height}</h4>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-md-12'>
                                            <small className='text-muted'>Height ({patient.heightUnit})</small>
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
};

const PatientStats = connect()(statistics);

export default PatientStats