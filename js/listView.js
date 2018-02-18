var app = app || {};

(function() {
    app.listView = {
        init: function() {

            this.populatePlasesListFrom(app.model.neighbourhood);
            var options = {
                keys: ['title', 'type'],
                threshold: 0.2,
                tokenize: true,
                matchAllTokens: true
            }
            this.fuse = new Fuse(app.model.neighbourhood, options);
        },
        populatePlasesListFrom: function(data) {
            var self = this;
            self.placesList.removeAll();
            data.forEach(function(neighbour) {
                self.placesList.push(neighbour);
            });
        },
        placesList: ko.observableArray(),
        searchInput: ko.observable(''),
        fuse: '',

        search: function(callback) {
            var result = this.fuse.search(this.searchInput());
            if (this.searchInput() == '') {
                this.populatePlasesListFrom(app.model.neighbourhood);
            } else {
                this.populatePlasesListFrom(result);
            }
        },

        clearSearch: function() {
            this.searchInput('');
            this.populatePlasesListFrom(app.model.neighbourhood);
        },

        showInfoWindow: function(place) {
            var status = false;
            app.mapView.markers.forEach(function(marker) {
                if (marker.position == place.geoCode) {
                    app.mapView.showInfoWindow(place.geoCode, place.info, marker);
                    status = true;
                }
            });
            if (status === false) {
                app.mapView.showInfoWindow(place.geoCode, place.info);
            }
        }
    }
})();
