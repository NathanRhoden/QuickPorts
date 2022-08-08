import "./App.css";
import GoogleMapContainer from "./components/map/GoogleMapContainer";
import SidePanel from "./components/sidepanel/SidePanel";
import "./components/map/GoogleMapContainer.css";
import "./locationservice/GetUserLocation";
import Header from "./layout/header/Header";
import { useState } from "react";

function App() {
  const [returnedChargeDevices, setReturnedChargeDevices] = useState([]);
  const [userSearchedCoordinate , setCoordinates] = useState({lat : 0, lng : 0});

  const [userHasSearched , setHasSearched] = useState(false);

  const body = document.body.style;
  body.overflow = "hidden";

  console.log(userSearchedCoordinate);
  return (
    <div className="App">
      <div>
        <Header />
      </div>
      <div className="[map-container]">
        <GoogleMapContainer 
          devices={returnedChargeDevices} 
          userHasSearched={userHasSearched}
          userSearchedCoordinate={userSearchedCoordinate}/>
      </div>
      <div>
        <SidePanel
          devices={returnedChargeDevices}
          setDevices={setReturnedChargeDevices}
          setCoordinates={setCoordinates}
          setHasSearched={setHasSearched}
        />
      </div>
    </div>
  );
}

export default App;
