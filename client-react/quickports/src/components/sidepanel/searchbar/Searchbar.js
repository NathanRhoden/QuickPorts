import Input from "@mui/material/Input";
import SearchIcon from "@mui/icons-material/Search";

import convertPostCodeToCoordinate from "../../../locationservice/PostCodeConversion";

import "./SearchBar.css";
import { useState } from "react";

const SearchBar = (props) => {
  //State of User Input
  const [input, setInput] = useState("");

  const inputConversion = async (postcode) => {
    let jsonData = await convertPostCodeToCoordinate(postcode);
    return jsonData.result;
  };

  const submitHandler = async (e) => {
    //Function prevents the page from reloading on submit
    e.preventDefault();
    const result = await inputConversion(input);
    props.setCoordinates({lat : result.latitude, lng : result.longitude});
    props.setHasSearched(true);
    fetch(
      `http://localhost:8080/api/v1/points/distance?d=10&latitude=${result.latitude}&longitude=${result.longitude}`
    )
      .then((response) => response.json())
      .then((data) => props.setDevices([data]));
  };

  return (
    <div>
      <SearchIcon />
      <div>
        <form onSubmit={submitHandler}>
          <Input
            type="text"
            placeholder="Search"
            value={input}
            fullWidth={true}
            onChange={(e) => setInput(e.target.value)}
          />
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
