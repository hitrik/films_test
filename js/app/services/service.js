var theMovieDb = require('../../vendor/moviedb');

var services = angular.module("Services", [])
.factory('getData', function() {
        var getMovies = function(options, callback) {
            options = options || {};
            theMovieDb.discover.getMovies(options, function(result) {
                if(callback && typeof callback === 'function') {
                    callback(result.results);
                }
            }, function(err) {
                console.log(err);
            });
        };
    return {
        getMovies: getMovies.bind(this)
    };
});

module.exports = services;