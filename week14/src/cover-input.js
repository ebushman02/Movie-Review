import React from 'react';

const CoverInput = ({ value, onChange }) => (
    <div>
        <label>Cover:</label>
        <input type="text" value={value} onChange={(e) => onChange(e.target.value)} />
    </div>
);

export default CoverInput;