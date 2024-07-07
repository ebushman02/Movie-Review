import React from 'react';

const RatingInput = ({ value, onChange }) => (
    <div>
        <label>Rating:</label>
        <input type="text" value={value} onChange={(e) => onChange(e.target.value)} />
    </div>
);

export default RatingInput;