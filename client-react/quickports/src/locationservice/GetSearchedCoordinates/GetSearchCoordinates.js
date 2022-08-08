import { useState, useEffect } from "react";

function GetLocal(props) {
  const [coords, setCoords] = useState({ lat: null, lng: null });

  const getLocation = () => {
    locationDetails();
  };

  useEffect(() => {
    if ((props.postcode.length = 5)) {
      getLocation();
    }
  }, [props.postcode]);

  const locationDetails = async () => {
    fetch(`https://api.postcodes.io/postcodes/${props.postcode}`)
      .then((response) => response.json())
      .then((body) =>
        setCoords({ lat: body.result.latitude, lng: body.result.longitude })
      )
      .catch((error) => console.log(error));

    console.log(coords);
  };

  return (
    <div>
      <h1>Return Me Some Coords</h1>
      <div>
        {coords.lat} : {coords.lng}
      </div>
    </div>
  );
}

export default GetLocal;
