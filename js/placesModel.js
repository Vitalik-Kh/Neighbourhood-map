var neighbourhood = [
    {
        title: 'Trinity Shopping Center',
        address: '27 Albion St, Leeds LS1 5ER'
    },
    {
        title: 'Co-op Food',
        address: '44 New York St, Leeds LS2 7DY'
    },
    {
        title: 'John Lewis',
        address: 'Victoria Gate, Harewood St, Leeds LS2 7AR'
    }
];



var Place = function(data) {
    this.title = ko.observable(data.title);
    this.address = ko.observable(data.address);
}
