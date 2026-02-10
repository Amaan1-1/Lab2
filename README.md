# GGR472 Lab 2: Walmart & No Frills Store Locator - Scarborough

## Overview
Interactive web map visualizing Walmart 🔵 and No Frills 🟡 store locations in Scarborough, Ontario with a beautiful snowing map.

## Summary:
This web map was created using Mapbox Studio and Mapbox GL JS. A style was created in Mapbox and then set up as the basemap for this web map. The code then accesses 2 different GeoJSONs and renders them on the map. There is a legend which is interactive. Users can toggle on and off Walmart or No Frill points on the map.

## File Structure
- index.html # Main website page that shows map, has a legend and a title
- style.css # Making the button look nicer, adding header to html correctly
- script.js #Loaded both geojsons and added functionality for buttons
- walmart.geojson # Walmart store locations
- no_frill.geojson # No Frill store locations
