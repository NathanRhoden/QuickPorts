import express from "express";
import { router as chargeDevicePoints } from "./axiosrequests/fetchAllChargeDevices.js";
import path from "path";

const __dirname = path.dirname(new URL(import.meta.url).pathname);
const moduleURL = new URL(import.meta.url);

console.log(`pathname ${moduleURL.pathname}`);
console.log(`dirname ${path.dirname(moduleURL.pathname)}`);

const app = express();
const port = 3000;


app.use(
  '/static',
  express.static(path.dirname(moduleURL.pathname) + "/static")
);

console.log(`dirname ${path.dirname(moduleURL.pathname)}` +  "/static")
app.use(express.json());
//app.use('/landing' , express.static(new URL(import.meta.url))

app.get("/", (req, res) => {
  res.send("WELCOME TO QUICKPORTS!!");
});

app.use("/points", chargeDevicePoints);

app.listen(port, () => {
  "Express server listening on port 3000";
});
