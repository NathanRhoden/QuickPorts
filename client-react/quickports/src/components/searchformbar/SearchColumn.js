import "./SearchColumn.css";
import TextField from "@mui/material/TextField";

const SearchColumn = () => {
  return (
    <div className="formBody">
      <form>
        <label>
          Name:
          <TextField label="PostCode" variant="outlined" />
        </label>
      </form>
    </div>
  );
};

export default SearchColumn;
