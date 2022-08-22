import { useState } from "react";
import { Card, CardActions } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import "./DeviceCard.css";
import DeviceItem from "./DeviceItem";

const DeviceCard = (device) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  }));

  return (
    <Card className="card-body" sx={{ maxWidth: 345 }}>
      <CardContent>
        <DeviceItem
          address={device.streetName}
          voltageInformation={device.voltageInformation}
          buildingNumber={device.buildingNumber}
          connectorType={device.connectorType}
        />
      </CardContent>

      <CardActions>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent className="card-body-chargedetails">
          <h4>Charge Details : </h4>
          <div className="card-body-chargedetails-child">
            <p>RatedOutputKW : <b>{device.ratedOutputKW}</b></p>
            <p>RatedOutputVoltage :<b>{device.ratedOutputVoltage}</b></p>
            <p>RatedOutputCurrent : <b>{device.ratedOutputCurrent}</b></p>
            <p>ChargeMethod : <b>{device.chargeMethod}</b></p>
          </div>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default DeviceCard;
