import { Bugs } from './bugs';
import { Devices } from './devices';
import { TestersDevices } from './testers-devices';
import { Testers } from './testers';
import _ from "lodash";

export const TestersWithDevices = Testers.map( tester => {
      let newTester = tester
      newTester.devices = TestersDevices.filter( td => {
        if( td.testerId === tester.testerId){
          return td
        }
        // map over devices and return new array of devices matched to their tester
      }).map( device => {
        let newDevice = Devices.find( d => d.deviceId === device.deviceId)
        // grabs first device in array that satisfies provided match
        newDevice.bugs = Bugs.filter( bug => {
          // use ^ device to return bug that matches tester and device
          if(bug.testerId === tester.testerId && bug.deviceId === device.deviceId){
            return bug
          }
        })
        return newDevice
      })
      return tester
    })

export const Countries = _.uniq(Testers.map( tester => tester.country));
// Give us a duplicate-free array of Testers with their country

export const AppDevices = Devices;
