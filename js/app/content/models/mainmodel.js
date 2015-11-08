"use strict";

var $ = require("jquery");
var Backbone = require("Backbone");
var _ = require("underscore");
Backbone.$ = $;



module.exports = Backbone.Model.extend({
    defaults: {
        image_uri: "http://image.tmdb.org/t/p/w300"
    }
});