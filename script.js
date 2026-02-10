mapboxgl.accessToken = 'pk.eyJ1IjoiYW1hYW5iIiwiYSI6ImNtbGRkZW1meDFhdjMzZXEzb25ydDQwNXUifQ.9X7LgD4vFHgfHOLKdon0jg'; 
//My access token from mapbox

const map = new mapboxgl.Map({
    container: 'my-map', // map container ID
    style: 'mapbox://styles/amaanb/cmlfrw1us00ho01qq1aad4yvb', //style URL
    center: [-79.195614, 43.786977], // starting position [lng, lat] changed to be centered around Scarborough
    zoom: 10.4, // starting zoom to fit all points
}); 

//Load map
map.on('load', () => {

    //Adding a source for Walmart locaiton using walmart.geojson stored in current folder
    // Then it is named "Walmart-Locations" to be referenced later
    map.addSource('Walmart-Locations', {
        type: 'geojson',
        data: 'walmart.geojson'
    });

    //Adding a source for No frill locaitons now using no_frill.geojson stored in current folder
    // Then it is named "NoFrill-Locations" to be referenced later
    map.addSource('NoFrill-Locations', {
        type: 'geojson',
        data: 'no_frill.geojson'
    });

    //Adding a layer called Walmart-points that accesses "Walmart-Locations" source
    // and visualizes the points as blue circles with white stroking 
    map.addLayer({
        id: 'Walmart-points',
        type: 'circle',
        source: 'Walmart-Locations',
        paint: {
            'circle-radius': 5,
            'circle-color': '#4000ff',
            'circle-stroke-width': 1.5,
            'circle-emissive-strength': 1.1,
            'circle-stroke-color': '#ffffff'
        }
    });

    //The map is very dark hence "circle-emissive-strength" is increased to make sure 
    //all points are visible and don't blend in

    //Adding a layer called NoFrill-points that accesses "NoFrill-Locations" source
    // and visualizes the points as yellow circles with white stroking 
    map.addLayer({
        id: 'NoFrill-points',
        type: 'circle',
        source: 'NoFrill-Locations',
        paint: {
            'circle-radius': 5,
            'circle-color': '#fce701',
            'circle-emissive-strength': 1.1,
        }
    });

});

//First set up the buttons to have event listeners to know 
// when button is clicked and let the script know which button is clicked
// by checking their unique IDs and not classes
document.getElementById('walmart_button').addEventListener('click', () => {
    //Checking if the points are visible by using 
    // the function getLayoutProperty() from: https://docs.mapbox.com/mapbox-gl-js/api/map/#map#getlayoutproperty
    const visibility = map.getLayoutProperty('Walmart-points', 'visibility');
    //If the points are visible then hide them and change the text on the button 
    // to say "Show"
    if(visibility !== "none"){
        map.setLayoutProperty('Walmart-points', 'visibility', 'none');
        document.getElementById('walmart_button').innerHTML = "Show";
    }
    else{
        //if the points are not visible then display them and change
        // text on the button to say "hide"
        document.getElementById('walmart_button').innerHTML = "Hide";
        map.setLayoutProperty('Walmart-points', 'visibility', 'visible');
    }
});

//Same concept except using the id "nofrill_button" to get the button and access it
// and now using "NoFrill-points" to make point data visible or invisible
document.getElementById('nofrill_button').addEventListener('click', () => {
    const visibility = map.getLayoutProperty('NoFrill-points', 'visibility');
    if(visibility !== "none"){
        //Changing the points on the map to become invisble 
        // using function setLayoutProperty() from: https://docs.mapbox.com/mapbox-gl-js/api/map/#map#setlayoutproperty
        map.setLayoutProperty('NoFrill-points', 'visibility', 'none');
        document.getElementById('nofrill_button').innerHTML = "Show";
    }
    else{
        //Now using setLayoutProperty but setting it to "visible" to show points on the map
        document.getElementById('nofrill_button').innerHTML = "Hide";
        map.setLayoutProperty('NoFrill-points', 'visibility', 'visible');
    }
});