import React from 'react';

const Nexp = props => {
    return(
        <div className="py-3">
            <button onClick={props.previousp} type="button" className="btn btn-info mr-1">Previous &larr;</button>
            <button onClick={props.nextp} type="button" className="btn btn-info">Next &rarr;</button>
        </div>
    )
}

export default Nexp;