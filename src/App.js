import React, { Component } from 'react';

import './App.css';
import _ from 'lodash';
import { TestersWithDevices, Countries, AppDevices } from './ApplauseData/index';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      countries: [],
      devices: []
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

  handleDeviceOnChange(device) {
    debugger;
    const { devices } = this.state
    let newDevice = devices
    if ( devices.includes(device)){
      const deviceIndex = newDevice.indexOf(device)
      newDevice.splice(deviceIndex, 1)
    } else {
      newDevice.push(device)
    }
    this.setState({
      devices: newDevice
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

  renderDevicesCheckboxes() {
    const { devices } = this.state
    return AppDevices.map( device => (
      <Checkbox
        label={device.description}
        checked={devices.includes(device.deviceId)}
        onChange={() => {this.handleDeviceOnChange(device.deviceId)}}
        />
    ))
  }

  renderUsers(){
    const{ countries, devices } = this.state
    const filteredTesters =  TestersWithDevices.filter( tester => {
      if(!countries.length){
        return tester
      }
      if(countries.includes( tester.country)){
        return tester
      }
    }).filter( tester => {
      const filteredDevices = tester.devices.filter( d => {
        if( devices.includes(d.deviceId)){
          return d
        }
      })
      let newTester = tester
      newTester.filteredDevices = devices.length ? filteredDevices : tester.devices
      newTester.experience = newTester.devices
      .map( d => d.bugs.length)
      .reduce(( total = 0, current)=> {
        return total + current
      })
      if( newTester.filteredDevices.length > 0){
        return newTester
      }
    })
    return _.orderBy( filteredTesters, ['experience'], ['desc'] ).map( tester => <User {...tester}/>)
  }

  render() {
    return (
      <div className="App">
        <section className="container">
          <section className="header">
            <h1>Applause</h1>
          </section>
          <section className="search-criteria">
            {this.renderCountiresCheckboxes()}
            {this.renderDevicesCheckboxes()}
          </section>
          <section className="tester">
            {this.renderUsers()}
          </section>
        </section>
      </div>
    );
  }
}

export default App;

const User = ({ firstName, lastName, country, filteredDevices, experience }) => {
  return (
  <div>
    <h3>{`${firstName} ${lastName}`}</h3>
    <p>{country}</p>
    <span style={{color: 'blue', fontWeight: 'bold'}}>EXP:{experience}</span>
    {filteredDevices.map( d => <p>{`${d.description} Bugs:${d.bugs.length}`}</p>)}
  </div>
  )
}
const Checkbox = ({label, checked, onChange}) => (
  <label>
    <input type='checkbox' onChange={onChange} checked={checked}/>
      {label}
  </label>
)
