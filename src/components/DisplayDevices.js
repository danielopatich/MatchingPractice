import React from 'react'

import { AppDevices } from '../ApplauseData/index';
import { Checkbox } from '../utils/Checkbox';

class DisplayDevices extends React.Component {

  constructor(props){
    super(props)
    this.state = {
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

  render () {
    return (
      <div>
        {this.renderDevicesCheckboxes()}
      </div>
    )
  }
}

export default DisplayDevices;
