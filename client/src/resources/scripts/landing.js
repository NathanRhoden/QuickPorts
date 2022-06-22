function initMap() {

  const point  = { lat : 51.411173 , lng :-0.055369};

  // The map, centered at point
  const map = new google.maps.Map(document.getElementById("map"), {
    center: point,
    zoom: 14,

  });

  const contentString =
 ' <div id="content">' +
   'PP-12295'
  '</div>';
const infowindow = new google.maps.InfoWindow({
  content: contentString,
});

  //The marker placed at the center of the point

  const marker = new google.maps.Marker({
    position : point,
    map: map,
    title : 'PP-12295'
  })

  const infoWindow = new google.maps.InfoWindow({
    content : contentString
  });
  
  marker.addListener("click" , () => {
    infoWindow.open({
      anchor: marker,
      map,
      shouldDocus : false
    })
  })
};



window.initMap = initMap;