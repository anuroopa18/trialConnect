import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import * as actions from '../../actions/ProfileActions'

const dispatchToPropsMapper = dispatch => ({
    recommendTrial: (trialId) => (actions.recommendTrial(dispatch, trialId))
});

const TrialListItem = ({trial, collapseClass, index, parent, recommendTrial}) => {
    let role = localStorage.getItem('role');
    if(role === null){
        role = 'Anon';
    }
    return (
        <section>
            <section className='card mt-3'>
                <section className='card-header bg-pc' id={index}>
                    <h5 className='mb-0'>
                        <button className="btn btn-link" style={{"color": "white"}} type='button' data-toggle="collapse"
                                data-target={"#" + trial.nct_id}
                                aria-expanded={true} aria-controls={trial.nct_id}>
                            {trial.nct_id}
                        </button>
                    </h5>
                </section>
            </section>
            <section id={trial.nct_id} className={collapseClass} aria-labelledby={index}
                     data-parent={"#" + parent}>
                <section className='card-body mb-5'>
                    <p className='p-1'>{trial.brief_summary}</p>
                    <p className='p-1'><Link style={{"color": "#55b4d4"}}
                                             to={`/viewTrialInfo/${trial.nct_id}`}>
                        <i class="fa fa-eye text-secondary"></i>
                        <span>View more</span>
                    </Link></p>
                    <p className='p-1' hidden={!role.includes('Doctor')}><span
                        className='hover-cursor fas fa-check-double' onClick={() => {
                        recommendTrial(trial.nct_id)
                    }}>Recommend</span></p>
                </section>
            </section>
        </section>

    )
};
const TrialListItemContainer = connect(null, dispatchToPropsMapper)(TrialListItem);
export default TrialListItemContainer