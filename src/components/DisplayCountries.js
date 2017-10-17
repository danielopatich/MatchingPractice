import React from 'react'

import { Countries } from '../ApplauseData/index';
import { Checkbox } from '../utils/Checkbox';


class DisplayCountries extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      countries: []
    }
  }

  handleCountryOnChange(country){
    const { countries } = this.state
    let newCountries = countries
    if( countries.includes(country)){
      const countryIndex = newCountries.indexOf(country)
      newCountries.splice(countryIndex, 1 )
    } else {
      newCountries.push( country )
    }
    this.setState({
      countries: newCountries
    })
  }

  renderCountiresCheckboxes(){
    const { countries } = this.state
    return Countries.map( country => (
      <Checkbox
        label={country}
        checked={countries.includes(country)}
        onChange={()=>{this.handleCountryOnChange(country)}}
        />
    ))
  }

  render () {
    return (
      <div>
        {this.renderCountiresCheckboxes()}
      </div>
    )
  }
}

export default DisplayCountries;
