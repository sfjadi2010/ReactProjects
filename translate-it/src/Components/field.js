import React from 'react'

const Field = ({value, onChange}) => (
    <div className="field">
        <h1>Translate App</h1>
        <label>Enter English</label>
        <input
            className="input"
            value={value}
            onChange={(e) => onChange(e.target.value)} />
    </div>
  );

export default Field