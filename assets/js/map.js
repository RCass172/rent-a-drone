//function called by script on index.html to activate map
function initMap() {

    // sets coordinates of business home
    let home = {
        lat: 53.887085, 
        lng: -7.150008
    };

    //creates the map in relevant div centered and zoomed in to location
    let map = new google.maps.Map(document.getElementById('map'), {
        center: home,
        zoom: 15,
    });

    //creates a marker on the map at the specified location coordinates
    let marker = new google.maps.Marker( {
        position: home,
        map: map,
    });
}