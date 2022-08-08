import "./App.css";
import GoogleMapContainer from "./components/map/GoogleMapContainer";
import SidePanel from "./components/sidepanel/SidePanel";
import "./components/map/GoogleMapContainer.css";
import "./locationservice/GetUserLocation";
import Header from "./layout/header/Header";
import { useState } from "react";

function App() {
  const [returnedChargeDevices, setReturnedChargeDevices] = useState([]);

  const body = document.body.style;
  body.overflow = "hidden";

  return (
    <div className="App">
      <div>
        <Header />
      </div>
      <div className="[map-container]">
        <GoogleMapContainer devices={returnedChargeDevices} />
      </div>
      <div>
        <SidePanel
          devices={returnedChargeDevices}
          setDevices={setReturnedChargeDevices}
        />
      </div>
    </div>
  );
}

export default App;
