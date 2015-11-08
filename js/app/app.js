"use strict";

var $ = require("jquery");
var Backbone = require("Backbone");
var _ = require("underscore");
Backbone.$ = $;

var app = app || {};
app.models = app.models || {};
app.views = app.views || {};
app.routes = app.routes || {};
app.global = app.global || {};

app.models.MainModel = require("./content/models/mainmodel");
app.views.MainView = require("./content/views/mainview");
app.global.theMovieDb = require("../vendor/moviedb");


app.models.ModelMovie = Backbone.Model.extend({
    defaults: {
        rating: 0,
        img: "http://placehold.it/100x250",
        name: "No name",
        title: "No title"
    }
});


new app.views.MainView({
    model: new app.models.MainModel
});



