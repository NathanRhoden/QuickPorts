import { useState, useEffect } from "react";

const convertPostCodeToCoordinate = async (postCode) => {
  let data = await fetch(`https://api.postcodes.io/postcodes/${postCode}`)
    .then(data => data.json());
  
    return data; 
  

};

export default convertPostCodeToCoordinate;
