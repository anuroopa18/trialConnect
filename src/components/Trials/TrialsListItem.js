import React from 'react'


const TrialListItem = ({trial, collapseClass, index, parent}) => {
    return (
        <section>
            <section className='card'>
                <section className='card-header bg-pc' id={index}>
                    <h5 className='mb-0'>
                        <button className="btn btn-link" type='button' data-toggle="collapse"
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
                </section>
            </section>
        </section>

    )
};

export default TrialListItem