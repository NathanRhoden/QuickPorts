import TextField from "@mui/material/TextField";
import "./locationForm.css";

const locationForm = () => {
  return (
    <div className="locationFormBody">
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
      </form>
    </div>
  );
};

export default locationForm;
