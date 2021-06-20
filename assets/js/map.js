//function called by script on index.html to activate map
function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 53.887085, lng: -7.150008},
        zoom: 15
    });
}