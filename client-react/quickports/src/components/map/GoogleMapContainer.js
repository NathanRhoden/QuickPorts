/* eslint-disable no-undef */
import { useState, useMemo, useEffect } from "react";
import {
  GoogleMap,
  useLoadScript,
  DirectionsRenderer,
} from "@react-google-maps/api";
import "../map/GoogleMapContainer.css";
import Markers from "./marker/Markers";
import Button from "@mui/material/Button";

export default function GoogleMapContainer(props) {
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [hasClicked, setHasClicked] = useState(false);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_API_KEY,
  });

  const ClickHandler = () => {
    calculateRoute();
  };

  function clearRoute() {
    setDirectionsResponse(null);
  }

  async function calculateRoute() {
    const directionsService = new google.maps.DirectionsService();

    const result = await directionsService.route({
      origin: new google.maps.LatLng(
        props.userSearchedCoordinate.lat,
        props.userSearchedCoordinate.lng
      ),
      destination: new google.maps.LatLng(51.411173, -0.055369),
      travelMode: google.maps.TravelMode.DRIVING,
    });
    console.log(result);

    setDirectionsResponse(result);
  }

  const getUserLocation = () => {
    async function success(pos) {
      const crd = await pos.coords;
      setCoordinates({ lat: crd.latitude, lng: crd.longitude });
    }
    //TODO: This must be able to catch errors // user did not  give permission to access this location
    navigator.geolocation.getCurrentPosition(success);
  };

  if (!isLoaded) return <div>Loading...!</div>;
  return <InitMap />;

  function InitMap() {
    const [coordinates, setCoordinates] = useState({
      lat: 51.385979,
      lng: -0.092806,
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
      if (!props.userHasSearched) {
        getUserLocation();
        console.log("YOUR LOCATION");
      }
      if (props.userHasSearched) {
        setCoordinates({
          lat: props.userSearchedCoordinate.lat,
          lng: props.userSearchedCoordinate.lng,
        });

        console.log("COORDINATES SET");
      }
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
        >
          <Button
            sx={{ margin: "20px", width: 200, height: 50 }}
            variant="contained"
            onClick={ClickHandler}
          >Get Directions</Button>
          <Button
            sx={{ margin: "20px", width: 200, height: 50 }}
            variant="contained"
            onClick={clearRoute}
          >
            Clear!
          </Button>
          {directionsResponse && (
            <DirectionsRenderer directions={directionsResponse} />
          )}
          {props.devices.length > 0 && (
            <Markers devicelist={props.devices[0]} />
          )}
        </GoogleMap>
      </div>
    );
  }
}
