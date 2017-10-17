import React from 'react';

export const Checkbox = ({label, checked, onChange}) => (
  <label>
    <input type='checkbox' onChange={onChange} checked={checked}/>
      {label}
  </label>
)
