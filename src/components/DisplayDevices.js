import React from 'react'
import { AppDevices } from '../ApplauseData/index';
import { Checkbox } from '../utils/Checkbox';

export const DisplayDevices = ({ devices, onDeviceChange }) => {
  return AppDevices.map( device => (
    <Checkbox
      className="checkbox"
      label={device.description}
      checked={devices.includes(device.deviceId)}
      onChange={() => {onDeviceChange(device.deviceId)}}
      />
  ))
}
