import axios from "axios";

const url = "http://localhost:8080/api/v1/points/all";

function getAllChargeDevices() {
  axios
    .get(url)
    .then((response) => {
      console.log(response.data);
      
    })
    .catch((error) => {
      console.log(error);
    });
}

export { getAllChargeDevices };
