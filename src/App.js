import React, { Component } from 'react';

import './App.css';
import _ from 'lodash';
import { TestersWithDevices, Countries, AppDevices } from './ApplauseData/index';
import { DisplayDevices } from './components/DisplayDevices';
import { DisplayCountries } from './components/DisplayCountries';
import DisplayTesters from './components/DisplayTesters';


class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      countries: [],
      devices: []
    }
  }

  handleDeviceOnChange(device) {
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


  render() {
    return (
      <div className="App">
        <div className="container">
          <header className="head">
            <h1>Applause Demo</h1>
          </header>
          <div className="wrapper">
            <ul className="search-criteria">
              <li>
                <span>COUNTRIES:</span>
                <DisplayCountries className="search-critera item" onCountryChange={(country)=>{this.handleCountryOnChange(country)}} countries={this.state.countries}/>
              </li>
              <li>
                <span>DEVICES:</span>
                <DisplayDevices className="search-critera item" onDeviceChange={(device)=> {this.handleDeviceOnChange(device)}} devices={this.state.devices} />
              </li>
            </ul>

            <section className="testers-list">
              <div className="table">
                <ul className="testers-list-items">
                  <DisplayTesters {...this.state} />
                </ul>
              </div>
            </section>

          </div>
        </div>
      </div>
    );
  }
}

export default App;
