function initMap() {
    // Latitude and Longitude
    var myLatLng = {lat:58.652214, lng: 25.964915};

    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 17,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Ringi 2, Põltsamaa, 48103 Jõgeva maakond, Estonia' // Title Location
    });
}