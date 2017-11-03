// Stateless functional componenet
import React from 'react';

export const Tester = ({ firstName, lastName, country, filteredDevices, experience }) => {
  return (
  <li>
  <div className="testers-item">
    <h3 className="name">{`${firstName} ${lastName}`}</h3>
    <p>Location: {country}</p>
    <span className="experience">EXP:{experience}</span>
    {filteredDevices.map( d => <p>{`${d.description} Bugs:${d.bugs.length}`}</p>)}
  </div>
  </li>
  )
}
