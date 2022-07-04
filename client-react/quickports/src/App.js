import "./App.css";
import GoogleMapContainer from "./components/map/GoogleMapContainer";
import SearchColumn from "./components/searchformbar/SearchColumn";
import "./components/map/GoogleMapContainer.css";

function App() {
  const mapConfig = {
    zoom: 13,
    center: { lat: 51.507351, lng: -0.127758 },
  };

  return (
    <div className="App">
      <div className="[map-container]">
        <GoogleMapContainer zoom={mapConfig.zoom} center={mapConfig.center} />
      </div>
      <div>
        <SearchColumn />
      </div>
    </div>
  );
}

export default App;
