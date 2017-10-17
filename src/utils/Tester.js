import React from 'react';

export const Tester = ({ firstName, lastName, country, filteredDevices, experience }) => {
  return (
  <div>
    <h3>{`${firstName} ${lastName}`}</h3>
    <p>{country}</p>
    <span style={{color: 'blue', fontWeight: 'bold'}}>EXP:{experience}</span>
    {filteredDevices.map( d => <p>{`${d.description} Bugs:${d.bugs.length}`}</p>)}
  </div>
  )
}
