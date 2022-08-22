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
    border: `1px solid #ccc`,
    padding: 15,
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
            lat: parseFloat(selectedMarker.location.latitude),
            lng: parseFloat(selectedMarker.location.longitude),
          }}
          onCloseClick={() => setSelectedMarker(null)}
        >
          <div style={divStyle}>
            <h3>{selectedMarker.chargeDeviceId}</h3>
          </div>
        </InfoWindow>
      )}
    </div>
  );
};

export default Markers;
