require("angular");
var theMovieDb = require('./js/vendor/moviedb');

angular.module("app", [])
.controller("mainController", function($scope, getData) {
        $scope.data = [];
        new Promise(function(resolve, reject) {
            getData.getMovies({}, function(result) {
                resolve(result);
            });
        }).then(function(res) {
                $scope.$apply(function() {
                    $scope.data = res;
                });
            });
})
.factory('getData', function() {
        var getMovies = function(options, callback) {
            options = options || {};
            theMovieDb.discover.getMovies(options, function(result) {
                if(callback && typeof callback === 'function') {
                    callback(JSON.parse(result).results);
                }
            }, function(err) {
                console.log(err);
            });
        };
        return {
            getMovies: getMovies
        };
    });
