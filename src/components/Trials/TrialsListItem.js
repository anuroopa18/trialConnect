import React from 'react'
import {Link} from 'react-router-dom'


const TrialListItem = ({ trial, collapseClass, index, parent }) => {
    return (
        <section>
            <section className='card mt-3'>
                <section className='card-header bg-pc' id={index}>
                    <h5 className='mb-0'>
                        <button className="btn btn-link" style={{ "color": "white" }} type='button' data-toggle="collapse"
                            data-target={"#" + trial.nct_id}
                            aria-expanded={true} aria-controls={trial.nct_id}>
                            {trial.nct_id}
                        </button>
                    </h5>
                </section>
            </section>
            <section id={trial.nct_id} className={collapseClass} aria-labelledby={index}
                data-parent={"#" + parent}>
                <section className='card-body'>
                    <p>{trial.brief_summary}</p>
                    <p><Link style={{ "color": "#55b4d4" }}
                        to={`/viewTrialInfo/${trial.nct_id}`}>
                       <i class="fa fa-eye text-secondary"></i>
                       <span>View more</span>
                    </Link></p>
                </section>
            </section>
        </section>

    )
};

export default TrialListItem