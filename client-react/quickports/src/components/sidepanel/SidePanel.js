import "./SidePanel.css";
import "../sidepanel/searchbar/SearchBar.css";
import Devices from "./deviceCard/Devices";
import SearchBar from "./searchbar/Searchbar";


const SidePanel = (props) => {
  const mockDevices = [
    
  ];

  //Lifted state from the searchBar component
  //const [returnedChargeDevices, setReturnedChargeDevices] = useState([]);

 //console.log(returnedChargeDevices[0]);
  //console.log(mockDevices);

  return (
    <div className="panelBody">
      <div className="SearchBarBody">
        <SearchBar setDevices={props.setDevices}/>
      </div>
      <div className="card-container">
        <section>
          {props.devices.length > 0 && (
            <Devices devicelist={props.devices[0]} />
          )}
          {props.devices.length === 0 && (
            <Devices devicelist={mockDevices} />
          )}
        </section>
      </div>
    </div>
  );
};

export default SidePanel;
