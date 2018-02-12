var neighbourhood = [
    {
        title: 'Trinity Shopping Center',
        address: '27 Albion St, Leeds LS1 5ER'
    },
    {
        title: 'Co-op Food',
        address: 'Co-op Food, 44 New York St, Leeds LS2 7DY'
    },
    {
        title: 'John Lewis',
        address: 'Victoria Gate, Harewood St, Leeds LS2 7AR'
    },
    {
        title: 'Royal Armoories Museum',
        address: 'Royal Armoories Museum, Armouries Dr, Leeds LS10 1LT'
    },
    {
        title: 'North Star Coffee Roasters',
        address: 'North Star Coffee Roasters, 33 Boulevard Rise, Leeds LS10 1PZ'
    },
    {
        title: 'Tesco Express',
        address: 'Tesco Express, 2 the Blvd, Leeds LS10 1PZ'
    },
    {
        title: 'The Light, Vue Ciname',
        address: 'The Light, The Headrow, Leeds LS1 8TL'
    },
    {
        title: 'Train Station',
        address: 'New Station St, Leeds LS1 4DY'
    },
    {
        title: 'City Bus Station',
        address: 'Leeds City Bus Station, Dyer St, Leeds LS2 7LA'
    },
    {
        title: 'Crown Point Shopping Park',
        address: 'Junction St, Leeds LS10 1ET'
    },
    {
        title: 'Morrisons',
        address: 'Morrisons, Merrion Centre, 43 Merrion Center, Leeds LS2 8PL'
    }
];



var Place = function(data) {
    this.title = ko.observable(data.title);
    this.address = ko.observable(data.address);
}
