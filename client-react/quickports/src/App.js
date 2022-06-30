import './App.css';
import GoogleMapContainer from './components/map/GoogleMapContainer';


function App() {

  const mapConfig = {

    zoom: 13 , 
    center: { lat: 51.507351, lng: -0.127758 }
  }


  return (
    <div className="App">
        <GoogleMapContainer zoom={mapConfig.zoom} center={mapConfig.center}/>
    </div>
  );
}

export default App;
