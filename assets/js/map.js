/*jshint esversion: 6 */ 

//Function called by script on index.html to activate map
function initMap() {

    //Sets coordinates of business home
    let home = {
        lat: 53.887085, 
        lng: -7.150008
    };

    //Creates the map in relevant div centered and zoomed in to location
    let map = new google.maps.Map(document.getElementById('map'), {
        center: home,
        zoom: 15,
    });

    //Creates a marker on the map at the specified location coordinates
    //Google maps documentation used as reference
    let marker = new google.maps.Marker( {
        position: home,
        map: map,
    });
}