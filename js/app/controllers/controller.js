var controllers = angular.module("Controllers", [])
    .controller('MainController', ['getData', function(getData) {
        this.spinnerText = 'Loading...';
        this.showSpinner = true;
        this.movies = [];
        getData.getMovies({}, function(data) {
            this.showSpinner = false;
            this.movies = data;
            console.log(data);
        }.bind(this));
    }]);

module.exports = controllers;