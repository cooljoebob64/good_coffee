var mymap = L.map('mapid').setView([33.7846, -84.4238], 13);



L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiY29vbGpvZWJvYjY0IiwiYSI6ImNraGI2MWh3djE2NXMycm11anY3aDZ6NGIifQ.2osoJ5G-WsQMEQV_qBMnlQ'
}).addTo(mymap);

var marker = L.marker([33.7846, -84.4238]).bindPopup("<b>Hello there!</b><br>This is the spot!").openPopup().addTo(mymap);