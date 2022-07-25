import "./SidePanel.css";
import '../sidepanel/searchbar/SearchBar.css';

import SearchBar from "./searchbar/Searchbar";
import { useState } from "react";


const SidePanel = () => {

  const [update  , setUpdateDevice] = useState({});

  return (
    <div className="panelBody">
      <div className="SearchBarBody">
        <SearchBar />
      </div>
    </div>
  );
};

export default SidePanel;
