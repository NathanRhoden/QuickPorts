import { useState, useMemo, useEffect, useCallBack } from "react";
import {
  GoogleMap,
  useLoadScript,
  DirectionsRenderer,
} from "@react-google-maps/api";
import "../map/GoogleMapContainer.css";
import Markers from "./marker/Markers";

export default function GoogleMapContainer(props) {

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_API_KEY,
  });

  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [hasClicked, setHasClicked] = useState(false);

  const ClickHandler = () => {
    setHasClicked(true);
  };

  async function calculateRoute() {
    const directionsService = new google.maps.DirectionsService();

    const result = await directionsService.route({
      origin: new google.maps.LatLng(51.385979, -0.092806),
      destination: new google.maps.LatLng(51.411173, -0.055369),
      travelMode: google.maps.TravelMode.DRIVING,
    });
    console.log(result);

    setDirectionsResponse(result);
  }

  if (!isLoaded) return <div>Loading...!</div>;
  return <InitMap />;

  function InitMap() {
    const [coordinates, setCoordinates] = useState({
      lat: 51.411173,
      lng: -0.055369,
    });

    const getUserLocation = () => {
      async function success(pos) {
        const crd = await pos.coords;
        setCoordinates({ lat: crd.latitude, lng: crd.longitude });
      }
      //TODO: This must be able to catch errors // user did not  give permission to access this location
      navigator.geolocation.getCurrentPosition(success);
    };

    useEffect(() => {
      if(hasClicked){
        calculateRoute();
      }
      setHasClicked(false);
    }, [hasClicked])
  

    useEffect(() => {
      if (!props.userHasSearched) {
        getUserLocation();
      } else
        setCoordinates({
          lat: props.userSearchedCoordinate.lat,
          lng: props.userSearchedCoordinate.lng,
        });
    }, []);

  
    //TEST-MARKER PROPS SHOULD BE TAKEN FROM ANOTHER STATE
    const centerMarker = useMemo(
      () => ({ lat: coordinates.lat, lng: coordinates.lng }),
      [coordinates]
    );

    return (
      <div>
        <GoogleMap
          zoom={14}
          center={{ lat: coordinates.lat, lng: coordinates.lng }}
          mapContainerClassName="map-container"
          onClick={ClickHandler}
        >
          {directionsResponse && <DirectionsRenderer  directions={directionsResponse}/>}
          {props.devices.length > 0 && (
            <Markers devicelist={props.devices[0]} />
          )}
        </GoogleMap>
      </div>
    );
  }
}
