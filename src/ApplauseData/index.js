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
      }).map( device => {
        let newDevice = Devices.find( d => d.deviceId === device.deviceId)
        newDevice.bugs = Bugs.filter( bug => {
          if(bug.testerId === tester.testerId && bug.deviceId === device.deviceId){
            return bug
          }
        })
        return newDevice
      })
      return tester
    })

export const Countries = _.uniq(Testers.map( tester => tester.country));

export const AppDevices = Devices;
