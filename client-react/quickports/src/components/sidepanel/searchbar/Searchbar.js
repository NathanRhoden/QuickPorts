import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import convertPostCodeToCoordinate from "../../../locationservice/PostCodeConversion";

import "./SearchBar.css";
import { TextField } from "@mui/material";
import { useState } from "react";

const SearchBar = (props) => {
  //State of User Input
  const [input, setInput] = useState("");

  //state for distance from origin selected by the user.
  const [distance, setDistance] = useState(10);


  const inputConversion = async (postcode) => {
    let jsonData = await convertPostCodeToCoordinate(postcode);
    return jsonData.result;
  };

  const fetchData = (result) => {
    fetch(
      `${process.env.REACT_APP_ENDPOINT}${distance}&latitude=${result.latitude}&longitude=${result.longitude}`
    )
      .then((response) => response.json())
      .then((data) => props.setDevices([data]));
  };

  const submitHandler = async (e) => {
    //Function prevents the page from reloading on submit
    e.preventDefault();
    //props.setHasSearched(true);
   

    if (props.directionsResponse != null) {
      props.setShowMarkers(true);
      props.setDirectionsResponse(null);
      props.setCleared(true);
    }

    //(/\s+/g, '') expression to remove white spaces from post code
    //distance set to 10 miles
    const postCodeCoordinates = await inputConversion(input.replace(/\s+/g, ""));
    fetchData(postCodeCoordinates);
   
    setTimeout(() => {
      props.setCoordinates({ lat: postCodeCoordinates.latitude, lng: postCodeCoordinates.longitude });
      props.setHasSearched(true);
    } ,1000);   
  };
  

  //change handlers for the distanceInMiles
  const handleChange = (e) => {
    setDistance(e.target.value);
  };

  return (
    <div className="SearchbarBody">
      <div className="icon">
        <SearchIcon />
      </div>
      <div className="bar">
        <Box>
          <FormControl fullWidth>
            <form onSubmit={submitHandler}>
              <TextField
                label="Postcode"
                id="outlined-basic"
                variant="outlined"
                type="text"
                value={input}
                fullWidth={true}
                onChange={(e) => setInput(e.target.value)}
              />
            </form>
          </FormControl>
        </Box>
      </div>
      <div className="distance-select-box">
        <Box>
          <FormControl fullWidth>
            <InputLabel id="label">Distance</InputLabel>
            <Select
              labelId="label"
              id="select"
              value={distance}
              label="Distance"
              onChange={handleChange}
            >
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={20}>20</MenuItem>
              <MenuItem value={30}>30</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </div>
    </div>
  );
};

export default SearchBar;
