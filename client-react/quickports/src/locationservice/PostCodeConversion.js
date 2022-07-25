import { useState, useEffect } from "react";

const convertPostCodeToCoordinate = async (postCode) => {
  const response = await fetch(`https://api.postcodes.io/postcodes/${postCode}`)
    .then((res) => res.json())
    .then((body) => console.log(body.result));

};

export default convertPostCodeToCoordinate;
