mapboxgl.accessToken = 'pk.eyJ1IjoiaHVzc2VhIiwiYSI6ImNrdTJ2YTcwYjF5ZDUydXFocWswM2RxOWQifQ.P4YcFmkkzo-MOFc2C0DGZA';

navigator.geolocation.getCurrentPosition(successLocaction, errorLocation,
    {enableHighAccuracy: true});

function successLocaction(position) {
  setupMap([position.coords.longitude, position.coords.latitude]);
}

function errorLocation() {
  // Coordinates
  setupMap([24.94140,60.17118]);
}
//-2.24, 53.48 ManC
//24.94140,60.17118
function setupMap(center) {
  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: center,
    zoom: 14,
  });

  const nav = new mapboxgl.NavigationControl();
  map.addControl(nav);

  let directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken,
  });
  map.addControl(directions, 'top-left');

  /*
  const nav = new mapboxgl.Map({attributionControl: false}).addControl(
      new mapboxgl.AttributionControl({
        customAttribution: 'Map design by me',
      }));
   */

}


