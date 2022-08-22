/* eslint-disable no-undef */
import { useState, useRef, useEffect } from "react";
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

  //Persisted reference to the selected device set by the MarkerF component
  const selectedMarker = useRef(null);

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
    console.log(selectedMarker.current.location.latitude);

    const directionsService = new google.maps.DirectionsService();

    const result = await directionsService.route({
      origin: new google.maps.LatLng(
        props.userSearchedCoordinate.lat,
        props.userSearchedCoordinate.lng
      ),
      destination: new google.maps.LatLng(
        selectedMarker.current.location.latitude,
        selectedMarker.current.location.longitude
      ),
      travelMode: google.maps.TravelMode.DRIVING,
    });
    console.log(result);
    setDirectionsResponse(result);
  }

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
      }
      if (props.userHasSearched) {
        setCoordinates({
          lat: props.userSearchedCoordinate.lat,
          lng: props.userSearchedCoordinate.lng,
        });
      }
    }, []);

    return (
      <div>
        <GoogleMap
          id="QuickPorts Map"
          zoom={13}
          center={{ lat: coordinates.lat, lng: coordinates.lng }}
          mapContainerClassName="map-container"
        >
          <Button
            sx={{ margin: "20px", width: 200, height: 50 }}
            variant="contained"
            onClick={ClickHandler}
          >
            Get Directions
          </Button>
          <Button
            sx={{ margin: "20px", width: 200, height: 50 }}
            variant="contained"
            onClick={clearRoute}
          >
            Clear
          </Button>
          {directionsResponse && (
            <DirectionsRenderer directions={directionsResponse} />
          )}

          {props.devices.length > 0 && (
            <Markers
              devicelist={props.devices[0]}
              setMarker={selectedMarker}
            ></Markers>
          )}
        </GoogleMap>
      </div>
    );
  }
}
