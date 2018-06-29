import React from 'react'
import {connect} from 'react-redux'
import heightImg from '../../assets/PatientStats/212px-Human_body_silhouette.svg.png'



const statistics = ({patient,bmi}) => {
    
   
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
                                        <h5 className='m-0'>{patient.firstName}&nbsp;{patient.lastName}</h5>
                                    </div>
                                    <div className='row'>
                                        <small><strong>{patient.gender}</strong>: {patient.age} years old</small>
                                    </div>
                                    <div className='row'>
                                        <small>PID: {patient.id}</small>
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
                                        <h4 className='m-0'>{patient.weight} </h4>
                                    </div>
                                    <div className='card-text'>
                                        <small className='text-muted'>Weight (lbs)</small>
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
                                        {bmi <= 18.5 &&
                                        <h3 style={{"color":"#00bfff"}} className='m-0 '>{bmi}</h3>}
                                        {bmi <= 25 && bmi > 18.5 &&
                                        <h3 style={{"color":"#99cc00"}} className='m-0 '>{bmi}</h3>}
                                        {bmi <= 30 && bmi > 25 &&
                                        <h3 style={{"color":"#ffed00"}} className='m-0 '>{bmi}</h3>}
                                        {bmi <= 40 &&bmi > 30 &&
                                        <h3 style={{"color":"#ff654d"}} className='m-0 '>{bmi}</h3>}
                                    </div>
                                    <div className='card-text'>
                                        <div className='row'>
                                            <div className='col-sm-2'>
                                                
                                                <small className='text-muted'>BMI</small>
                                                
                                          
                                            </div>
                                            <div className='col-sm-9'>
                                                <div className="progress">
                                                    <div className="progress-bar " role="progressbar"
                                                         style={{width: "20%","backgroundColor":"#00bfff"}} aria-valuenow="0" aria-valuemin="15"
                                                         aria-valuemax="18.5">
                                                    </div>
                                                    <div className="progress-bar " role="progressbar"
                                                         style={{width: "30%","backgroundColor":"#99cc00"}}
                                                         aria-valuenow="0" aria-valuemin="18.51"
                                                         aria-valuemax="24.99">

                                                    </div>
                                                    <div className="progress-bar " role="progressbar"
                                                         style={{width: "25%","backgroundColor":"#ffed00"}}
                                                         aria-valuenow="0" aria-valuemin="25" aria-valuemax="30">

                                                    </div>
                                                    <div className="progress-bar " role="progressbar"
                                                         style={{width: "35%","backgroundColor":"#ff654d"}} aria-valuenow="0" aria-valuemin="30"
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
                                    <img src={heightImg} alt='Height' height='170.5px' width='90px'/>
                                </div>
                                <div className='col-md-6 text-center my-auto'>
                                    <div className='row'>
                                        <div className='col-md-12'>
                                            <h4 className='font-weight-bold m-0'>{patient.height} </h4>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-md-12'>
                                            <small className='text-muted'>Height (cm)</small>
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