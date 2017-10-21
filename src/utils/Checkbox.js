import React from 'react';

export const Checkbox = ({label, checked, onChange}) => (
  <label className="search-critera-item">
    <input type='checkbox' onChange={onChange} checked={checked}/>
      {label}
  </label>
)
