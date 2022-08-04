import "./SidePanel.css";
import "../sidepanel/searchbar/SearchBar.css";
import Devices from "./deviceCard/Devices";
import SearchBar from "./searchbar/Searchbar";
import { useEffect, useState } from "react";

const SidePanel = () => {
  const mockDevices = [
    { address: "123.123.123", deviceName: "deviceName", voltage: "100kwh" },
    { address: "123.534.123.34", deviceName: "deviceName", voltage: "120kwh" },
    {
      address: "123.534.123.34.636236.234231",
      deviceName: "deviceName",
      voltage: "120kwh",
    },
    {
      address: "123.534.123.34.636236.2342342",
      deviceName: "deviceName",
      voltage: "120kwh",
    },
    {
      address: "123.534.123.34.636236.2342343",
      deviceName: "deviceName",
      voltage: "120kwh",
    },
    {
      address: "123.534.123.34.636236.2342344",
      deviceName: "deviceName",
      voltage: "120kwh",
    },
    {
      address: "123.534.123.34.636236.2342345",
      deviceName: "deviceName",
      voltage: "120kwh",
    },
    {
      address: "123.534.123.34.636236.234234f",
      deviceName: "deviceName",
      voltage: "120kwh",
    },
    {
      address: "123.534.123.34.636236.234234d",
      deviceName: "deviceName",
      voltage: "120kwh",
    },
    {
      address: "123.534.123.34.636236.234234a",
      deviceName: "deviceName",
      voltage: "120kwh",
    },
  ];

  const [update, setUpdateDevice] = useState({});

  //Lifted state from the searchBar component
  const [userSearchedCoordinates, setUserSearchedCoordinates] = useState([]);
  
  console.log(userSearchedCoordinates);

  return (
    <div className="panelBody">
      <div className="SearchBarBody">
        <SearchBar
          setDevices={setUserSearchedCoordinates}
          devices={userSearchedCoordinates}
        />
      </div>
      <div className="card-container">
        <Devices devicelist={mockDevices} />
      </div>
    </div>
  );
};

export default SidePanel;
