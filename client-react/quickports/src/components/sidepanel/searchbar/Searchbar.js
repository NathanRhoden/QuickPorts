import Input from "@mui/material/Input";
import SearchIcon from "@mui/icons-material/Search";

import convertPostCodeToCoordinate from "../../../locationservice/PostCodeConversion";

import "./SearchBar.css";
import { useEffect, useState , useCallback } from "react";

const SearchBar = (props) => {
  //State of User Input
  const [input, setInput] = useState("");

  //state of Coordinate fetch
  const [coordinates, setCoordinates] = useState({});
  
  const inputConversion = useCallback(async (input) => {
    let jsonData = await convertPostCodeToCoordinate(input);
    setCoordinates(jsonData.result)
    props.setCoordinates({lat :jsonData.result.latitude, lng :jsonData.result.longitude});
  } , []);
  
  useEffect(() =>{
    if(input.length >= 5){
      inputConversion(input);
    } 
  }, [input , inputConversion])
  
  const submitHandler = (e) => {
    //Function prevents the page from reloading on submit
    e.preventDefault();
    console.log(props.coords);
    
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
            onChange={(e => setInput(e.target.value))}
          />
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
