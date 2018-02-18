var app = app || {};

(function() {
    app.ListView = function() {
        var self = this;
        this.placesList = ko.observableArray();
        neighbourhood.forEach(function(neighbour) {
            self.placesList.push(new Place(neighbour));
        });

        this.searchInput = ko.observable('');
        var options = {
            keys: ['title'],
            threshold: 0.1
        }
        var fuse = new Fuse(neighbourhood, options);
        //console.log(fuse.search('tr'));
        this.search = function() {
            var result = fuse.search(this.searchInput());
            if (self.searchInput() == '') {
                console.log(result);
                self.placesList.removeAll();
                neighbourhood.forEach(function(neighbour) {
                    self.placesList.push(new Place(neighbour));
                });
            } else {
                self.placesList.removeAll();
                result.forEach(function(neighbour) {
                    self.placesList.push(new Place(neighbour));
                });

            }
        }
    }
})();
