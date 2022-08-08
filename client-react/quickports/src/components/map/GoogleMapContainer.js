import { useState, useMemo, useEffect } from "react";
import { GoogleMap, useLoadScript} from "@react-google-maps/api";
import "../map/GoogleMapContainer.css";
import Markers from "./marker/Markers";

export default function GoogleMapContainer(props) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_API_KEY,
  });

  if (!isLoaded) return <div>Loading...!</div>;
  return <InitMap />;

  function InitMap() {
    const [coordinates, setCoordinates] = useState({ lat: 90, lng: 90 });
    

    const getUserLocation = () => {
      async function success(pos) {
        const crd = await pos.coords;
        setCoordinates({ lat: crd.latitude, lng: crd.longitude });
      }
      //TODO: This must be able to catch errors // user did not  give permission to access this location
      navigator.geolocation.getCurrentPosition(success);
    };

    
    useEffect(() => {
      if(!props.userHasSearched){
        getUserLocation();
      }else setCoordinates({ lat: props.userSearchedCoordinate.lat, lng: props.userSearchedCoordinate.lng });
      
      
    }, []);
    
    //TEST-MARKER PROPS SHOULD BE TAKEN FROM ANOTHER STATE
    const centerMarker = useMemo(
      () => ({ lat: coordinates.lat, lng: coordinates.lng }),
      [coordinates]
    );

    return (
      <GoogleMap
        zoom={14}
        center={{ lat: coordinates.lat, lng: coordinates.lng }}
        mapContainerClassName="map-container"
      >
        {props.devices.length > 0 && <Markers devicelist={props.devices[0]} />}
      </GoogleMap>
    );
  }
}
