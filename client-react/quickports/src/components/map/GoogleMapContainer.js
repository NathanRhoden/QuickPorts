import { useState, useMemo , useEffect} from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import "../map/GoogleMapContainer.css";

export default function GoogleMapContainer(props) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_API_KEY,
  });



  if (!isLoaded) return <div>Loading...!</div>;
  return <Home />;

  
  function Home() {
    const [coordinates, setCoordinates] = useState({ lat: 90, lng: 90 });
    
    const getUserLocation = () => {
      async function success(pos) {
        const crd = await pos.coords;
        setCoordinates({ lat: crd.latitude, lng: crd.longitude });
        console.log(crd.latitude, crd.longitude);
      }
  
      navigator.geolocation.getCurrentPosition(success);
    };

    useEffect(() => {
      getUserLocation();
    }, []);

    
    const centerMarker = useMemo(
      () => ({ lat: 51.507351, lng: -0.127758 }),
      []
    );
    
    return (
      <GoogleMap
        zoom={props.zoom}
        center={{ lat: coordinates.lat , lng: coordinates.lng }}
        mapContainerClassName="map-container"
      >
        <MarkerF position={centerMarker} />
      </GoogleMap>
    );
  }
}
