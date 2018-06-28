import React from 'react'
import {connect} from 'react-redux'




const recordTable = ({patient}) => {
    {console.log(patient)}
    return (
        <div className="container-fluid">
        <div className="card">
            <div className="card-header">
                <h1 className='text-center font-weight-bold'
                    style={{ "color": "#2994b2" }}>Medical Records For Patients</h1>
            </div>
            <div class="card-body p-0" style={{ "backgroundColor": "white" }}>
                <ul style={{ "color": "grey" }}>

                            < table className="table  table-hover table-responsive-md table-striped" style={{ "backgroundColor": "white", "borderRadius": "5px" }}>
                                <thead>
                                    <tr>
                                        <th className="th-lg" style={{ "color": "#55b4d4" }}>Medical Condition</th>
                                        <th className="th-lg" style={{ "color": "#55b4d4" }}>Allergy Name</th>
                                        <th className="th-lg" style={{ "color": "#55b4d4" }}>Allergy Cause</th>
                                        <th className="th-lg" style={{ "color": "#55b4d4" }}>Body Temperature</th>
                                        <th className="th-lg" style={{ "color": "#55b4d4" }}>Pulse Rate</th>
                                        <th className="th-lg" style={{ "color": "#55b4d4" }}>Blood Pressure</th>
                                        <th className="th-lg" style={{ "color": "#55b4d4" }}>BMI</th>
                                        <th className="th-lg" style={{ "color": "#55b4d4" }}></th>
                                        <th className="th-lg"></th>
                                    </tr>
                                </thead>
                               
                            </table>



                       
                    }

                    )}

                </ul>
            </div>
        </div>
    </div>

    )

};


const MedicalRecord = connect()(recordTable);

export default MedicalRecord