const DeviceItem = (props) => {
  return (
    <div>
      <h4>{props.address}</h4>
      <h4>{props.deviceName}</h4>
      <h4>{props.voltage}</h4>
    </div>
  );
};
export default DeviceItem;
