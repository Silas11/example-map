// Map View
var mymap = L.map('mapid').setView([51.9, 10.26], 2);

// load map
L.tileLayer(
    'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', 
    {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, '+
            '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, '+
            'Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        accessToken: 'pk.eyJ1IjoidXNlcjE0MjM1IiwiYSI6ImNrNWUwYnluajAwMjYzb3J1b2g4aXEya2MifQ.02rubYiNyjonYdsN3mUf3w'
    })
    .addTo(mymap);

L.Control.geocoder({ collapsed: false }).addTo(mymap);


// -----------------------------------------------



// Icon for the Markers
var markerIcon = L.icon({
    iconUrl: 'C:\Users\KUHNS1\Desktop\Praktikum\Silas11.github.io\marker\newPin.png',
    iconSize: [20, 20],
    iconAnchor: [10, 20],
    popupAnchor: [-3, -76], 
});

var countryIcon = L.icon({
    iconUrl: 'C:\Users\KUHNS1\Desktop\Praktikum\Silas11.github.io\marker\countryPin.png',
    iconSize: [20, 20],
    iconAnchor: [8, 20],
    popupAnchor: [-3, -76], 
});

var myPositionIcon = L.icon({
    iconUrl: 'C:\Users\KUHNS1\Desktop\Praktikum\Silas11.github.io\marker\myPosition.png',
    iconSize: [25, 25],
    iconAnchor: [17, 17],
    popupAnchor: [-3, -76], 
});

var emptyIcon = L.icon({
    iconUrl: 'C:\Users\KUHNS1\Desktop\Praktikum\Silas11.github.io\marker\leer.png',
    iconSize: [25, 25],
    iconAnchor: [17, 17],
    popupAnchor: [-3, -76], 
});



// -----------------------------------------------



var x = document.getElementById("locationId");


function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
     }
}

// The Icon for the your Location is placed, where you, according to the browserdata, be located
var coord1
var coord2

function showPosition(position){
    // x.innerHTML = "Latitude: " + position.coords.latitude + 
    // "<br>Longitude: " + position.coords.longitude;
    this.coord1 = position.coords.latitude;
    this.coord2 = position.coords.longitude;
    L.marker([coord1, coord2], {icon: myPositionIcon}).bindPopup('Your Location').addTo(mymap);
    
}


// Marker

// var tallinn = L.marker([59.4372155, 24.7453688], {icon: emptyIcon}).bindPopup('Tallinn').addTo(mymap),
//     kyiv = L.marker([50.5, 30.5], {icon: emptyIcon}).bindPopup('Kyiv').addTo(mymap),
//     rastatt = L.marker([48.862725865417076,8.189531915326356], {icon: emptyIcon}).bindPopup('Rastatt').addTo(mymap),
//     lisabon = L.marker([38.7077507, -9.1365919], {icon: emptyIcon}).bindPopup('Lisabon').addTo(mymap),
//     london = L.marker([51.5073219, -0.1276474], {icon: emptyIcon}).bindPopup('London').addTo(mymap),
//     usa = L.marker([39.7837304, -100.4458825], {icon: emptyIcon}).bindPopup('USA').addTo(mymap),
//     australien = L.marker([-24.7761086, 134.755], {icon: emptyIcon}).bindPopup('Australien').addTo(mymap),
//     frankreich = L.marker([46.603354,1.8883335], {icon: emptyIcon}).bindPopup('Frankreich').addTo(mymap),
//     isalnd = L.marker([64.9841821, -18.1059013], {icon: emptyIcon}).bindPopup('Island').addTo(mymap);

function showCountries(){
    usa = L.marker([39.7837304, -100.4458825], {icon: countryIcon}).bindPopup('USA').addTo(mymap),
    australien = L.marker([-24.7761086, 134.755], {icon: countryIcon}).bindPopup('Australien').addTo(mymap),
    frankreich = L.marker([46.603354,1.8883335], {icon: countryIcon}).bindPopup('Frankreich').addTo(mymap),
    schweden = L.marker([59.6749712,14.5208584], {icon: countryIcon}).bindPopup('Schweden').addTo(mymap),
    italien = L.marker([42.6384261,12.674297], {icon: countryIcon}).bindPopup('Italien').addTo(mymap),
    russland = L.marker([64.6863136,97.7453061], {icon: countryIcon}).bindPopup('Russland').addTo(mymap),
    isalnd = L.marker([64.9841821, -18.1059013], {icon: countryIcon}).bindPopup('Island').addTo(mymap),
    senegal = L.marker([14.4750607,-14.4529612], {icon: countryIcon}).bindPopup('Senegal').addTo(mymap),
    kenia = L.marker([1.4419683,38.4313975], {icon: countryIcon}).bindPopup('Kenia').addTo(mymap),
    peru = L.marker([-6.8699697,-75.0458515], {icon: countryIcon}).bindPopup('Peru').addTo(mymap),
    china = L.marker([35.000074,104.999927], {icon: countryIcon}).bindPopup('China').addTo(mymap);
}

function showCitys(){
    tallinn = L.marker([59.4372155, 24.7453688], {icon: markerIcon}).bindPopup('Tallinn').addTo(mymap),
    kyiv = L.marker([50.5, 30.5], {icon: markerIcon}).bindPopup('Kyiv').addTo(mymap),
    rastatt = L.marker([48.862725865417076,8.189531915326356], {icon: markerIcon}).bindPopup('Rastatt').addTo(mymap),
    lisabon = L.marker([38.7077507, -9.1365919], {icon: markerIcon}).bindPopup('Lisabon').addTo(mymap),
    ilulissat = L.marker([69.2198299,-51.0982705], {icon: markerIcon}).bindPopup('Ilulissat').addTo(mymap),
    miami = L.marker([25.7742658,-80.1936589], {icon: markerIcon}).bindPopup('Miami').addTo(mymap),
    fortaleza = L.marker([-3.701161186696559,-38.55571656405034], {icon: markerIcon}).bindPopup('Fortaleza ').addTo(mymap),
    jimma = L.marker([7.693589342489353,36.82573141493326], {icon: markerIcon}).bindPopup('Jimma').addTo(mymap),
    hyderabad  = L.marker([17.406968834765234,78.45926665443127], {icon: markerIcon}).bindPopup('Hyderabad').addTo(mymap),
    ulan_bator = L.marker([47.87508347625363,106.87871382444517], {icon: markerIcon}).bindPopup('Ulan Bator').addTo(mymap),
    london = L.marker([51.5073219, -0.1276474], {icon: markerIcon}).bindPopup('London').addTo(mymap);
}



// -----------------------------------------------



// Has actually no function respectively it doesn't work until now
function fsearch(){
    document.getElementById("searchBox")
    search()
    document.getElementById("searchBox") = ''
}

function search(){
    console.log="Click!!"
}