import { flexbox } from "@mui/system";
import { InfoWindow, MarkerF, useGoogleMap } from "@react-google-maps/api";
import { useState } from "react";

const Markers = (props) => {
  const [selectedMarker, setSelectedMarker] = useState();

  console.log(selectedMarker);

  const divStyle = {
    display: `flexbox`,
    alignItems: `center`,
    justifyContent: `center`,

    color: `black`,

    background: `white`,
    padding: 10,
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
            onClick={() => setSelectedMarker(device)}
          ></MarkerF>
        ))}
      </div>
      {selectedMarker && (
        <InfoWindow
          position={{
            lat: parseFloat(selectedMarker.location.latitude + 0.00020),
            lng: parseFloat(selectedMarker.location.longitude + + 0.00020),
          }}
          onCloseClick={() => setSelectedMarker(null)}
        >
          <div style={divStyle}>
            <h3>{selectedMarker.chargeDeviceId}</h3>
            <h4>Building Number : {selectedMarker.location.address.buildingNumber}</h4>
            <h4>Street Name : {selectedMarker.location.address.streetName}</h4>
            <h4>Postcode : {selectedMarker.location.address.postCode}</h4>
          </div>
        </InfoWindow>
      )}
    </div>
  );
};

export default Markers;
