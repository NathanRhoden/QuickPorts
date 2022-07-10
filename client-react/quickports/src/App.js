import "./App.css";
import GoogleMapContainer from "./components/map/GoogleMapContainer";
import SidePanel from "./components/sidepanel/SidePanel";
import "./components/map/GoogleMapContainer.css";
import "./locationservice/GetUserLocation";
import Header from "./layout/header/Header";


function App() {
  const mapConfig = {
    zoom: 13,
    center: { lat: 51.507351, lng: -0.127758 },
  };

  return (
    <div className="App">
      <div>
        <Header />
      </div>
      <div className="[map-container]">
        <GoogleMapContainer zoom={mapConfig.zoom} />
      </div>
      <div>
        <SidePanel />
      </div>
    </div>
  );
}

export default App;
