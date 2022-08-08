import { useState, useMemo, useEffect } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import "../map/GoogleMapContainer.css";
import Markers from "./marker/Markers";

export default function GoogleMapContainer( props ) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_API_KEY,
  });

  const myPlaces = [
   
  ];

  if (!isLoaded) return <div>Loading...!</div>;
  return <Home />;

  function Home() {
    const [coordinates, setCoordinates] = useState({
      lat: 90,
      lng: 90,
    });

    const getUserLocation = () => {
      async function success(pos) {
        const crd = await pos.coords;
        setCoordinates({ lat: crd.latitude, lng: crd.longitude });
      }

      navigator.geolocation.getCurrentPosition(success);
    };

    var testArray= [props.devices[0]];

    useEffect(() => {
      getUserLocation();
      
    }, []);

    //TEST-MARKER PROPS SHOULD BE TAKEN FROM ANOTHER STATE
    const centerMarker = useMemo(
      () => ({ lat: coordinates.lat, lng: coordinates.lng }),
      [coordinates]
    );


    return (
      <GoogleMap
        zoom={7}
        center={{ lat: coordinates.lat, lng: coordinates.lng }}
        mapContainerClassName="map-container"
      >

          {props.devices.length > 0 && (
            <Markers devicelist={props.devices[0]} />
          )}
          {props.devices.length === 0 && (
            <Markers devicelist={myPlaces} />
          )}
       
        
        <MarkerF position={centerMarker} />
      </GoogleMap>
    );
  }
}
