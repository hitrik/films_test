require("angular");
var theMovieDb = require('./js/vendor/moviedb');

angular.module("app", [])
.controller("mainController", function($scope, getData) {
        $scope.data = [];
        $scope.toggleFilm = false;
        $scope.hideFilm = function() {
            this.toggleFilm = false;
        };
        $scope.pathImg = theMovieDb.common.images_uri;
        $scope.pathImg_1280 = theMovieDb.common.images_uri_1280;
        $scope.mouseHover = false;
        $scope.onHover = function() {
            this.mouseHover = true;
        };
        $scope.onOut = function() {
            this.mouseHover = false;
        };
        $scope.active = {
            "adult":false,
            "backdrop_path":$scope.pathImg_1280 + "/kvXLZqY0Ngl1XSw7EaMQO0C1CCj.jpg",
            "belongs_to_collection":null,
            "budget":130000000,
            "genres":[{"id":28,"name":"Action"},{"id":12,"name":"Adventure"},{"id":878,"name":"Science Fiction"}],
            "homepage":"http://marvel.com/movies/movie/180/ant-man",
            "id":102899,
            "imdb_id":"tt0478970",
            "original_language":"en",
            "original_title":"Ant-Man",
            "overview":"Armed with the astonishing ability to shrink in scale but increase in strength, con-man Scott Lang must embrace his inner-hero and help his mentor, Dr. Hank Pym, protect the secret behind his spectacular Ant-Man suit from a new generation of towering threats. Against seemingly insurmountable obstacles, Pym and Lang must plan and pull off a heist that will save the world.",
            "popularity":71.163868,
            "poster_path":"/D6e8RJf2qUstnfkTslTXNTUAlT.jpg",
            "production_companies":[{"name":"Marvel Studios","id":420}],
            "production_countries":[{"iso_3166_1":"US","name":"United States of America"}],
            "release_date":"2015-08-14",
            "revenue":518178306,
            "runtime":115,
            "spoken_languages":[{"iso_639_1":"en","name":"English"}],
            "status":"Released",
            "tagline":"Heroes Don't Get Any Bigger",
            "title":"Ant-Man",
            "video":false,
            "vote_average":7.0,
            "vote_count":1635
        };
        $scope.styleObj = {};
        new Promise(function(resolve, reject) {
            getData.getMovies({}, function(result) {
                resolve(result);
            });
        }).then(function(res) {
                $scope.$apply(function() {
                    $scope.data = res;
                });
            });
        $scope.getFilm = function(options) {
            getData.getById(options, function(film) {
                $scope.$apply(function() {
                    $scope.active = film;
                    $scope.styleObj = {
                        'background': "url(" + ($scope.pathImg_1280 + $scope.active.backdrop_path) + ")",
                        'background-size': 'cover'
                    };
                    console.log($scope.styleObj);
                    $scope.toggleFilm = true;
                });
            });
        };

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
        var getById = function(options, callback) {
            options = options || {};
            theMovieDb.movies.getById({"id":options.id }, function(result) {
                callback(JSON.parse(result));
            }, function(err) { console.log(err); })
        };
        return {
            getMovies: getMovies,
            getById: getById
        };
    });
