import React from 'react';
import { Countries } from '../ApplauseData/index';
import { Checkbox } from '../utils/Checkbox';

export const DisplayCountries = ({countries, onCountryChange}) => {
  return Countries.map( country => (
    <Checkbox
      className="checkbox"
      label={country}
      checked={countries.includes(country)}
      onChange={()=> {onCountryChange(country)}}
      />
  ))
}
