var app = app || {};

(function() {
    app.model = {
        neighbourhood: [
            {
                title: 'Trinity Shopping Center',
                address: '27 Albion St, Leeds LS1 5ER',
                type: 'Shopping center'
            },
            {
                title: 'Co-opperative Food',
                address: 'Co-op Food, 44 New York St, Leeds LS2 7DY',
                type: 'Supermarket'
            },
            {
                title: 'John Lewis',
                address: 'Victoria Gate, Harewood St, Leeds LS2 7AR',
                type: 'Shopping center'
            },
            {
                title: 'Royal Armoories Museum',
                address: 'Royal Armoories Museum, Armouries Dr, Leeds LS10 1LT',
                type: 'Museum'
            },
            {
                title: 'North Star Coffee Roasters',
                address: 'North Star Coffee Roasters, 33 Boulevard Rise, Leeds LS10 1PZ',
                type: 'Coffee shop'
            },
            {
                title: 'Tesco Express',
                address: 'Tesco Express, 2 the Blvd, Leeds LS10 1PZ',
                type: 'Supermarket'
            },
            {
                title: 'The Light',
                address: 'The Light, The Headrow, Leeds LS1 8TL',
                type: 'Shopping center, Cinema'
            },
            {
                title: 'Leeds Railway Station',
                address: 'New Station St, Leeds LS1 4DY',
                type: 'Train station'
            },
            {
                title: 'City Bus Station',
                address: 'Leeds City Bus Station, Dyer St, Leeds LS2 7LA',
                type: 'Bus station'
            },
            {
                title: 'Crown Point Shopping Park',
                address: 'Junction St, Leeds LS10 1ET',
                type: 'Shopping park'
            },
            {
                title: 'Morrisons',
                address: 'Morrisons, Merrion Centre, 43 Merrion Center, Leeds LS2 8PL',
                type: 'Supermarket'
            }
        ],

        Place: function(data) {
            this.title = ko.observable(data.title);
            this.address = ko.observable(data.address);
        },

        toDoubleDigit: function(number) {
            if (number < 10) {
                number = 0 + '' + number;
            }
            return number;
        },

        fourSquareSearch: function(place) {
            var clientID = 'NTS03D13RWM5UXOCD5QTQ5RHASCPX1VWJLKCLEQTXGPY130G';
            var clientSecret = 'FJEZ4WHAINE42GT54SVTLMXWTW0BZVI0ECBYCQPI5JGKSYUA';
            var date = new Date();
            var version =
            date.getFullYear() + '' +
            this.toDoubleDigit(date.getMonth() + 1) + '' +
            this.toDoubleDigit(date.getDate());
            var url = 'https://api.foursquare.com/v2/venues/search';
            url += '?' + $.param({
                'll': place.geoCode.lat() + ',' + place.geoCode.lng(),
                'address': place.address,
                'intent': 'match',
                'name': place.title,
                'client_id': clientID,
                'client_secret': clientSecret,
                'v': version
            });

            $.ajax({
                url: url,
                method: 'GET'
            }).done(function(result){
                app.model.fourSquareVenue(result, clientID, clientSecret, place);
            }).fail(function(err) {
                throw err;
            });

        },

        fourSquareVenue: function(result, clientID, clientSecret, place) {

            if (result.response.venues[0]) {
                var venueId = result.response.venues[0].id;
                var url = 'https://api.foursquare.com/v2/venues/';
                url += venueId + '?' + $.param({
                    'client_id': clientID,
                    'client_secret': clientSecret,
                    'v': '20180219'
                });
                $.ajax({
                    url: url,
                    method: 'GET'
                }).done(function(result) {
                    app.model.addInfoBoxData(result, place);
                }).fail(function(err) {
                    throw err;
                });
            }
        },

        addInfoBoxData: function(result, place) {
            var venue = result.response.venue;
            var info = {
                title: place.title,
                imgUrl: venue.bestPhoto.prefix + '500x300' +
                venue.bestPhoto.suffix,
                phone: venue.contact.formattedPhone,
                address: place.address,
                website: venue.url,
                rating: venue.rating,
                hours: getHours()
            };

            function getHours() {
                if (venue.hours) {
                    var arr = [];
                    var hours = venue.hours.timeframes;
                    hours.forEach(function(timeFrame) {
                        arr.push({
                            days: timeFrame.days,
                            open: timeFrame.open[0].renderedTime
                        });
                    });
                    return arr;
                }
            }

            function createInfoHTML() {
                var ihtml = '';
                ihtml += '<div class="infoBox">';
                info.imgUrl?
                ihtml += '<img src="' + info.imgUrl + '" width="350">':'';
                ihtml += '<h1>' + info.title + '</h1>';
                ihtml += info.address + '<br>';
                info.phone?
                ihtml += 'Phone: ' + info.phone + '<br>':'';
                ihtml += 'Rating: ' + info.rating + '<br>';
                info.website?
                ihtml += '<a href="' + info.website + '" target="_blank">Website</a><br>':'';
                if (info.hours) {
                    ihtml += '<p><b>Open hours:</b><br>';
                    info.hours.forEach(function(timeFrame) {
                        ihtml += timeFrame.days + ': ' + timeFrame.open + '<br>';
                    });
                    ihtml += '</p>';
                }

                ihtml += '</div>';
                return ihtml;
            }
            place.info = createInfoHTML();
        }
    }

})();
