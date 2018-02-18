var app = app || {};

(function() {
    app.model = {
        neighbourhood: [
            {
                title: 'Trinity Shopping Center',
                address: '27 Albion St, Leeds LS1 5ER',
                type: 'Shopping center',
                info: "Some usful information 1"
            },
            {
                title: 'Co-op Food',
                address: 'Co-op Food, 44 New York St, Leeds LS2 7DY',
                type: 'Supermarket',
                info: "Some usful information 2"
            },
            {
                title: 'John Lewis',
                address: 'Victoria Gate, Harewood St, Leeds LS2 7AR',
                type: 'Shopping center',
                info: "Some usful information 3"
            },
            {
                title: 'Royal Armoories Museum',
                address: 'Royal Armoories Museum, Armouries Dr, Leeds LS10 1LT',
                type: 'Museum',
                info: "Some usful information 4"
            },
            {
                title: 'North Star Coffee Roasters',
                address: 'North Star Coffee Roasters, 33 Boulevard Rise, Leeds LS10 1PZ',
                type: 'Coffee shop',
                info: "Some usful information 5"
            },
            {
                title: 'Tesco Express',
                address: 'Tesco Express, 2 the Blvd, Leeds LS10 1PZ',
                type: 'Supermarket',
                info: "Some usful information 6"
            },
            {
                title: 'The Light, Vue Cinema',
                address: 'The Light, The Headrow, Leeds LS1 8TL',
                type: 'Shopping center, Cinema',
                info: "Some usful information"
            },
            {
                title: 'Train Station',
                address: 'New Station St, Leeds LS1 4DY',
                type: 'Train station',
                info: "Some usful information"
            },
            {
                title: 'City Bus Station',
                address: 'Leeds City Bus Station, Dyer St, Leeds LS2 7LA',
                type: 'Bus station',
                info: "Some usful information"
            },
            {
                title: 'Crown Point Shopping Park',
                address: 'Junction St, Leeds LS10 1ET',
                type: 'Shopping park',
                info: "Some usful information"
            },
            {
                title: 'Morrisons',
                address: 'Morrisons, Merrion Centre, 43 Merrion Center, Leeds LS2 8PL',
                type: 'Supermarket',
                info: "Some usful information"
            }
        ],

        Place: function(data) {
            this.title = ko.observable(data.title);
            this.address = ko.observable(data.address);
        }
    }
})();
