import React from 'react';

const DateFilter = ({date, onChange, name}) => (
    <div className="field">
        <div className="control has-icons-left">
            <input className="input" type="date" value={date} onChange={onChange} name={name}/>
            <span className="icon is-small is-left">
            <i className="fas"></i>
            </span>
        </div>
    </div>
)

export default DateFilter;