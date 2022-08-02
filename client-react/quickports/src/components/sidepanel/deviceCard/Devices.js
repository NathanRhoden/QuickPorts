import DeviceCard from "./DeviceCard";

/*
{props.devices.map(device => <DeviceCard address={device.address} deviceName=
            {device.deviceName} voltage={device.voltage} />)}
*/

const Devices = (props) =>{
    return (
    <div>
      {props.devicelist.map(device => <DeviceCard key={device.address.toString()} address={device.address} deviceName=
            {device.deviceName} voltage={device.voltage} />)}
    </div>);

}

export default Devices;