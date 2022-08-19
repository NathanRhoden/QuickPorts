import { InfoWindow, MarkerF } from "@react-google-maps/api";

const Markers = (props) => {

  return (
    <div>
      {props.devicelist.map((device) => (
        <MarkerF
          key={device.chargeDeviceId}
          position={{
            lat: parseFloat(device.location.latitude),
            lng: parseFloat(device.location.longitude),
          }}
          onClick={() => props.setSelectedMarker(device)}
        />
      ))}

    </div>
  );
};

export default Markers;
