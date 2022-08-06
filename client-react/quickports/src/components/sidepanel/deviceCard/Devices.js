import DeviceCard from "./DeviceCard";

const Devices = (props) =>{
    return (
    <div>
      {props.devicelist.map(device => <DeviceCard key={device.chargeDeviceId} 
            address={device.location.address.streetName}  voltageInformation={device.connector.chargeMethod} />)}
    </div>);

}

export default Devices;