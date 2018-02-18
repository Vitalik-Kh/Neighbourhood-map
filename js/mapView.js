var app = app || {};
var map, geocoder, initMap, infoWindow;
(function() {
    initMap = function() {
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
        infoWindow = new google.maps.InfoWindow();
        app.mapView.createMarkersFrom(app.listView.placesList());
    };

    app.mapView = {
        markers: [],
        createMarkersFrom: function(data) {
            this.clearMarkers();
            data.forEach(function(place) {
                geocoder.geocode({'address': place.address}, function(results, status) {
                    if (status == 'OK') {
                        app.mapView.addMarker(
                            place.title,
                            results[0].geometry.location,
                            place.info);
                        place.geoCode = results[0].geometry.location;
                    } else {
                        throw('Geocoding of ' + place.title + ' was not successful because: ' + status);
                    }
                });
            });
        },
        addMarker: function(title, position, info) {
            var newMarker = new google.maps.Marker({
                position: position,
                map: map,
                animation: google.maps.Animation.DROP,
                title: title
            });
            this.markers.push(newMarker);
            newMarker.addListener('click', function() {
                app.mapView.showInfoWindow(position, info, newMarker);
            });
        },
        clearMarkers: function() {
            this.markers.forEach(function(marker) {
                marker.setMap(null);
            });
            markers = [];
        },
        showInfoWindow: function(position, info, marker) {
            infoWindow.setContent(info);
            if (marker) {
                infoWindow.open(map, marker);
            } else {
                infoWindow.setPosition(position);
                infoWindow.open(map);
            }
        }

    }
})();
