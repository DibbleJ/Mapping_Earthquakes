# Mapping_Earthquakes

## Overview
 This map is meant to show the recent earthquakes around the world. The earthquake data is collected from the usgs data feed for the last week (https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson). The tectonic plate data is collected from this github page (https://raw.githubusercontent.com/fraxen/tectonicplates/master/GeoJSON/PB2002_boundaries.json). Utilizing leaflet, the mapbox tileLayers for streets, satellite-streets, and navigation-day are used as the base layer options, and the data sets are the toggleable overlays that can be used to show the earthquake and tectonic information.
## Results
As expected, the vast majority of earthquakes fall on the joining of two tectonic plates. Additionally, a large quantity of the major earthquakes occurred along the Ring of Fire  of the Pacific Ocean.
## Summary
  This map has the potential to be a helpful resource for an organization that is interested in keeping tabs on major earthquake events that happen around the world. One of the improvements to be considered would be to explore having the legend change as a result of toggling on the Major Earthquakes layer. Currently, this layer does not align with the current legend. 
