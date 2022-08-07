import { useState, useMemo, useEffect } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import "../map/GoogleMapContainer.css";

export default function GoogleMapContainer(props) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_API_KEY,
  });

  const myPlaces = [
    { id: "place1", pos: { lat: 39.09366509575983, lng: -94.58751660204751 } },
    { id: "place2", pos: { lat: 39.10894664788252, lng: -94.57926449532226 } },
    { id: "place3", pos: { lat: 39.07602397235644, lng: -94.5184089401211 } }
  ];

  if (!isLoaded) return <div>Loading...!</div>;
  return <Home />;

  function Home() {
    const [coordinates, setCoordinates] = useState({ lat: 51.543742, lng: -0.244046 });

    const getUserLocation = () => {
      async function success(pos) {
        const crd = await pos.coords;
        setCoordinates({ lat: crd.latitude, lng: crd.longitude });
      }

      navigator.geolocation.getCurrentPosition(success);
    };

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
        zoom={props.zoom}
        center={{ lat: coordinates.lat, lng: coordinates.lng }}
        mapContainerClassName="map-container"
      >
        {myPlaces.map(place => ( <MarkerF 
          key={place.id}
          position={place.pos}
          />))}
        <MarkerF position={centerMarker} />
      </GoogleMap>
    );
  }
}
