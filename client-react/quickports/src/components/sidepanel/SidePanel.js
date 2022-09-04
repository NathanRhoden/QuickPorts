import "./SidePanel.css";
import "../sidepanel/searchbar/SearchBar.css";
import Devices from "./deviceCard/Devices";
import SearchBar from "./searchbar/Searchbar";

const SidePanel = (props) => {
  const emptyDeviceList = [];

  return (
    <div className="panelBody">
      <div className="SearchBarBody">
        <SearchBar
          setDevices={props.setDevices}
          setCoordinates={props.setCoordinates}
          setHasSearched={props.setHasSearched}
          setDirectionsResponse={props.setDirectionsResponse}
          directionsResponse={props.directionsResponse}
          distance={props.distance}
          setDistance={props.setDistance}
          setCleared={props.setCleared}
          setShowMarkers={props.setShowMarkers}
        />
      </div>
      <div className="card-container">
        <section>
          {props.devices.length > 0 && (
            <Devices devicelist={props.devices[0]} />
          )}
          {props.devices.length === 0 && (
            <Devices devicelist={emptyDeviceList} />
          )}
          {props.isCleared && <div id="panel" />}
        </section>
      </div>
    </div>
  );
};

export default SidePanel;
