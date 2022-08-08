import "./SidePanel.css";
import "../sidepanel/searchbar/SearchBar.css";
import Devices from "./deviceCard/Devices";
import SearchBar from "./searchbar/Searchbar";

const SidePanel = (props) => {
  const mockDevices = [];

  return (
    <div className="panelBody">
      <div className="SearchBarBody">
        <SearchBar
          setDevices={props.setDevices}
          setCoordinates={props.setCoordinates}
          setHasSearched={props.setHasSearched}
        />
      </div>
      <div className="card-container">
        <section>
          {props.devices.length > 0 && (
            <Devices devicelist={props.devices[0]} />
          )}
          {props.devices.length === 0 && <Devices devicelist={mockDevices} />}
        </section>
      </div>
    </div>
  );
};

export default SidePanel;
