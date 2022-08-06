import "./SidePanel.css";
import "../sidepanel/searchbar/SearchBar.css";
import Devices from "./deviceCard/Devices";
import SearchBar from "./searchbar/Searchbar";
import { useState } from "react";

const SidePanel = () => {
  const mockDevices = [
    
  ];

  //Lifted state from the searchBar component
  const [returnedChargeDevices, setReturnedChargeDevices] = useState([]);

  console.log(returnedChargeDevices[0]);
  console.log(mockDevices);

  return (
    <div className="panelBody">
      <div className="SearchBarBody">
        <SearchBar setDevices={setReturnedChargeDevices} />
      </div>
      <div className="card-container">
        <section>
          {returnedChargeDevices.length > 0 && (
            <Devices devicelist={returnedChargeDevices[0]} />
          )}
          {returnedChargeDevices.length === 0 && (
            <Devices devicelist={mockDevices} />
          )}
        </section>
      </div>
    </div>
  );
};

export default SidePanel;
