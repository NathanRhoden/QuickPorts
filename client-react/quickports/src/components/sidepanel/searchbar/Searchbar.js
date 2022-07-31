import Input from "@mui/material/Input";
import SearchIcon from "@mui/icons-material/Search";

import convertPostCodeToCoordinate from "../../../locationservice/PostCodeConversion";

import "./SearchBar.css";
import { useEffect, useState ,useCallback } from "react";

const SearchBar = (props) => {
  //State of User Input
  const [input, setInput] = useState("");

  //state of Coordinate fetch
  const [coordinates, setCoordinates] = useState({});
  
  const convTest = useCallback(async (input) => {
    let jsonData = await convertPostCodeToCoordinate(input);
    setCoordinates(jsonData.result)
    props.setCoordinates(jsonData.result.latitude,jsonData.result.longitude );
  } , []);
  
  useEffect(() =>{
    if(input.length >= 5){
      convTest(input);
    } 
  }, [input , convTest])
  
  const submitHandler = (e) => {
    //Function prevents the page from reloading on submit
    e.preventDefault();
    console.log(coordinates);
    
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
