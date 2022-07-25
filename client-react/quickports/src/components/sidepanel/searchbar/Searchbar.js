import Input from "@mui/material/Input";
import SearchIcon from "@mui/icons-material/Search";

import convertPostCodeToCoordinate from "../../../locationservice/PostCodeConversion";

import "./SearchBar.css";
import { useState , useEffect } from "react";


const SearchBar = () => {
  
  //State of User Input
  const [input , setInput] = useState('');


  const changeHandler = (e) => {
    setInput(e.target.value)
    console.log("Change");
  };

  const submitHandler = (e) => {
    //Function prevents the page from reloading on submit
    e.preventDefault();

    console.log(input);
    convertPostCodeToCoordinate(input);
    
  };

  return (
    <div>
      <SearchIcon />
      <div>
        <form onSubmit={submitHandler}>
          <Input
            type="text"
            placeholder="Search"
            value = {input}
            fullWidth={true}
            onChange={changeHandler}
          />
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
