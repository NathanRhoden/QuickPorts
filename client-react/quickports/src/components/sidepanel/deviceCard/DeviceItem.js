const DeviceItem = (props) => {
  return (
    <div>
      <h4>{props.buildingNumber} {props.address}</h4>
      <h4>{props.voltageInformation}</h4>
      <h4>{props.connectorType}</h4>
    </div>
  );
};
export default DeviceItem;
