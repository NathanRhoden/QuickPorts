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
    
    const [coordinates, setCoordinates] = useState({ lat: undefined, lng: undefined });
    
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

    //TEST-MARKER PROPS SHOULD BE TAKEN FROM ANOTHER STATE
    const centerMarker = useMemo(
      () => ({ lat: coordinates.lat, lng: coordinates.lng}),
      [coordinates]
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
