import { useState, useEffect } from "react";

function postCodeConversion(postCode) {
  const convertPostCodeToCoordinate = async () => {
    const response = await fetch(`https://api.postcodes.io/postcodes/${postCode}`);
    const json = await response.json();

    return json.body.result.latitude;
  }
}


export default  postCodeConversion;