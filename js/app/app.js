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

new app.views.MainView({
    model: new app.models.MainModel
});



