(function() {
    var geocoder;
    var map;
    var markers = [];
    window.initMap = function() {
        geocoder = new google.maps.Geocoder();
        var center = {lat: 53.799, lng: -1.548};
        var htmlElem = document.getElementById('map-container');
        map = new google.maps.Map(htmlElem, {
          center: center,
          zoom: 14
        });

        google.maps.event.addDomListener(window, 'resize', function() {
            map.setCenter(center);
        });

        createMarkers();
    };

    var createMarkers = function() {
        var counter = 0;
        clearMarkers();
        neighbourhood.forEach(function(place) {
            geocoder.geocode({'address': place.address}, function(results, status) {
                if (status === 'OK') {
                    addMarker(place.title, results[0].geometry.location, counter * 200);
                    counter++;
                } else {
                    throw('Geocoding was not successful because: ' + stutus);
                }
            });
        });
    };
    var addMarker = function(title, position, timeout) {
        window.setTimeout(function() {
            markers.push(new google.maps.Marker({
                position: position,
                map: map,
                animation: google.maps.Animation.DROP,
                title: title
            }));
        }, timeout);
    };
    var clearMarkers = function() {
        markers.forEach(function(marker) {
            marker.setMap(null);
        });
        markers = [];
    };

})();
