import Input from "@mui/material/Input";
import SearchIcon from "@mui/icons-material/Search";

import convertPostCodeToCoordinate from "../../../locationservice/PostCodeConversion";

import "./SearchBar.css";
import { useState } from "react";

const SearchBar = () => {
  //State of User Input
  const [input, setInput] = useState('');

  const [postCode, setPostCode] = useState({});

  const changeHandler = (e) => {
    
    var value = e.target.value;
    setInput(value);
    console.log(value);
    console.log(input);
    
    
  };
  const submitHandler = (e) => {
    //Function prevents the page from reloading on submit
    e.preventDefault();
    console.log(input);
    convTest(input);
    
  };

  const convTest = async (input) =>{
      let jsonData = await convertPostCodeToCoordinate(input) 
      setPostCode(jsonData.result)
      console.log(postCode.latitude, postCode.longitude);
  }

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
            onChange={changeHandler}
          />
        </form>
      </div>
    </div>
  );
};

export default SearchBar;

