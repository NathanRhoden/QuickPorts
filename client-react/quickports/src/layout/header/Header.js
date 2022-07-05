import { Fragment } from "react";
import { AppBar } from "@mui/material";
import { Box } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';

import './Header.css';

const Header = (props) => {
  return (
    <div className="header">
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
