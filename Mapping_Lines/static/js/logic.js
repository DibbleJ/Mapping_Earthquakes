//  Create the map object with a center and zoom level.
let map = L.map('mapid').setView([36.1733, -120.1794], 5);

// Coordinates for each point to be used in the line.
let line = [
    [37.6213, -122.3790],
    [30.1974292, -97.6663058],
    [37.697948, -97.314835],
    [43.6772222, -79.6305556],
    [40.6397222, -73.7788889]
  ];

  // Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
    color: "yellow"
  }).addTo(map);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    // tileSize: 512,
    // zoomOffset: -1,
    accessToken: API_KEY
});

// Get data from cities.js
// let cityData = cities;

// // Loop through the cities array and create one marker for each city.
// cityData.forEach(function(city) {
//     console.log(city)
//     L.circleMarker(city.location, {
//         radius: city.population/100000,
//         color: 'orange',
//         linewidth: 4
//     })
//     .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
//     .addTo(map);
// });

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);