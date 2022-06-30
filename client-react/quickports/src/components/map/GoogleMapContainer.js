import { useMemo } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import "../map/GoogleMapContainer.css";

export default function GoogleMapContainer(props) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLEMAPS_JS_API_KEY,
  });

  if (!isLoaded) return <div>Loading...!</div>;
  return <Home />;

  function Home() {
    const centerMarker = useMemo(() => ({ lat: 51.507351, lng: -0.127758 }), []);


    return (
      <GoogleMap
        zoom={props.zoom}
        center={{ lat: props.center.lat, lng: props.center.lng }}
        mapContainerClassName="map-container"
      >
        <MarkerF
          position={centerMarker} 
          
        />
      </GoogleMap>
    );
  }
}
