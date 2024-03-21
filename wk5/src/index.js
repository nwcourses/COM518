// Week 5 partial answer - basic map 
import "leaflet";

const map = L.map("map1");

const attrib="Map data copyright OpenStreetMap contributors, Open Database Licence";

const tileLayer = L.tileLayer(
        "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
            { attribution: attrib }
).addTo(map);

// New York lat 40.75 lon -74
map.setView([40.75, -74], 14);

// Handle map click event

map.on("click", e => {
    // create a position using the coordinates from the map click
    const mapClickPos = [e.latlng.lat, e.latlng.lng];

    // Prompt the user for a description
    const description = prompt("Please enter a description for the place: ");
    // Add a marker at that position
    const marker = L.marker(mapClickPos).addTo(map);

    // Bind a popup to the description
    marker.bindPopup(description);
});
