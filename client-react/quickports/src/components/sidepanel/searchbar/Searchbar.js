import Input from "@mui/material/Input";
import SearchIcon from "@mui/icons-material/Search";

import "./SearchBar.css";

const SearchBar = () => {
  const changeHandler = () => {
    console.log("Change");
  };
  
  const submitHandler = (e) => {
    //Function prevents the page from reloading on submit
    e.preventDefault();

    fetch("http://localhost:8080/api/v1/points/1")
      .then((response) => response.json())
      .then((body) => console.log(body))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <SearchIcon />
      <div>
        <form onSubmit={submitHandler}>
          <Input
            placeholder="Search"
            fullWidth={true}
            onChange={changeHandler}
          />
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
