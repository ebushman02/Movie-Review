import React from 'react';

const TitleInput = ({ value, onChange }) => (
    <div>
        <label>Title:</label>
        <input type="text" value={value} onChange={(e) => onChange(e.target.value)} />
    </div>
);

export default TitleInput;