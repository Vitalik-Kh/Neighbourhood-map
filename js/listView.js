(function() {
    var ListView = function() {
        var self = this;
        this.placesList = ko.observableArray([]);
        neighbourhood.forEach(function(neighbour) {
            self.placesList().push(new Place(neighbour));
        });
        console.log(this.placesList());
    }

    ko.applyBindings(new ListView(), document.getElementById('places-container'));
})();
