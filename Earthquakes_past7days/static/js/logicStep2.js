// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create the dark view layer that will be an option for our map.
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create a base layer that holds both maps.
let baseMaps = {
  "Streets": streets,
  "Satellite": satelliteStreets
};

// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
  center: [39.5, -98.5],
  zoom: 3,
  layers: [streets]
})

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

// Add the streets tile layer to the map
// satelliteStreets.addTo(map);

// Accessing the airport GeoJSON URL
let airportData = "https://raw.githubusercontent.com/DibbleJ/Mapping_Earthquakes/Mapping_GeoJSON_Points/Mapping_GeoJSON_Points/static/js/majorAirports.json"

let torontoData = "https://raw.githubusercontent.com/DibbleJ/Mapping_Earthquakes/Mapping_GeoJSON_Linestrings/Mapping_GeoJSON_Linestrings/static/js/torontoRoutes.json"

let torontoHoods = "https://raw.githubusercontent.com/DibbleJ/Mapping_Earthquakes/Mapping_GeoJSON_Polygons/Mapping_GeoJSON_Polygons/static/js/torontoNeighborhoods.json"
// Create a style for the lines.
let myStyle = {
  color: "#ffffa1",
  weight: 2
}

function getRadius(magnitude) {
  if (magnitude === 0) {
    return 1;
  }
  return magnitude * 4;
}

function styleInfo(feature) {
  return {
    opacity: 1,
    fillOpacity: 1,
    fillColor: "#ffae42",
    color: "#000000",
    radius: getRadius(feature.properties.mag),
    stroke: true,
    weight: 0.5
  };
}

// Retrieve the earthquake GeoJSON data.
d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson").then(function(data) {
  // Create a GeoJSON layer with the retrieved data
  console.log(data);
  L.geoJson(data, {
// We turn each fature into a circleMarker on the map.
pointToLayer: function(feature, latlng) {
            console.log(data);
            return L.circleMarker(latlng);
    },
    style: styleInfo,
    onEachFeature: function(feature, layer) {
      layer.bindPoup("<p>Magnitude: " + feature.properties.mag + "</p><br><p>Location: " + feature.properties.place)
    }
  }).addTo(map);
});
  /*, {
    lineweight: 1,
    color: 'blue',
    fillColor: "#ffff01",
    onEachFeature: function(feature, layer) {
      layer.bindPopup("<h2>Neighborhood: " + feature.properties.AREA_NAME)
    }
  }).addTo(map);
});*/

// L.geoJson(data,  {
//   style: myStyle,
//   onEachFeature: function(feature, layer) {
//     layer.bindPopup("<h2>Airline: " + feature.properties.airline + "</h2> <hr> <h3>Destination: " 
//     + feature.properties.dst + "</h3>")
//   }
// }).addTo(map);
// });