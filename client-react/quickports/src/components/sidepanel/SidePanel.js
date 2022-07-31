import "./SidePanel.css";
import '../sidepanel/searchbar/SearchBar.css';

import SearchBar from "./searchbar/Searchbar";
import { useState } from "react";


const SidePanel = () => {

  const [update  , setUpdateDevice] = useState({});

  //Lifted state from the searchBar component
  const [userSearchedCoordinates , setUserSearchedCoordinates] = useState({});


  return (
    <div className="panelBody">
      <div className="SearchBarBody">
        <SearchBar coordinates={setUserSearchedCoordinates}/>
      </div>
    </div>
  );
};

export default SidePanel;
