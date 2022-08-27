import { Fragment } from "react";
import { AppBar } from "@mui/material";
import { Box } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-title">
        <h1>QuickPorts</h1>
        <div className="header-title-icon">
          <img src="thunderbolt.png" alt="thunderbolt"></img>
        </div>
      </div>
      <Fragment>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static"></AppBar>
          <Toolbar variant="dense"></Toolbar>
        </Box>
      </Fragment>
    </div>
  );
};

export default Header;
