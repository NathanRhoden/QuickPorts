import "./App.css";
import GoogleMapContainer from "./components/map/GoogleMapContainer";
import SidePanel from "./components/sidepanel/SidePanel";
import "./components/map/GoogleMapContainer.css";
import "./locationservice/GetUserLocation";
import Header from "./layout/header/Header";
import { useState } from "react";

function App() {
  const [returnedChargeDevices, setReturnedChargeDevices] = useState([]);
  const [userSearchedCoordinate, setCoordinates] = useState({ lat: 0, lng: 0 });

  const [userHasSearched, setHasSearched] = useState(false);
  const [directionsResponse, setDirectionsResponse] = useState(null);

  const [cleared, setCleared] = useState(false);

  const [showMarkers, setShowMarkers] = useState(true);

  const body = document.body.style;
  body.overflow = "hidden";

  return (
    <div className="App">
      <div>
        <Header />
      </div>
      <div className="[map-container]">
        <GoogleMapContainer
          devices={returnedChargeDevices}
          userHasSearched={userHasSearched}
          userSearchedCoordinate={userSearchedCoordinate}
          setHasSearched={setHasSearched}
          directionsResponse={directionsResponse}
          setDirectionsResponse={setDirectionsResponse}
          setCleared={setCleared}
          showMarkers={showMarkers}
          setShowMarkers={setShowMarkers}
        />
      </div>
      <div>
        <SidePanel
          devices={returnedChargeDevices}
          setDevices={setReturnedChargeDevices}
          setCoordinates={setCoordinates}
          setHasSearched={setHasSearched}
          directionsResponse={directionsResponse}
          setDirectionsResponse={setDirectionsResponse}
          setCleared={setCleared}
          isCleared={cleared}
          showMarkers={showMarkers}
          setShowMarkers={setShowMarkers}
        />
      </div>
    </div>
  );
}

export default App;
