/* In dit script plaats je de code om de kaart in de id apMap te tekenen, zodat de AP-Hogeschool met adres Ellermanstraat 33 gecentreerd staat.  
* Gebruik hiervoor de documentatie op https://leafletjs.com/ 
* Verander in de code online alle "var" in "let".
*/
let map = L.map('apMap').setView([51.23009, 4.41616], 17);
// let marker = L.marker([51.23009, 4.41616]).addTo(map);

var CoffeeIcon = L.icon({
    iconUrl: './assets/stip.png',
    

    iconSize:     [60, 60], // size of the icon
    shadowSize:   [60, 60], // size of the shadow
    iconAnchor:   [20, 30], // point of the icon which will correspond to marker's location
    shadowAnchor: [20, 30],  // the same for the shadow
    popupAnchor:  [-20, -30] // point from which the popup should open relative to the iconAnchor
});

let marker = L.marker([51.23009, 4.41616], {icon: CoffeeIcon}).addTo(map);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 17,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
// bepaal de rechthoek rondom het gebouw van AP
// var bounds = [[51.23041, 4.4155], [51.22991, 4.41675]];
// kleur de rechthoek in met de rode AP-kleur
// L.rectangle(bounds, {color: "#e60005", weight: 1}).addTo(map);
// map.fitBounds(bounds);

// plaats een marker met als tekst "AP-Hogeschool" en eronder "Ellermanstraat 33"
// marker.bindPopup("<b>AP-Hogeschool</b><br>Ellermanstraat 33").openPopup();

