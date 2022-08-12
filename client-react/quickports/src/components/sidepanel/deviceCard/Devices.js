import DeviceCard from "./DeviceCard";

const Devices = (props) => {
  return (
    <div>
      {props.devicelist.map((device) => (
        <DeviceCard
          key={device.chargeDeviceId}
          buildingNumber={device.location.address.buildingNumber}
          streetName={device.location.address.streetName}
          voltageInformation={device.connector.chargeMethod}
          connectorType={device.connector.connectorType}
        />
      ))}
    </div>
  );
};

export default Devices;
