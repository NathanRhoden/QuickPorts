import { InfoWindow, MarkerF } from "@react-google-maps/api";
import { useState } from "react";

const Markers = (props) => {
  const [selectedMarker, setSelectedMarker] = useState();

  const divStyle = {
    display: `flexbox`,
    alignItems: `center`,
    justifyContent: `center`,

    color: `black`,

    background: `white`,
    padding: 10,
  };

  const onClick = (device) => {
    setSelectedMarker(device);
    props.setMarker.current = device;
  };

  return (
    <div>
      <div>
        {props.devicelist.map((device) => (
          <MarkerF
            key={device.chargeDeviceId}
            position={{
              lat: parseFloat(device.location.latitude),
              lng: parseFloat(device.location.longitude),
            }}
            onClick={() => onClick(device)}
          ></MarkerF>
        ))}
      </div>
      {selectedMarker && (
        <InfoWindow
          position={{
            lat: parseFloat(selectedMarker.location.latitude),
            lng: parseFloat(selectedMarker.location.longitude),
          }}
          onCloseClick={() => setSelectedMarker(null)}
        >
          <div style={divStyle}>
            <h3>{selectedMarker.chargeDeviceId}</h3>
            <h4>
              Building Number : {selectedMarker.location.address.buildingNumber}
            </h4>
            <h4>Street Name : {selectedMarker.location.address.streetName}</h4>
            <h4>Postcode : {selectedMarker.location.address.postCode}</h4>
          </div>
        </InfoWindow>
      )}
    </div>
  );
};

export default Markers;
