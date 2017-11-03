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
        // may need to return this to false
      }
      if(countries.includes( tester.country )){
        return tester
      }
      // Take matched tester(s) with bug(s) and device(s) and filter them based on if there is
      // no country selected, return tester. If a country is selected filter tester with their country
      // and further filter them based on their matched devices.
    }).filter( tester => {
      const filteredDevices = tester.devices.filter( d => {
        if( devices.includes(d.deviceId)){
          return d
        }
        // filter devices with id's
      })
      let newTester = tester
      //  Now we are taking the value based on if the user has a country and device that has been matched
      //  and returning devices first. Then using that filteredDevices value to add an 'experience' value to.
      newTester.filteredDevices = devices.length ? filteredDevices : tester.devices
      newTester.experience = newTester.filteredDevices && newTester.filteredDevices.length ? newTester.filteredDevices
      .map( d => d.bugs.length)
      // iterate over that array of filtered devices and bugs and return the length. Use that length to reduce the possible
      // multiple device selections to a single value. This will also take care of the issue of making the experience points adjust
      // to the right amount of bugs based on how many devices have been selected.
      .reduce(( total = 0, current)=> {
        return total + current
      }) : 0;

      // research why this is needed. if you take this conditional out it adds a tester with no exp
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
