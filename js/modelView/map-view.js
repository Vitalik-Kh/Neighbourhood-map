(function() {
    
    window.map;
    window.initMap = function() {
        var center = {lat: 53.799, lng: -1.548};
        var htmlElem = document.getElementById('app-container');
        map = new google.maps.Map(htmlElem, {
          center: center,
          zoom: 14
        });

        google.maps.event.addDomListener(window, 'resize', function() {
            map.setCenter(center);
        });
    };

})();
