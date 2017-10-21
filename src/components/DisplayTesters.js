import React from 'react'
import _ from 'lodash';
import { TestersWithDevices } from '../ApplauseData/index';
import { Tester } from '../utils/Tester';

class DisplayTesters extends React.Component {

  renderUsers(){
    const{ countries, devices } = this.props
    const filteredTesters =  TestersWithDevices.filter( tester => {
      if(!countries.length){
        return tester
      }
      if(countries.includes( tester.country )){
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
      newTester.experience = newTester.filteredDevices && newTester.filteredDevices.length ? newTester.filteredDevices
      .map( d => d.bugs.length)
      .reduce(( total = 0, current)=> {
        return total + current
      }) : [];
      if( newTester.filteredDevices.length > 0){
        return newTester
      }
    })
      if (countries.length || devices.length) {
        return _.orderBy( filteredTesters, ['experience'], ['desc'] ).map( tester => <Tester {...tester}/>)
      } else {
        return <div>Please select one or more countries, devices, or both.</div>
      }
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
