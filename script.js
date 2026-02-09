map.on('load', () => {
  // Add a data source containing GeoJSON data
  map.addSource('uoft-data', {
    type: 'geojson',
    data: {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "Sidney Smith Hall"
          },
          "geometry": {
            "coordinates": [
              -79.39865237301687,
              43.662343395037766
            ],
            "type": "Point"
          }
        }
      ]
    }
  });

  // Visualize data layer on map
  map.addLayer({
    'id': 'uoft-pnt',
    'type': 'circle',
    'source': 'uoft-data',
    'paint': {
      'circle-radius': 6,
      'circle-color': '#B42222'
    }
  });
});
