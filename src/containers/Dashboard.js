import React from 'react'
import {connect} from 'react-redux'
import PatientStats from '../components/Dashboard/PatientStatistics'
import MedicalRecord from '../components/Dashboard/MedicalRecord'

const Dashboard = () => {
    let patient = {
        name: 'Jonathan Cardiel',
        gender: 'Male',
        age: '25',
        weight: '67.1',
        weightUnit: 'kg',
        bmi: '20.9',
        height: '180',
        heightUnit: 'cm',
        allergies: [{
            name: 'Peanut Allergy',
            allergen: 'Peanut',
            effect: 'anaphylaxis',
            firstLineTreatment: 'Epinephrine auto-injector'
        }, {
            name: 'Lactose Intolerance',
            allergen: 'Dairy Products',
            effect: 'IBS',
            firstLineTreatment: 'Imodium'
        }],
        conditions: [{
            condition: 'arthritis',
            diagnosedDate: '16/03/98',
            medications: 'Naproxen, Aspirin, Paracetamol'
        },
            {
                condition: 'Asthama',
                diagnosedDate: '16/03/98',
                medications: 'Releaved Inhaler'
            },
            {
                condition: 'Glaucoma',
                diagnosedDate: '16/03/98',
                medications: 'Beta Blockers'
            }],
        medications: [{
            name: 'Naproxen'
        }, {
            name: 'Aspirin'
        }, {
            name: 'Paracetamol'
        }, {
            name: 'Releaver Inhaler'
        }],
        contactDetails: [{
            type: 'emergency',
            name: 'Jaida',
            phone: '8888888800'
        }, {
            type: 'cell',
            name: 'Jonathan Cardiel',
            phone: '8988118600'
        }]
    };
    return (
        <div className='container bg-light'>
            <div className='row p-3'>
                <div className='col-md-12'>
                    <PatientStats patient={patient}/>
                </div>
            </div>
            <div className='row p-3'>
                <div className='col-md-12'>
                    <MedicalRecord patient={patient}/>
                </div>
            </div>
        </div>
    )
}

const DashboardContainer = connect()(Dashboard);

export default DashboardContainer;