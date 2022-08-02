import { Card } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import "./DeviceCard.css";
import DeviceItem from "./DeviceItem";

const DeviceCard = (device) => {
  return (
    <div>
      <Card className="card-body">
        <CardContent>
          <DeviceItem address={device.address} deviceName={device.deviceName} voltage={device.voltage} />
        </CardContent>
      </Card>
    </div>
  );
};

export default DeviceCard;
