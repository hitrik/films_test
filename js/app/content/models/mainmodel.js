"use strict";

var $ = require("jquery");
var Backbone = require("Backbone");
var _ = require("underscore");
Backbone.$ = $;

var theMovieDb = require("../../../vendor/moviedb");



module.exports = Backbone.Model.extend({

    image_uri: "http://image.tmdb.org/t/p/w300",

    getNewMovies: function(callback) {
        theMovieDb.movies.getLatest(function(data) {
            return callback(data);
        }, function(err) {
            console.log("err: ", err);
        });
    }
});