import axios from "axios";
import express from "express";
import {router as chargeDevicePoints} from "./axiosrequests/fetchAllChargeDevices.js"

const app = express();
const port = 3000;


app.use(express.json());

app.get("/", (req, res) => {
  res.send("WELCOME TO QUICKPORTS!!");
});

app.use('/points', chargeDevicePoints);

app.listen(port, () => {
  "Express server listening on port 3000";
});

