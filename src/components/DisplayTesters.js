import React from 'react'
import _ from 'lodash';
import { TestersWithDevices } from '../ApplauseData/index';
import { Tester } from '../utils/Tester';

class DisplayTesters extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      countries: [],
      devices: []
    }
  }

  renderUsers(){
    debugger;
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
      return _.orderBy( filteredTesters, ['experience'], ['desc'] ).map( tester => <Tester {...tester}/>)
  }

  render () {
    return (
      <div>
        {this.renderUsers()}
      </div>
    )
  }
}

export default DisplayTesters;
