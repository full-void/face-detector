import React from 'react';
import './Rank.css'

const Rank = ({name, entries}) => {
    return (
        <div>
            <div className='white f3'>
                <span className="name">{`${name}`}</span><span className="header">, your current score is...</span>
            </div>
            <div className='white f1'>
                {entries}
            </div>
        </div>
    );
}

export default Rank;