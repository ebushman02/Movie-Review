import React from 'react';

const RuntimeInput = ({ value, onChange }) => (
    <div>
        <label>Runtime:</label>
        <input type="text" value={value} onChange={(e) => onChange(e.target.value)} />
    </div>
);

export default RuntimeInput;